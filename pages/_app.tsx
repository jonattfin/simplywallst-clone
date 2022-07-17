import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import { HeaderComponent } from "../src/_shared_";
import styled from "@emotion/styled";

const blackColor = "#151B24";
const whiteColor = "grey";

const getTheme = () => {
  const themeObject: ThemeOptions = {
    palette: {
      mode: "dark",
      background: {
        default: blackColor,
        paper: blackColor,
      },
      primary: {
        main: "#1976d2",
      },
    },
  };

  return createTheme(themeObject);
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const MainContainer = getMainContainer(theme);
  return (
    <MainContainer>
      <ThemeProvider theme={getTheme()}>
        <Grid container>
          <Grid item xl={3}></Grid>
          <Grid item xl={6}>
            <nav>
              <HeaderComponent {...{ theme, setTheme }} />
            </nav>
            <main>
              <Component {...pageProps} />
            </main>
            <footer></footer>
          </Grid>
          <Grid item xl={3}></Grid>
        </Grid>
      </ThemeProvider>
    </MainContainer>
  );
}

function getMainContainer(theme: string) {
  const color = theme == "dark" ? blackColor : whiteColor;
  return styled.div`
    background-color: ${color};
  `;
}

{
  /* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */
}
