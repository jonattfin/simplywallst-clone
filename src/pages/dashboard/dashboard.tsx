import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

import {
  Competitors,
  Dividend,
  FinancialHealth,
  Fundamentals,
  MenuComponent,
  History,
  Overview,
  Ownership,
} from "./components";

import { Fragment } from "react";
import { IDashboardDataTypeAsync } from "../../api/data-types";
import { MenuItems } from "./components/menu";

export function DashboardComponent({
  data,
}: {
  data: IDashboardDataTypeAsync;
}) {
  const AppComponents = getApplicationComponents({ data });

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      {/* <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <Header.HeaderContainer
              {...{ fetchData: () => data.getHeaderAsync() }}
            />
          </InnerContainer>
        </Paper>
      </Grid> */}
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
                <CustomComponent
                  {...customProps}
                  sectionName={MenuItems[index].replace(" ", "_")}
                />
              </InnerContainer>
            </Paper>
            <br />
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
}

function getApplicationComponents({ data }: { data: IDashboardDataTypeAsync }) {
  const appComponents: any[][] = [
    [Overview.OverviewContainer, { fetchData: () => data.getOverviewAsync() }],
    [
      Competitors.CompetitorsContainer,
      { fetchData: () => data.getCompetitorsAsync() },
    ],
    [History.HistoryContainer, { fetchData: () => data.getHistoryAsync() }],
    [
      Fundamentals.FundamentalsContainer,
      { fetchData: () => data.getFundamentalsAsync() },
    ],
    [
      FinancialHealth.FinancialHealthContainer,
      { fetchData: () => data.getFinancialHealthAsync() },
    ],
    [Dividend.DividendContainer, { fetchData: () => data.getDividendAsync() }],
    [
      Ownership.OwnershipContainer,
      { fetchData: () => data.getOwnershipAsync() },
    ],
  ];

  return appComponents;
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
