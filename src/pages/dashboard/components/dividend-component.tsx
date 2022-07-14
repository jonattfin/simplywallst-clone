import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import { DividendDataType } from "../../../api/data-types";
import { BarComponent, LineComponent, PieComponent } from "../../../_shared_";

export default function DividendComponent(data: DividendDataType) {
  return (
    <div>
      <Stack spacing={2} divider={<Divider flexItem />}>
        <div>
          <p>Dividend</p>
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
            <LineComponent data={data.getHistory()} />
          </LineContainer>
        </div>
        <div>
          <p>Current Payout to Shareholders</p>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            divider={<Divider flexItem orientation="vertical" />}
          >
            <PieContainer>
              <PieComponent />
            </PieContainer>
            <p>
              At its current payout ratio (81.7%), INGA's payments are covered
              by earnings.
            </p>
          </Stack>
        </div>
        <div>
          <p>Future Payout to Shareholders</p>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            divider={<Divider flexItem orientation="vertical" />}
          >
            <PieContainer>
              <PieComponent />
            </PieContainer>
            <p>
              INGA's dividends in 3 years are forecast to be covered by earnings
              (53.1% payout ratio).
            </p>
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
