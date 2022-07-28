import styled from "@emotion/styled";
import { Breadcrumbs, Button, Grid, Paper, Stack } from "@mui/material";
import Link from "next/link";
import { datastoreFactory } from "../../api/datastore-factory";
import { CustomCard } from "./components";

const datastore = datastoreFactory.getDatastore();

export default function PortfoliosComponent() {
  return (
    <MainPaper>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <div>
            <Breadcrumbs>
              <Link href="/">Portfolio</Link>
              <Link href="/">My Portfolios</Link>
            </Breadcrumbs>
          </div>
          <h1>My Portfolios</h1>
          <Button variant="contained">New Portfolio</Button>
          <div>&nbsp;</div>
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            {datastore
              .getPortfolioFacade()
              .portfolios.map((portfolio, index) => (
                <Grid item xs={4} key={`p_${index}`}>
                  <CustomCard.PortfolioCard {...{ portfolio }} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </MainPaper>
  );
}

const MainPaper = styled(Paper)`
  min-height: 100vh;
  padding: 0px 100px;
`;
