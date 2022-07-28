import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const blackBackgroundColor = "#151B24";
const whiteBackgroundColor = "#FFFFFF";

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
    default: "Light-SimplyWallSt",
    values: [
      {
        name: "Light-SimplyWallSt",
        value: whiteBackgroundColor,
      },
      {
        name: "Dark-SimplyWallSt",
        value: blackBackgroundColor,
      },
    ],
  },
};

const getTheme = () => {
  const themeObject = {
    palette: {
      mode: "dark",
      background: {
        default: blackBackgroundColor,
        paper: blackBackgroundColor,
      },
      primary: {
        main: "#1976d2",
      },
    },
  };

  return createTheme(themeObject);
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={getTheme()}>
      <Story />
    </ThemeProvider>
  ),
];

function getCustomViewports() {
  return {
    fhd: {
      name: "FHD",
      styles: {
        width: "1920px",
        height: "1080px",
      },
    },
    hd: {
      name: "HD",
      styles: {
        width: "1280px",
        height: "720px",
      },
    },
  };
}
