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
  OwnershipComponent,
} from "./components";

import { Fragment } from "react";
import { HeaderProps } from "./components/header-component";
import { OverviewProps } from "./components/overview-component";
import { HistoryProps } from "./components/history-component";

export interface DashboardProps {
  data: {
    header: HeaderProps;
    overview: OverviewProps;
    history: HistoryProps;
  };
}

export default function DashboardComponent(props: DashboardProps) {
  const PaperComponents = getPaperComponents(props);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <HeaderComponent {...props.data.header} />
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

function getPaperComponents({ data }: DashboardProps) {
  const PaperComponents: any[][] = [
    [OverviewComponent, data.overview],
    [CompetitorsComponent, {}],
    [HistoryComponent, data.history],
    [CompanyComponent, {}],
    [FundamentalsComponent, {}],
    [OwnershipComponent, {}],
  ];

  return PaperComponents;
}

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;