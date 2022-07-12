import styled from "@emotion/styled";
import { Button, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SubjectIcon from '@mui/icons-material/Subject';

import { RadarComponent } from "../../../_shared_";

export default function OverviewContainer() {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <p>INGA Stock Overview</p>
            <p>
              ING Groep N.V., a financial institution, provides various banking
              products and services in the Netherlands, Belgium, Germany,
              Poland, Rest of Europe, North America, Latin America, Asia, and
              Australia.
            </p>
            <div>
              <Button variant="outlined" startIcon={<InfoIcon />} size="small">
                About the company
              </Button>
            </div>
            <p>REWARDS</p>
            <ul>
              <li>Trading at 67% below our estimate of its fair value</li>
              <li>Earnings are forecast to grow 12.35% per year</li>
              <li>Earnings grew by 48.9% over the past year</li>
            </ul>
            <p>RISK ANALYSIS</p>
            <ul>
              <li>Unstable dividend track record</li>
            </ul>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={2}>
            <RadarContainer>
              {/* <RadarComponent {...{ width: 200, height: 200 }} /> */}
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
