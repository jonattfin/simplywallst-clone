import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import { WatchlistCompanies } from "../../api/generic-types";
import { datastoreFactory } from "../../api/datastore-factory";
import Link from "next/link";
import { LineComponent, RadarComponent } from "../../_shared_";
import { useState } from "react";

const datastore = datastoreFactory.getDatastore();

export function CompaniesContainer() {
  const data = datastore.getWatchlistCompanies();
  return <CompaniesComponent {...{ data }} />;
}

export function CompaniesComponent({ data }: { data: WatchlistCompanies }) {
  const [rowModel, setRowModel] = useState<any>(null);
  return (
    <MainPaper>
      <h2>Companies</h2>
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
              onSelectionModelChange={(model) => setRowModel(model)}
            />
          </GridContainer>
        </Grid>
        <Grid item xs={4}>
          {renderSelectedCompany(rowModel, data)}
        </Grid>
      </Grid>
    </MainPaper>
  );
}

function renderSelectedCompany(rowModel: any = [], data: WatchlistCompanies) {
  console.log(JSON.stringify(rowModel));
  const [id] = rowModel || [];
  if (!id) return <div>no data</div>;

  const company = data.companies.find((c) => c.id == id);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <div>{company?.name}</div>
      <div>
        <RadarContainer>
          {company && (
            <RadarComponent data={JSON.parse(company.snowflakeValueJson)} />
          )}
        </RadarContainer>
      </div>
      <div>
        <div>&nbsp;</div>
        <div>Recent updates</div>
        <List>
          {company?.news.map((newsItem, index) => (
            <ListItem key={`news_${index}`} disablePadding>
              <ListItemButton>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 14,
                  }}
                  primary={newsItem.description}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Stack>
  );
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      const [companyId, companyName] = params.value;
      return (
        <Link href={`/companies/${companyId}`}>
          <SpecialHref>{companyName}</SpecialHref>
        </Link>
      );
    },
    valueGetter: (params: GridValueGetterParams) => [
      params.row.id,
      params.row.name,
    ],
  },
  {
    field: "lastPrice",
    headerName: "Last Price",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "fairValue",
    headerName: "Fair Value",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "sevenDays",
    headerName: "7D",
    type: "number",
    width: 50,
    align: "center",
  },
  {
    field: "oneYear",
    headerName: "1Y",
    type: "number",
    width: 50,
    align: "center",
  },
  {
    field: "priceHistoryJson",
    headerName: "1Y history",
    sortable: false,
    align: "center",
    width: 300,
    renderCell: (params) => {
      return (
        <LineContainer>
          <LineComponent data={JSON.parse(params.value)} />
        </LineContainer>
      );
    },
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.priceHistoryJson}`,
  },
];

const MainPaper = styled(Paper)`
  min-height: 100vh;
  padding: 10px 50px;
`;

const GridContainer = styled.div`
  height: 80vh;
`;

const SpecialHref = styled.a`
  color: #1976d2;
`;

const LineContainer = styled.div`
  height: 30px;
  width: 300px;
`;

const RadarContainer = styled.div`
  width: 150px;
  height: 150px;
`;