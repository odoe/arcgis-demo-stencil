# feature-info



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute   | Description | Type        | Default     |
| ----------------- | ----------- | ----------- | ----------- | ----------- |
| `feature`         | --          | Properties  | `Feature`   | `undefined` |
| `graphics`        | --          |             | `Graphic[]` | `undefined` |
| `selectedGraphic` | --          |             | `Graphic`   | `undefined` |
| `showZoom`        | `show-zoom` |             | `boolean`   | `undefined` |


## Events

| Event                   | Description   | Type                   |
| ----------------------- | ------------- | ---------------------- |
| `focusOnGraphic`        |               | `CustomEvent<Graphic>` |
| `selectedGraphicChange` | Public Events | `CustomEvent<Graphic>` |


## Dependencies

### Depends on

- calcite-card
- calcite-button

### Graph
```mermaid
graph TD;
  feature-info --> calcite-card
  feature-info --> calcite-button
  calcite-card --> calcite-loader
  calcite-card --> calcite-label
  calcite-card --> calcite-checkbox
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style feature-info fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
