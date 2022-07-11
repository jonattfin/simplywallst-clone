import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

import {
  CompanyComponent,
  CompetitorsComponent,
  FundamentalsComponent,
  HeaderComponent,
  HistoryComponent,
  MenuComponent,
  OverviewComponent,
} from "./components";

import MainHeaderComponent from "./header-component";
import { Fragment } from "react";

const PaperComponents: any[] = [
  OverviewComponent,
  CompetitorsComponent,
  HistoryComponent,
  CompanyComponent,
  FundamentalsComponent,
];

export default function DashboardComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <MainHeaderComponent />
      </Grid>
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
        {PaperComponents.map((CustomComponent, index) => (
          <Fragment key={`paper_${index}`}>
            <Paper elevation={3}>
              <InnerContainer>
                <CustomComponent />
              </InnerContainer>
            </Paper>
            <br />
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
