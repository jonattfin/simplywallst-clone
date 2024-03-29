import styled from "@emotion/styled";
import { Button, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SubjectIcon from "@mui/icons-material/Subject";
import { gql } from "@apollo/client";
import { head } from "lodash";

import { WithLoadingSpinner } from "../../../_shared_";
import RadarComponent from "../../../_shared_/radar";
import { ICompanyOverview } from "../../../api/graphql-types";

export const GET_OVERVIEW_QUERY = gql`
  query getOverviewData($id: Int!) {
    company(id: $id) {
      name
      description
      rewards {
        description
      }
      risks {
        description
      }
      stocks {
        ticker
        marketCap
      }
      snowflakeValueJson
    }
  }
`;

export function OverviewContainer({
  sectionName,
  companyId,
}: {
  sectionName: string;
  companyId: number;
}) {
  return WithLoadingSpinner<ICompanyOverview>({
    WrappedComponent: OverviewComponent,
    query: GET_OVERVIEW_QUERY,
    otherProps: { sectionName },
    variables: {
      id: companyId,
    },
  });
}

export function OverviewComponent({
  data,
  sectionName,
}: {
  data: ICompanyOverview;
  sectionName: string;
}) {
  const { company } = data;
  const { rewards = [], risks = [] } = company;
  const stock = head(company.stocks);

  if (!stock) return <div>&nbsp;</div>;

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <h4 id={sectionName}>{stock.ticker} Stock Overview</h4>
            <p>{company.description}</p>
            <div>
              <Button variant="outlined" startIcon={<InfoIcon />} size="small">
                About the company
              </Button>
            </div>
            <p>REWARDS</p>
            <ul>
              {rewards.map(({ description }, index) => (
                <li key={`reward_${index}`}>{description}</li>
              ))}
            </ul>
            <p>RISK ANALYSIS</p>
            <ul>
              {risks.map(({ description }, index) => (
                <li key={`risk_${index}`}>{description}</li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={2}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={JSON.parse(company.snowflakeValueJson)} />
              </RadarContainer>
            </RadarWrapper>
            <p>Snowflake Analysis</p>
            <p>Undervalued with excellent balance sheet and pays a dividend.</p>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="right"
              alignItems="center"
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<SubjectIcon />}
              >
                Data
              </Button>
              <Button variant="outlined" size="small">
                Learn
              </Button>
              <Button variant="outlined" size="small">
                ...
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
}

// Styled Components

const RadarContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const RadarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
