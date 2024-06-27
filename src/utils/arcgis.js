import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map.js";

export const map = new Map({
    basemap: "dark-gray-vector",
});

export const viewMap = new MapView({
    map: map,  // References a Map instance
    center: [-79.34, 43.70],
    zoom: 10,
});