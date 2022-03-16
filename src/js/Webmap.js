import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import settings from "../config/Settings";
import {
  addOrthoServices,
  addMapServices,
  updateLayerListInScale,
  setMapThemeLayers,
} from "./Layers";
import { identifyMapPoint } from "./Identify";
const axios = require("axios");

const onViewStationary = () => {
  updateLayerListInScale(view.scale);
};

const csGraphicsLayer = new GraphicsLayer({
  id: "CosGraphicsLayer",
});

const map = new ArcGISMap();

export let view = new MapView({ map, extent: settings.startingExtent });

addOrthoServices(map);
addMapServices(map);
map.add(csGraphicsLayer);

view.watch("stationary", onViewStationary);

view.when(() => {
  setMapThemeLayers("City Map");
});

view.on("click", ({ mapPoint }) => {
  identifyMapPoint({ mapPoint, view });
});

export const initialize = (container) => {
  view.container = container;
  // const url =
  //   "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetPropertyDataAll/5327;";
  // const url2 = "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAddressData/5327";

  // axios.get(url).then(({ data }) => console.log("GetPropertyDataAll", data));
  // axios.get(url2).then(({ data }) => console.log("GetAddressData", data));
  return view;
};
