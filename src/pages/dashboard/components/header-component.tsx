import { Button, Breadcrumbs, Stack, Link } from "@mui/material";
import styled from "@emotion/styled";
import { Fragment } from "react";
import StarIcon from '@mui/icons-material/Star';

import { LineComponent } from "../../../_shared_";

export default function HeaderComponent() {
  return (
    <Fragment>
      <div>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Stocks
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Netherlands
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Banks
          </Link>
        </Breadcrumbs>
      </div>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="left"
        alignItems="center"
      >
        <TickerDiv>INGA</TickerDiv>
        <div>
          <h2>ING Groep</h2>
          <h4>ENXTAM:INGA Stock Report</h4>
        </div>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="right"
        alignItems="center"
      >
        <Button variant="outlined" size="small" startIcon={<StarIcon />}>
          Add to watchlist
        </Button>
        <Button variant="outlined" size="small">
          Add to portfolio
        </Button>
        <Button variant="outlined" size="small">
          ...
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <div>
          <p>LAST PRICE</p>
          <p>€9.42</p>
        </div>
        <div>
          <p>MARKET CAP</p>
          <p>€35.3b</p>
        </div>
        <div>
          <p>7D</p>
          <p>-0.1%</p>
        </div>
        <div>
          <p>1Y</p>
          <p>-13.4%</p>
        </div>
        <div>
          <p>&nbsp;</p>
          <LineComponent {...{height: 100, width: 200}}/>
        </div>
        <div>
          <p>&nbsp;</p>
          <p>UPDATED 10 Jul, 2022</p>
        </div>
        <div>
          <p>&nbsp;</p>
          <p>
            DATA Company Financials <Button>+ 18 Analysts</Button>
          </p>
        </div>
      </Stack>
    </Fragment>
  );
}

// Styled Components

const TickerDiv = styled.div`
  background-color: goldenrod;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
`;
