import { Grid, Paper, Stack } from "@mui/material";
// import styled from "@emotion/styled";

import { HeaderComponent } from "./components";

export default function DashboardComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={3}>{"menu"}</Paper>
      </Grid>
      <Grid item xs>
        <Paper elevation={3}>{"content"}</Paper>
      </Grid>
    </Grid>
  );
}

// Styled Components

function renderContent(content: string, color: string) {
  return;
}
