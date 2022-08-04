import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import { WatchlistCompanies } from "../../api/generic-types";

export function WatchlistComponent({ data }: { data: WatchlistCompanies }) {
  return (
    <MainPaper>
      <h2>Watchlist</h2>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <GridContainer>
            <DataGrid
              rows={data.companies}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
            />
          </GridContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper>{"lorem ipsum"}</Paper>
        </Grid>
      </Grid>
    </MainPaper>
  );
}

const columns: GridColDef[] = [
  { field: "company", headerName: "Company", width: 150 },
  {
    field: "lastPrice",
    headerName: "Last Price",
    type: "number",
  },
  {
    field: "fairValue",
    headerName: "Fair Value",
    type: "number",
  },
  {
    field: "sevenDays",
    headerName: "7D",
    type: "number",
  },
  {
    field: "oneYear",
    headerName: "1Y",
    type: "number",
  },
];

const MainPaper = styled(Paper)`
  min-height: 100vh;
  padding: 10px 50px;
`;

const GridContainer = styled.div`
  height: 80vh;
`;
