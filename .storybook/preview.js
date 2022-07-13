import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const backgroundColor = "#151B24";

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
        value: backgroundColor,
      },
    ],
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: backgroundColor,
      paper: backgroundColor,
    },
    primary: {
      main: "#1976d2",
    },
  },
});

export const decorators = [
  (Story) => (
    // <Story />
    <ThemeProvider theme={darkTheme}>
    //   <Story />
    // </ThemeProvider>
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
