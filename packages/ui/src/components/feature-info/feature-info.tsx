import { Component, Prop, h, Watch, State, Fragment, Event, EventEmitter } from "@stencil/core";
import type Graphic from "@arcgis/core/Graphic";
import type Feature from "@arcgis/core/widgets/Feature";

import "@esri/calcite-components/dist/components/calcite-card";
import "@esri/calcite-components/dist/components/calcite-button";

export type ArcGISGraphic = InstanceType<typeof Graphic>;
export type ArcGISFeature = InstanceType<typeof Feature>;

@Component({
  tag: "feature-info",
  styleUrl: "feature-info.css",
  shadow: false, // uses esri css
})
export class FeatureInfo {
  /**
   * Container for Feature Widget
   */
  featureElement!: HTMLDivElement;

  /**
   * Properties
   */
  @Prop({ mutable: true }) feature: ArcGISFeature;

  @Prop({ mutable: true }) graphics: ArcGISGraphic[];

  @Prop({ mutable: true }) selectedGraphic: ArcGISGraphic;

  @Prop() showZoom: boolean;

  /**
   * Component State
   */
  @State() currentIndex: number = 0;

  /**
   * Watch Handlers
   */
  @Watch("feature")
  watchFeatureHandler(_feature: ArcGISFeature) {
    this.feature = _feature;
    this.feature.container = this.featureElement;
    if (this.graphics) {
      this.init();
    }
  }

  @Watch("graphics")
  watchGraphicsHandler(_graphics: ArcGISGraphic[]) {
    this.graphics = _graphics;
    this.currentIndex = 0;
    if (this.feature) {
      this.init();
    }
  }

  /**
   * Public Events
   */

  @Event() selectedGraphicChange: EventEmitter<ArcGISGraphic>;
  @Event() focusOnGraphic: EventEmitter<ArcGISGraphic>;

  /**
   * Internal Methods
   */

  init() {
    this.feature.graphic = this.graphics[0];
    this.selectedGraphic = this.graphics[0];
  }

  goNext() {
    this.currentIndex = this.currentIndex + 1;
    this.update();
  }

  goPrevious() {
    this.currentIndex = this.currentIndex - 1;
    this.update();
  }

  update() {
    if (this.currentIndex < 0) {
      this.currentIndex = this.graphics.length - 1;
    } else if (this.currentIndex == this.graphics.length) {
      this.currentIndex = 0;
    }
    this.feature.graphic = this.graphics[this.currentIndex];
    this.selectedGraphic = this.graphics[this.currentIndex];
    this.selectedGraphicChange.emit(this.selectedGraphic);
  }

  render() {
    return (
      <calcite-card>
        <div ref={(el) => this.featureElement = el as HTMLDivElement}></div>
        {
          this.showZoom ?
            <calcite-button
              slot="footer-start"
              color="neutral"
              scale="s"
              icon-start="magnifying-glass-plus"
              onClick={() => {
                this.focusOnGraphic.emit(this.selectedGraphic);
              }}
            ></calcite-button>
            : null
        }
        <div slot="footer-end">
          {this.graphics?.length ? (
            <Fragment>
              <span class="feature-info--count">
                {this.currentIndex + 1} of {this.graphics.length}
              </span>
              <calcite-button color="neutral" icon-start="chevron-left" onClick={this.goPrevious.bind(this)}></calcite-button>
              <calcite-button color="neutral" icon-start="chevron-right" onClick={this.goNext.bind(this)}></calcite-button>
            </Fragment>
          ) : null}
        </div>
      </calcite-card>
    );
  }
}
