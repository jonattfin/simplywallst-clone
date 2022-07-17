import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { ICompetitorsDataType } from "../../../api/data-types";
import { RadarComponent } from "../../../_shared_";

export default function Competitors({ data }: { data: ICompetitorsDataType }) {
  return (
    <Fragment>
      <h4>ING Groep Competitors</h4>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {data.competitors.map((competitor, index) => (
          <Grid item xs={3} key={`competitor_${index}`}>
            <RadarWrapper>
              <RadarContainer>
                <RadarComponent data={competitor.radarData} />
              </RadarContainer>
              <CompetitorWrapperDiv>
                <p>{competitor.name}</p>
                <p>{competitor.marketCap}</p>
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
