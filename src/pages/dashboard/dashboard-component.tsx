import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

import {
  CompanyComponent,
  CompetitorsComponent,
  DividendComponent,
  FinancialHealthComponent,
  FundamentalsComponent,
  HeaderComponent,
  HistoryComponent,
  MenuComponent,
  OverviewComponent,
  OwnershipComponent,
} from "./components";

import { Fragment } from "react";
import { IDashboardDataType } from "../../api/data-types";

export default function DashboardComponent({
  data,
}: {
  data: IDashboardDataType;
}) {
  const AppComponents = getApplicationComponents(data);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <HeaderComponent {...data.getHeader()} />
          </InnerContainer>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={3}>
          <MenuComponent />
        </Paper>
      </Grid>
      <Grid item xs>
        {AppComponents.map(([CustomComponent, customProps], index) => (
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

function getApplicationComponents(data: IDashboardDataType) {
  const appComponents: any[][] = [
    [OverviewComponent, data.getOverview()],
    [CompetitorsComponent, data.getCompetitors()],
    [HistoryComponent, data.getHistory()],

    [FundamentalsComponent, data.getFundamentals()],
    [FinancialHealthComponent, data.getFinancialHealth()],
    [DividendComponent, data.getDividend()],

    [OwnershipComponent, data.getOwnership()],
    [CompanyComponent, {}],
  ];

  return appComponents;
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
