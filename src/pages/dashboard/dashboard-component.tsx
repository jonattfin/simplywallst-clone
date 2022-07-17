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
import { MenuItems } from "./components/menu-component";

export default function DashboardComponent({
  data,
}: {
  data: IDashboardDataType;
}) {
  const AppComponents = getApplicationComponents({ data });

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

function getApplicationComponents({ data }: { data: IDashboardDataType }) {
  const appComponents: any[][] = [
    [OverviewComponent, { data: data.getOverview() }],
    [CompetitorsComponent, { data: data.getCompetitors() }],
    [HistoryComponent, { data: data.getHistory() }],
    [FundamentalsComponent, { data: data.getFundamentals() }],

    [FinancialHealthComponent, { data: data.getFinancialHealth() }],
    [DividendComponent, { data: data.getDividend() }],
    [OwnershipComponent, { data: data.getOwnership() }],
    [CompanyComponent, {}],
  ];

  return appComponents;
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
