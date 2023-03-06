import "./style.css";

import "@odoenet/ui/dist/components/feature-info";

import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { whenOnce } from "@arcgis/core/core/reactiveUtils";
import Feature from "@arcgis/core/widgets/Feature";

const info = document.querySelector("feature-info")!;

const fLayer = new FeatureLayer({
    portalItem: {
        id: "f430d25bf03744edbb1579e18c4bf6b8"
    },
    layerId: 2,
    outFields: ["*"]
});

const map = new ArcGISMap({
    basemap: "gray-vector",
    layers: [fLayer]
});

const view = new MapView({
    container: "viewDiv",
    map,
    center: [-118, 34],
    zoom: 12
});

const feature = new Feature({ view });


view.when(async () => {
    let highlight: any;

    info.feature = feature;

    const layerView = await view.whenLayerView(fLayer);

    await whenOnce(
        () => !layerView.updating,
    );

    const query = fLayer.createQuery();
    query.geometry = view.extent;
    const { features } = await layerView.queryFeatures(query);

    info.graphics = features;

    highlight && highlight.remove();
    highlight = layerView.highlight(features[0]);

    info.addEventListener("selectedGraphicChange", (e: any) => {
        highlight && highlight.remove();
        highlight = layerView.highlight(e.detail);
    });

    info.addEventListener("focusOnGraphic", (e: any) => {
        highlight && highlight.remove();
        highlight = layerView.highlight(e.detail);
        view.goTo(e.detail);
    });

});
