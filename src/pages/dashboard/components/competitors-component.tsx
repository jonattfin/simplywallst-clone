import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { RadarComponent } from "../../../_shared_";

export default function Competitors() {
  return (
    <Fragment>
      ING Groep Competitors
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {competitors.map((competitor, index) => (
          <Grid item xs={3} key={`competitor_${index}`}>
            <RadarContainer>
              {/* <RadarComponent {...{ width: 100, height: 100 }} /> */}
              <CompetitorWrapperDiv>
                <p>{competitor.name}</p>
                <p>{competitor.marketCap}</p>
              </CompetitorWrapperDiv>
            </RadarContainer>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

const competitors = [
  { name: "ABN AMRO Bank", marketCap: "$9.8b" },
  { name: "Lloyds Banking", marketCap: "UK28.8b" },
  { name: "BCR Bank", marketCap: "$11.8b" },
  { name: "Intesa Sanpaolo Bank", marketCap: "$10.8b" },
];

// Styled Components

const RadarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 50%;
`;

const CompetitorWrapperDiv = styled.div`
  font-size: small;
  text-align: center;
`;
