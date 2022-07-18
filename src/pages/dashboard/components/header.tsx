import { Button, Breadcrumbs, Stack, Link } from "@mui/material";
import styled from "@emotion/styled";
import { Fragment } from "react";
import StarIcon from "@mui/icons-material/Star";

import { LineComponent, withLoadingSpinner } from "../../../_shared_";
import { IHeaderDataType } from "../../../api/data-types";

export function HeaderContainer({
  fetchData,
}: {
  fetchData: () => Promise<IHeaderDataType>;
}) {
  return withLoadingSpinner<IHeaderDataType>({
    WrappedComponent: HeaderComponent,
    fetchData,
    cacheName: "header",
    otherProps: {},
  });
}

export function HeaderComponent({ data }: { data: IHeaderDataType }) {
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
        <TickerDiv>{data.ticker}</TickerDiv>
        <div>
          <h2>{data.name}</h2>
          <h4>{`${data.exchangeName}:${data.ticker} Stock Report`}</h4>
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
          <p>{data.lastPrice}</p>
        </div>
        <div>
          <p>MARKET CAP</p>
          <p>{data.marketCap}</p>
        </div>
        <div>
          <p>7D</p>
          <p>{data.priceLastSevenDays}</p>
        </div>
        <div>
          <p>1Y</p>
          <p>{data.priceLastYear}</p>
        </div>
        <div>
          <LineContainer>
            <LineComponent data={data.history} />
          </LineContainer>
        </div>
        <div>
          <p>UPDATED {data.lastUpdated.toDateString()}</p>
        </div>
        <div>
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

const LineContainer = styled.div`
  height: 30px;
  width: 400px;
`;
