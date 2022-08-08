import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { gql } from "@apollo/client";

import {
  BarComponent,
  LineComponent,
  PieComponent,
  WithLoadingSpinner,
} from "../../../_shared_";
import { head } from "lodash";
import { ICompanyDividend } from "../../../api/graphql-types";

export const GET_DIVIDENDS_QUERY = gql`
  query getDividendsData($id: Int!) {
    company(id: $id) {
      name
      stocks {
        priceHistoryJson
      }
    }
  }
`;

export function DividendContainer({
  sectionName,
  companyId,
}: {
  sectionName: string;
  companyId: number;
}) {
  return WithLoadingSpinner<ICompanyDividend>({
    WrappedComponent: DividendComponent,
    query: GET_DIVIDENDS_QUERY,
    otherProps: { sectionName },
    variables: {
      id: companyId,
    },
  });
}

export function DividendComponent({
  data,
  sectionName,
}: {
  data: ICompanyDividend;
  sectionName: string;
}) {
  const { company } = data;
  const stock = head(company.stocks);

  return (
    <div>
      <Stack spacing={2} divider={<Divider flexItem />}>
        <div>
          <h4 id={sectionName}>Dividend</h4>
          <p>
            What is {company.name} current dividend yield, its reliability and
            sustainability?
          </p>
        </div>

        <div>
          <p>6.88%</p>
          <p>Current Dividend Yield</p>
        </div>

        <div>
          <p>Dividend Yield vs Market</p>
          <BarContainer>
            <BarComponent />
          </BarContainer>
        </div>

        <div>
          <p>Stability and Growth of Payments</p>
          <LineContainer>
            {stock && (
              <LineComponent data={JSON.parse(stock.priceHistoryJson)} />
            )}
          </LineContainer>
        </div>
        <div>
          <p>Current Payout to Shareholders</p>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            divider={<Divider flexItem orientation="vertical" />}
          >
            <PieContainer>
              <PieComponent {...{ data: getPayoutToShareHolders() }} />
            </PieContainer>
            <ContentDiv>
              <div>
                <CheckBoxIcon fontSize="small" color="success" />
                <TitleParagraph>Earnings Coverage: </TitleParagraph>
              </div>
              At its current payout ratio (81.7%), {company.name} payments are
              covered by earnings.
            </ContentDiv>
          </Stack>
        </div>
        <div>
          <p>Future Payout to Shareholders</p>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            divider={<Divider flexItem orientation="vertical" />}
          >
            <PieContainer>
              <PieComponent {...{ data: getFuturePayoutToShareholders() }} />
            </PieContainer>
            <ContentDiv>
              <div>
                <CheckBoxIcon fontSize="small" color="success" />
                <TitleParagraph>Future Dividend Coverage: </TitleParagraph>
              </div>
              {company.name} dividends in 3 years are forecast to be covered by
              earnings (53.1% payout ratio).
            </ContentDiv>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

function getPayoutToShareHolders() {
  return [
    { id: 1, label: 1, value: 82 },
    { id: 2, label: 2, value: 18 },
  ];
}

function getFuturePayoutToShareholders() {
  return [
    { id: 1, label: 1, value: 53 },
    { id: 2, label: 2, value: 47 },
  ];
}

const LineContainer = styled.div`
  height: 150px;
`;

const BarContainer = styled.div`
  width: 250px;
  height: 125px;
`;

const PieContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const TitleParagraph = styled.p`
  display: inline;
  color: green;
`;

const ContentDiv = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
