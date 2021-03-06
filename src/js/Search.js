import * as find from "@arcgis/core/rest/find";
import FindParameters from "@arcgis/core/rest/support/FindParameters";
import store from "../store/store";
import { getAllLayerByTitle, getMapLayerByTitle } from "./Layers";
import { clearIdentifyResults, highlightFeature, parseResult } from "./Identify";
import { setIdentifyResults, setIdentifyLoading } from "../store/actions/appActions";
import { setLayerVisible } from "../store/actions/layerActions";
import { toast } from "../js/Utilities";

export const findFeature = async ({ LayerName, FieldName, FieldValue }) => {
  clearIdentifyResults();
  store.dispatch(setIdentifyLoading(true));
  const { layers, app } = store.getState();
  const outSpatialReference = app.view.spatialReference;
  let mapLayer;

  if (LayerName === "Address Search") {
    mapLayer = layers.addressLayer;
  } else if (LayerName === "Intersection Search") {
    mapLayer = layers.intersectionLayer;
  } else {
    mapLayer = getMapLayerByTitle(LayerName);
    if (!mapLayer) mapLayer = getAllLayerByTitle(LayerName);
  }

  let findParameters = new FindParameters({
    returnGeometry: true,
    contains: false,
    layerIds: [mapLayer.id],
    searchFields: [FieldName],
    searchText: FieldValue,
    outSpatialReference,
  });

  const { results } = await find.find(mapLayer.serviceUrl, findParameters);

  if (results.length) {
    showResults(results);
    if (!mapLayer.layer.visible) store.dispatch(setLayerVisible(mapLayer, true));
  }
  store.dispatch(setIdentifyLoading(false));
};

const getAddressLot = async (lotLink) => {
  const { layers, app } = store.getState();
  const outSpatialReference = app.view.spatialReference;

  const lotsLayer = layers.lotsLayer;

  const findParameters = new FindParameters({
    returnGeometry: true,
    contains: false,
    layerIds: [lotsLayer.id],
    searchFields: ["MSLINK"],
    searchText: lotLink,
    outSpatialReference,
  });

  const { results } = await find.find(lotsLayer.serviceUrl, findParameters);
  return parseResult(results[0]);
};

export const findLayer = ({ LayerName }) => {
  const mapLayer = getMapLayerByTitle(LayerName);
  if (!mapLayer.layer.visible) {
    store.dispatch(setLayerVisible(mapLayer, true));
  }
  toast({ text: `Added layer to map: ${mapLayer.title}` });
};

const zoomToFeature = async (feature) => {
  const { view } = store.getState().app;
  await view.goTo(feature.geometry);
  if (feature.geometry.type === "point" || view.scale < 500) view.scale = 550;
};

const showResults = async (results) => {
  const parsedResult = { ...parseResult(results[0]), open: true };

  if (parsedResult.layerName === "Address Search") {
    const { Value: lotLink } = parsedResult.attributes.find(
      (attribute) => attribute.Field === "LOT LINK"
    );
    const addressLot = await getAddressLot(lotLink);
    store.dispatch(setIdentifyResults([{ ...addressLot, open: true }]));
  } else {
    store.dispatch(setIdentifyResults([parsedResult]));
  }
  zoomToFeature(results[0].feature);
  highlightFeature(results[0].feature);
};
