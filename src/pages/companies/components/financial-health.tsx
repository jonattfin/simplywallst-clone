import styled from "@emotion/styled";
import { Fragment } from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import { Button, Divider, Stack } from "@mui/material";
import { gql } from "@apollo/client";

import {
  LineComponent,
  TreemapComponent,
  WithLoadingSpinner,
} from "../../../_shared_";
import { head } from "lodash";
import { ICompanyFinancialHealth } from "../../../api/graphql-types";

export const GET_FINANCIAL_HEALTH_QUERY = gql`
  query getFinancialHealthData($id: Int!) {
    company(id: $id) {
      name
      stocks {
        priceHistoryJson
      }
    }
  }
`;

export function FinancialHealthContainer({
  sectionName,
  companyId
}: {
  sectionName: string;
  companyId: number;
}) {
  return WithLoadingSpinner<ICompanyFinancialHealth>({
    WrappedComponent: FinancialHealthComponent,
    query: GET_FINANCIAL_HEALTH_QUERY,
    otherProps: { sectionName },
    variables: {
      id: companyId,
    },
  });
}

export function FinancialHealthComponent({
  data,
  sectionName,
}: {
  data: ICompanyFinancialHealth;
  sectionName: string;
}) {
  const { company } = data;
  const stock = head(company.stocks);

  return (
    <Fragment>
      <h4 id={sectionName}>Financial Health</h4>
      <p>
        How is {company.name} financial position? (This company is analysed
        differently as a bank or financial institution)
      </p>

      <Divider />
      <p>Debt to Equity History and Analysis</p>
      <LineContainer>
        {stock && <LineComponent data={JSON.parse(stock.priceHistoryJson)} />}
      </LineContainer>
      <div>&nbsp;</div>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button variant="outlined" size="small" startIcon={<SubjectIcon />}>
          Data
        </Button>
        <Button variant="outlined" size="small">
          ...
        </Button>
      </Stack>
      <p>Balance Sheet </p>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          Assets
          <TreemapContainer>
            <TreemapComponent />
          </TreemapContainer>
        </div>
        <div>
          Liabilities + Equity
          <TreemapContainer>
            <TreemapComponent />
          </TreemapContainer>
        </div>
      </Stack>
    </Fragment>
  );
}

const LineContainer = styled.div`
  height: 150px;
`;

const TreemapContainer = styled.div`
  width: 300px;
  height: 200px;

  padding: 10px;
`;
