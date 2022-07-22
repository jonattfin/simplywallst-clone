import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { generateSnowflakeValues } from "../../../api/dashboardDataType";

import { ICompetitorsDataType } from "../../../api/data-types";
import { RadarComponent, withLoadingSpinner } from "../../../_shared_";

const GET_COMPETITORS_QUERY = gql`
  query getCompetitorsData {
    company(id: 1) {
      name
    }
    stock(id: 1) {
      ticker
      exchangeName
      lastPrice
      marketCap
      priceSevenDays
      priceOneYear
      lastUpdated
    }
  }
`;

export function CompetitorsContainer({}) {
  return withLoadingSpinner<ICompetitorsDataType>({
    WrappedComponent: CompetitorsComponent,
    query: GET_COMPETITORS_QUERY,
  });
}

export function CompetitorsComponent({ data }: { data: ICompetitorsDataType }) {
  const competitors = [data, data, data, data];

  return (
    <Fragment>
      <h4>ING Groep Competitors</h4>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {competitors.map(({ company, stock }, index) => (
          <Grid item xs={3} key={`competitor_${index}`}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={generateSnowflakeValues(company.name)} />
              </RadarContainer>
              <CompetitorWrapperDiv>
                <p>{company.name}</p>
                <p>{stock.marketCap}</p>
              </CompetitorWrapperDiv>
            </RadarWrapper>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

// Styled Components

const RadarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RadarContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const CompetitorWrapperDiv = styled.div`
  font-size: small;
  text-align: center;
`;
