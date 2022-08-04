import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { Portfolio } from "../../../api/generic-types";
import { PieComponent } from "../../../_shared_";

export default function Diversification({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <div>
      <h1>Diversification</h1>
      <Divider />
      <PieWrapper>
        <PieContainer>
          <PieComponent {...{ data: getPieData(portfolio) }} />
        </PieContainer>
      </PieWrapper>
    </div>
  );
}

function getPieData(portfolio: Portfolio) {
  return portfolio.companies.map((companyPortfolio) => {
    return {
      id: companyPortfolio.company.name,
      label: companyPortfolio.company.name,
      value: companyPortfolio.holding,
    };
  });
}

const PieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const PieContainer = styled.div`
  width: 250px;
  height: 250px;
`;
