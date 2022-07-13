import styled from "@emotion/styled";
import { Button, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SubjectIcon from "@mui/icons-material/Subject";

import { RadarComponent } from "../../../_shared_";
import { OverviewDataType } from "../../../api/data-types";

export interface OverviewProps {
  data: OverviewDataType;
}

export default function OverviewContainer({ data }: OverviewProps) {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <p>{data.ticker} Stock Overview</p>
            <p>{data.description}</p>
            <div>
              <Button variant="outlined" startIcon={<InfoIcon />} size="small">
                About the company
              </Button>
            </div>
            <p>REWARDS</p>
            <ul>
              {data.rewards.map((reward, index) => (
                <li key={`reward_${index}`}>{reward}</li>
              ))}
            </ul>
            <p>RISK ANALYSIS</p>
            <ul>
              {data.risks.map((risk, index) => (
                <li key={`risk_${index}`}>{risk}</li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={2}>
            <RadarContainer>
              <RadarComponent {...{ width: 200, height: 200 }} />
            </RadarContainer>
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
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;
`;
