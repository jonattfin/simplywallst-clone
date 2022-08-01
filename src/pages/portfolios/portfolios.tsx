import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Breadcrumbs, Button, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import { PortfolioFacade } from "../../api/data-types";
import { WithLoadingSpinner } from "../../_shared_";
import { AddFormPortfolio, PortfolioCard } from "./components";

export const GET_PORTFOLIOS_QUERY = gql`
  query getPortfoliosData {
    portfolios {
      id
      name
      image
      created
      description

      companies {
        id
      }
    }
  }
`;

export function PortfoliosContainer() {
  return WithLoadingSpinner<PortfolioFacade>({
    WrappedComponent: PortfoliosComponent,
    query: GET_PORTFOLIOS_QUERY,
  });
}

export function PortfoliosComponent({
  data,
}: {
  data: PortfolioFacade;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {data.portfolios.map((portfolio, index) => (
              <Grid item xs={4} key={`p_${index}`}>
                <Link href={`/portfolios/${portfolio.id}`}>
                  <a>
                    <PortfolioCard {...{ portfolio }} />
                  </a>
                </Link>
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
