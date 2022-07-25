import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import { HeaderComponent } from "../src/_shared_";
import styled from "@emotion/styled";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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

const client = new ApolloClient({
  // uri: "http://localhost:8080/graphql",
  uri: "https://simplywallst.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const MainContainer = getMainContainer(theme);
  return (
    <MainContainer>
      <ApolloProvider client={client}>
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
              <footer />
            </Grid>
            <Grid item xl={3}></Grid>
          </Grid>
        </ThemeProvider>
      </ApolloProvider>
    </MainContainer>
  );
}

function getMainContainer(theme: string) {
  const color = theme == "dark" ? blackColor : whiteColor;
  return styled.div`
    background-color: ${color};
  `;
}
