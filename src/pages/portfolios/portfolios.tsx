import { gql, useMutation } from "@apollo/client";
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
      currency
      image
      created
      description

      companies {
        id
      }
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio($createPortfolioInput: CreatePortfolioInput!) {
    createPortfolio(createPortfolioInput: $createPortfolioInput) {
      id
      name
      currency
    }
  }
`;

export function PortfoliosContainer() {
  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    refetchQueries: [{ query: GET_PORTFOLIOS_QUERY }],
  });

  return WithLoadingSpinner<PortfolioFacade>({
    WrappedComponent: PortfoliosComponent,
    query: GET_PORTFOLIOS_QUERY,
    otherProps: {
      createPortfolio,
    },
  });
}

export function PortfoliosComponent({
  data,
  createPortfolio,
}: {
  data: PortfolioFacade;
  createPortfolio: any;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAdd = (name: string, currency: string) => {
    createPortfolio({
      variables: { createPortfolioInput: { name, currency } },
    });
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
      <AddFormPortfolio {...{ open, handleClose, handleAdd }} />
    </MainPaper>
  );
}

const MainPaper = styled(Paper)`
  min-height: 100vh;
  padding: 0px 100px;
`;
