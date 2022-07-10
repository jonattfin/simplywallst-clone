import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...getCustomViewports(), ...MINIMAL_VIEWPORTS }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: "fhd",
  },
  backgrounds: {
    default: "SimplyWallSt",
    values: [
      {
        name: "SimplyWallSt",
        value: "#151B24",
      },
    ],
  },
};

function getCustomViewports() {
  return {
    fhd: {
      name: "FHD",
      styles: {
        width: "1920px",
        height: "1080px",
      },
    },
  };
}
