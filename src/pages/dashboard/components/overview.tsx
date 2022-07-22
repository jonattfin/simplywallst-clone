import styled from "@emotion/styled";
import { Button, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SubjectIcon from "@mui/icons-material/Subject";

import { RadarComponent, withLoadingSpinner } from "../../../_shared_";
import { IOverviewDataType } from "../../../api/data-types";
import { gql } from "@apollo/client";
import { generateSnowflakeValues } from "../../../api/dashboardDataType";

const GET_OVERVIEW_QUERY = gql`
  query getOverviewData {
    company(id: 1) {
      name
      description
      rewards {
        description
      }
      risks {
        description
      }
    }
    stock(id: 1) {
      ticker
    }
  }
`;

export function OverviewContainer({ sectionName }: { sectionName: string }) {
  return withLoadingSpinner<IOverviewDataType>({
    WrappedComponent: OverviewComponent,
    query: GET_OVERVIEW_QUERY,
    otherProps: { sectionName },
  });
}

export function OverviewComponent({
  data,
  sectionName,
}: {
  data: IOverviewDataType;
  sectionName: string;
}) {
  const { company, stock } = data;

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
              {company.rewards.map(({ description }, index) => (
                <li key={`reward_${index}`}>{description}</li>
              ))}
            </ul>
            <p>RISK ANALYSIS</p>
            <ul>
              {company.risks.map(({ description }, index) => (
                <li key={`risk_${index}`}>{description}</li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={2}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={generateSnowflakeValues(company.name)} />
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
