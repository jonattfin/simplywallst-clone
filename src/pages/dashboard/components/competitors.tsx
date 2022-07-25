import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { head } from "lodash";

import { generateSnowflakeValues } from "../../../api/dashboardDataType";
import { ICompetitorsDataType } from "../../../api/data-types";
import { RadarComponent, withLoadingSpinner } from "../../../_shared_";

const GET_COMPETITORS_QUERY = gql`
  query getCompetitorsData {
    company(id: 1) {
      name
      competitors {
        name
        stocks {
          marketCap
        }
      }
    }
  }
`;

export function CompetitorsContainer() {
  return withLoadingSpinner<ICompetitorsDataType>({
    WrappedComponent: CompetitorsComponent,
    query: GET_COMPETITORS_QUERY,
  });
}

export function CompetitorsComponent({ data }: { data: ICompetitorsDataType }) {
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
        {competitors.map(({ name, stocks }, index) => (
          <Grid item xs={3} key={`competitor_${index}`}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={generateSnowflakeValues(name)} />
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
