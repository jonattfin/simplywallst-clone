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
  header: HeaderProps;
  overview: OverviewProps;
  history: HistoryProps;
}

const ticker = "INGA";

const props: DashboardProps = {
  header: {
    ticker,
    name: "ING Groep",
    exchangeName: "ENXTAM",
    lastPrice: 9.42,
    marketCap: 35.3e9,
    priceLastSevenDays: -0.1,
    priceLastYear: -13.4,
    lastUpdated: new Date(2022, 6, 10),
  },
  overview: {
    ticker,
    description: `ING Groep N.V., a financial institution, provides various banking
    products and services in the Netherlands, Belgium, Germany,
    Poland, Rest of Europe, North America, Latin America, Asia, and
    Australia.`,
    rewards: [
      "Trading at 67% below our estimate of its fair value",
      "Earnings are forecast to grow 12.35% per year",
      "Earnings grew by 48.9% over the past year",
    ],
    risks: ["Unstable dividend track record"],
  },
  history: {
    news: [
      {
        date: new Date(2022, 5, 18),
        type: "Inbox",
        value:
          "ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022.",
      },
      {
        date: new Date(2022, 4, 1),
        type: "Inbox",
        value:
          "First quarter 2022 earnings: EPS exceeds analyst expectations.",
      },
      {
        date: new Date(2022, 3, 7),
        type: "Inbox",
        value:
          "Upcoming dividend of €0.41 per share.",
      },
      {
        date: new Date(2022, 2, 1),
        type: "Inbox",
        value:
          "Boursorama Société Anonyme agreed to acquire Retail Banking Business of ING Groep NV in France from ING Groep N.V. (ENXTAM:INGA)",
      },
    ],
  },
};

const PaperComponents: any[][] = [
  [OverviewComponent, props.overview],
  [CompetitorsComponent, {}],
  [HistoryComponent, props.history],
  [CompanyComponent, {}],
  [FundamentalsComponent, {}],
  [OwnershipComponent, {}],
];

export default function DashboardComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Paper elevation={3}>
          <InnerContainer>
            <HeaderComponent {...props.header} />
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

// Styled Components

const InnerContainer = styled.div`
  padding: 1% 3%;
`;
