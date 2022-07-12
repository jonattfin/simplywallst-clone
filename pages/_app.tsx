import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { HeaderComponent } from "../src/_shared_";

const backgroundColor = "#151B24";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <Grid container>
          <Grid item xl={3}></Grid>
          <Grid item xl={6}>
            <nav>
              <HeaderComponent />
            </nav>
            <main>
              <Component {...pageProps} />
            </main>
            <footer></footer>
          </Grid>
          <Grid item xl={3}></Grid>
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
}

{
  /* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */
}

export default MyApp;
