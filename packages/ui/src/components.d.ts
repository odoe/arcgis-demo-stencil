/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ArcGISFeature, ArcGISGraphic } from "./components/feature-info/feature-info";
export namespace Components {
    interface FeatureInfo {
        /**
          * Properties
         */
        "feature": ArcGISFeature;
        "graphics": ArcGISGraphic[];
        "selectedGraphic": ArcGISGraphic;
        "showZoom": boolean;
    }
}
export interface FeatureInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFeatureInfoElement;
}
declare global {
    interface HTMLFeatureInfoElement extends Components.FeatureInfo, HTMLStencilElement {
    }
    var HTMLFeatureInfoElement: {
        prototype: HTMLFeatureInfoElement;
        new (): HTMLFeatureInfoElement;
    };
    interface HTMLElementTagNameMap {
        "feature-info": HTMLFeatureInfoElement;
    }
}
declare namespace LocalJSX {
    interface FeatureInfo {
        /**
          * Properties
         */
        "feature"?: ArcGISFeature;
        "graphics"?: ArcGISGraphic[];
        "onFocusOnGraphic"?: (event: FeatureInfoCustomEvent<ArcGISGraphic>) => void;
        /**
          * Public Events
         */
        "onSelectedGraphicChange"?: (event: FeatureInfoCustomEvent<ArcGISGraphic>) => void;
        "selectedGraphic"?: ArcGISGraphic;
        "showZoom"?: boolean;
    }
    interface IntrinsicElements {
        "feature-info": FeatureInfo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "feature-info": LocalJSX.FeatureInfo & JSXBase.HTMLAttributes<HTMLFeatureInfoElement>;
        }
    }
}
