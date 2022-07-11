import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

import {
  CompanyComponent,
  CompetitorsComponent,
  HeaderComponent,
  HistoryComponent,
  MenuComponent,
  OverviewComponent,
} from "./components";

export default function DashboardComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <HeaderComponent />
          </InnerContainer>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={3}>
          <MenuComponent />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper elevation={3}>
          <InnerContainer>
            <OverviewComponent />
          </InnerContainer>
        </Paper>
        <br />
        <Paper elevation={3}>
          <InnerContainer>
            <CompetitorsComponent />
          </InnerContainer>
        </Paper>
        <br />
        <Paper elevation={3}>
          <InnerContainer>
            <HistoryComponent />
          </InnerContainer>
        </Paper>
        <br />
        <Paper elevation={3}>
          <InnerContainer>
            <CompanyComponent />
          </InnerContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
