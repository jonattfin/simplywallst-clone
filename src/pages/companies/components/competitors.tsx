import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { head } from "lodash";
import { gql } from "@apollo/client";

import { WithLoadingSpinner } from "../../../_shared_";
import RadarComponent from "../../../_shared_/radar";
import { ICompanyCompetitors } from "../../../api/graphql-types";

export const GET_COMPETITORS_QUERY = gql`
  query getCompetitorsData {
    company(id: 1) {
      name
      competitors {
        name
        snowflakeValueJson
        stocks {
          marketCap
        }
      }
    }
  }
`;

export function CompetitorsContainer() {
  return WithLoadingSpinner<ICompanyCompetitors>({
    WrappedComponent: CompetitorsComponent,
    query: GET_COMPETITORS_QUERY,
  });
}

export function CompetitorsComponent({ data }: { data: ICompanyCompetitors }) {
  const { company } = data;
  const { competitors = [] } = company;

  return (
    <Fragment>
      <h4>ING Groep Competitors</h4>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {competitors.map(({ name, stocks, snowflakeValueJson }, index) => (
          <Grid item xs={3} key={`competitor_${index}`}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={JSON.parse(snowflakeValueJson)} />
              </RadarContainer>
              <CompetitorWrapperDiv>
                <p>{name}</p>
                <p>{head(stocks)?.marketCap}</p>
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
