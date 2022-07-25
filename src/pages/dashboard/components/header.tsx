import { Button, Breadcrumbs, Stack, Link } from "@mui/material";
import styled from "@emotion/styled";
import { Fragment } from "react";
import StarIcon from "@mui/icons-material/Star";
import { gql } from "@apollo/client";
import { head } from 'lodash';

import { LineComponent, withLoadingSpinner } from "../../../_shared_";
import { IHeaderDataType } from "../../../api/data-types";
import { generateHistory } from "../../../api/dashboardDataType";

const GET_HEADER_QUERY = gql`
  query getHeaderData {
    company(id: 1) {
      name
      stocks {
        ticker
        exchangeName
        lastPrice
        marketCap
        priceSevenDays
        priceOneYear
        lastUpdated
      }
    }
  }
`;

export function HeaderContainer() {
  return withLoadingSpinner<IHeaderDataType>({
    WrappedComponent: HeaderComponent,
    query: GET_HEADER_QUERY,
  });
}

export function HeaderComponent({ data }: { data: IHeaderDataType }) {
  const { company } = data;
  const stock = head(company.stocks);

  if (!stock) {
    return <div>&nbsp;</div>
  }

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
        <TickerDiv>{stock.ticker}</TickerDiv>
        <div>
          <h2>{company.name}</h2>
          <h4>{`${stock.exchangeName}:${stock.ticker} Stock Report`}</h4>
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
          <p>{stock.lastPrice}</p>
        </div>
        <div>
          <p>MARKET CAP</p>
          <p>{stock.marketCap}</p>
        </div>
        <div>
          <p>7D</p>
          <p>{stock.priceSevenDays}</p>
        </div>
        <div>
          <p>1Y</p>
          <p>{stock.priceOneYear}</p>
        </div>
        <div>
          <LineContainer>
            <LineComponent data={generateHistory({ start: 9 })} />
          </LineContainer>
        </div>
        <div>
          <p>UPDATED {stock.lastUpdated}</p>
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
