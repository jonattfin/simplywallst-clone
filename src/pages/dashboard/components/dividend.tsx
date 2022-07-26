import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { gql } from "@apollo/client";

import { DividendDataType } from "../../../api/data-types";
import {
  BarComponent,
  LineComponent,
  PieComponent,
  WithLoadingSpinner,
} from "../../../_shared_";
import { generateHistory } from "../../../api/dashboardDataType";

const GET_DIVIDENDS_QUERY = gql`
  query getDividendsData {
    company(id: 1) {
      name
    }
  }
`;

export function DividendContainer({ sectionName }: { sectionName: string }) {
  return WithLoadingSpinner<DividendDataType>({
    WrappedComponent: DividendComponent,
    query: GET_DIVIDENDS_QUERY,
    otherProps: { sectionName },
  });
}

export function DividendComponent({
  data,
  sectionName,
}: {
  data: DividendDataType;
  sectionName: string;
}) {
  return (
    <div>
      <Stack spacing={2} divider={<Divider flexItem />}>
        <div>
          <h4 id={sectionName}>Dividend</h4>
          <p>
            What is ING Groep current dividend yield, its reliability and
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
            <LineComponent data={generateHistory({ start: 100, dimensions: 3 })} />
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
              <PieComponent />
            </PieContainer>
            <ContentDiv>
              <div>
                <CheckBoxIcon fontSize="small" color="success" />
                <TitleParagraph>Earnings Coverage: </TitleParagraph>
              </div>
              At its current payout ratio (81.7%), INGA&apos;s payments are
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
              <PieComponent />
            </PieContainer>
            <ContentDiv>
              <div>
                <CheckBoxIcon fontSize="small" color="success" />
                <TitleParagraph>Future Dividend Coverage: </TitleParagraph>
              </div>
              INGA&apos;s dividends in 3 years are forecast to be covered by
              earnings (53.1% payout ratio).
            </ContentDiv>
          </Stack>
        </div>
      </Stack>
    </div>
  );
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
