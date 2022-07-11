import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];

function getCustomViewports() {
  return {
    fhd: {
      name: "FHD",
      styles: {
        width: "1200px",
        height: "1080px",
      },
    },
  };
}
