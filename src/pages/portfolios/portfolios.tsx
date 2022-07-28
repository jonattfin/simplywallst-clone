import styled from "@emotion/styled";
import { Breadcrumbs, Button, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import { datastoreFactory } from "../../api/datastore-factory";
import { AddFormPortfolio, PortfolioCard } from "./components";

const datastore = datastoreFactory.getDatastore();
const { portfolios } = datastore.getPortfolioFacade();

export default function PortfoliosComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Button variant="contained" onClick={handleClickOpen}>
            New Portfolio
          </Button>
          <div>&nbsp;</div>
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
          >
            {portfolios.map((portfolio, index) => (
              <Grid item xs={4} key={`p_${index}`}>
                <PortfolioCard {...{ portfolio }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <AddFormPortfolio {...{ open, handleClose }} />
    </MainPaper>
  );
}

const MainPaper = styled(Paper)`
  min-height: 100vh;
  padding: 0px 100px;
`;
