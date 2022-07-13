import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

import {
  CompanyComponent,
  CompetitorsComponent,
  FinancialHealthComponent,
  FundamentalsComponent,
  HeaderComponent,
  HistoryComponent,
  MenuComponent,
  OverviewComponent,
  OwnershipComponent,
} from "./components";

import { Fragment } from "react";
import { DashboardDataType } from "../../api/data-types";

export default function DashboardComponent(data: DashboardDataType) {
  const PaperComponents = getPaperComponents(data);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <HeaderComponent {...data.header} />
          </InnerContainer>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={3}>
          <MenuComponent />
        </Paper>
      </Grid>
      <Grid item xs>
        {PaperComponents.map(([CustomComponent, customProps], index) => (
          <Fragment key={`paper_${index}`}>
            <Paper elevation={3}>
              <InnerContainer>
                <CustomComponent {...customProps} />
              </InnerContainer>
            </Paper>
            <br />
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
}

function getPaperComponents(data: DashboardDataType) {
  const PaperComponents: any[][] = [
    [OverviewComponent, data.overview],
    [CompetitorsComponent, data.competitors],
    [HistoryComponent, data.history],
    [CompanyComponent, {}],
    [FundamentalsComponent, data.fundamentals],
    [FinancialHealthComponent, data.financialHealth],
    [OwnershipComponent, data.ownership],
  ];

  return PaperComponents;
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
