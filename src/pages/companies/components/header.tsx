import { Button, Breadcrumbs, Stack, Link } from "@mui/material";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import { gql } from "@apollo/client";
import { head } from "lodash";

import { LineComponent, WithLoadingSpinner } from "../../../_shared_";
import { ICompanyHeader } from "../../../api/graphql-types";

export const GET_HEADER_QUERY = gql`
  query getHeaderData($id: Int!) {
    company(id: $id) {
      name
      stocks {
        ticker
        exchangeName
        lastPrice
        marketCap
        priceSevenDays
        priceOneYear
        lastUpdated
        priceHistoryJson
      }
    }
  }
`;

export function HeaderContainer({ companyId }: { companyId: number }) {
  return WithLoadingSpinner<ICompanyHeader>({
    WrappedComponent: HeaderComponent,
    query: GET_HEADER_QUERY,
    variables: {
      id: companyId,
    },
  });
}

export function HeaderComponent({ data }: { data: ICompanyHeader }) {
  const { company } = data;
  const stock = head(company.stocks);

  if (!stock) {
    return <div>&nbsp;</div>;
  }

  return (
    <MainDiv>
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
            <LineComponent data={JSON.parse(stock.priceHistoryJson)} />
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
    </MainDiv>
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

const MainDiv = styled.div`
  padding: 25px;
`;
