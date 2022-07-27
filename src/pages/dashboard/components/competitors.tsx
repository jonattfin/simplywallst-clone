import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { head } from "lodash";

import { CompanyFacade } from "../../../api/data-types";
import { RadarComponent, WithLoadingSpinner } from "../../../_shared_";

export function CompetitorsContainer() {
  const query = gql`
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

  return WithLoadingSpinner<CompanyFacade>({
    WrappedComponent: CompetitorsComponent,
    query,
  });
}

export function CompetitorsComponent({ data }: { data: CompanyFacade }) {
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
