import { Config } from '@stencil/core';
import resolvePkg from "resolve-pkg";

export const config: Config = {
  namespace: 'odoenet-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: "www",
      baseUrl: "/",
      copy: [
        {
          src: resolvePkg("@esri/calcite-components/dist/calcite") ?? "",
          dest: "vendor/calcite-components"
        },
      ],
      serviceWorker: null // disable service workers
    }
  ],
};
