import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import Extent from "@arcgis/core/geometry/Extent";
import settings from "../config/Settings";
import store from "../store/store";
import { addLegendLayer } from "../store/actions/layerActions";

export const extent = new Extent({
  xmin: 505e3,
  ymin: 5425e3,
  xmax: 524e3,
  ymax: 5455e3,
  spatialReference: { wkid: 26910 },
});

export const map = new ArcGISMap();

export let view = new MapView({ map, extent });

view.on("layerview-create", ({ layer }) => {
  const title = layer.title;
  store.dispatch(addLegendLayer({ layer, title }));
  if (title === "Drainage") {
    layer.allSublayers.forEach((sublayer) => {
      console.log(sublayer.title, sublayer.minScale, sublayer.maxScale);
    });
  }
});

settings.mapServices.forEach(({ id, url }) => {
  const mapService = new MapImageLayer({
    id,
    url,
    visible: true,
  });
  map.add(mapService);
});

export const initialize = (container) => {
  view.container = container;
  return view;
};
