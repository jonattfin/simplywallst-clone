import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment } from "react";
import { generateHistory } from "../../../api/dashboardDataType";

import { OwnershipDataType } from "../../../api/data-types";
import { LineComponent, withLoadingSpinner } from "../../../_shared_";

const GET_OWNERSHIP_QUERY = gql`
  query getOwnershipData {
    company(id: 1) {
      name
    }
  }
`;

export function OwnershipContainer({ sectionName }: { sectionName: string }) {
  return withLoadingSpinner<OwnershipDataType>({
    WrappedComponent: OwnershipComponent,
    query: GET_OWNERSHIP_QUERY,
    otherProps: { sectionName },
  });
}

export function OwnershipComponent({
  data,
  sectionName,
}: {
  data: OwnershipDataType;
  sectionName: string;
}) {
  return (
    <Fragment>
      <h4 id={sectionName}>Ownership</h4>
      <p>
        Who are the major shareholders and have insiders been buying or selling?
      </p>

      <p>Recent Insider Transactions</p>
      {renderTransactionsTable()}
      <br />
      <p>Top Shareholders</p>
      <p>Top 25 shareholders own 35.63% of the company</p>
      {renderShareholdersTable()}
      <p>Number of Employees</p>
      <LineContainer>
        <LineComponent data={generateHistory({ start: 100000 })} />
      </LineContainer>
    </Fragment>
  );
}

function renderTransactionsTable() {
  function createData(
    name: string,
    date: Date,
    value: number,
    entity: string,
    shares: number,
    maxPrice: number
  ) {
    return { name, date, value, entity, shares, maxPrice };
  }

  const rows = [
    createData(
      "Ljiljana Cortan",
      new Date(2022, 4, 22),
      17114,
      "Individual",
      1936,
      8.84
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Entity</TableCell>
            <TableCell align="right">Shares</TableCell>
            <TableCell align="right">Max Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.date.toDateString()}</TableCell>
              <TableCell>{row.value.toLocaleString()}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.entity}</TableCell>
              <TableCell align="right">{row.shares.toLocaleString()}</TableCell>
              <TableCell align="right">{row.maxPrice}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function renderShareholdersTable() {
  function createData(
    name: string,
    ownership: number,
    shares: number,
    currentValue: number,
    change: number,
    portfolio: number
  ) {
    return { name, ownership, shares, currentValue, change, portfolio };
  }

  const rows = [
    createData("BlackRock, Inc.", 6.68, 250066581, 2.8e9, -15.16, 0.05),
    createData("The Vanguard Group, Inc.", 3.8, 142232423, 1.3e9, 1.88, 0.03),
    createData(
      "Norges Bank Investment Management",
      3.13,
      117307870,
      1.1e9,
      -2.26,
      1
    ),
    createData("Amundi Asset Management", 3.03, 113284947, 1.1e9, -0.43, 0.37),
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ownership</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Shares</TableCell>
            <TableCell align="right">Current Value</TableCell>
            <TableCell align="right">Change %</TableCell>
            <TableCell align="right">Portfolio %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.ownership}%</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.shares.toLocaleString()}</TableCell>
              <TableCell align="right">
                {row.currentValue.toLocaleString()}
              </TableCell>
              <TableCell align="right">
                {row.change > 0 ? (
                  <PositiveParagraph>{row.change}%</PositiveParagraph>
                ) : (
                  <NegativeParagraph>{row.change}%</NegativeParagraph>
                )}
              </TableCell>
              <TableCell align="right">{row.portfolio}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Styled Components

const PositiveParagraph = styled.p`
  display: inline;
  color: green;
`;

const NegativeParagraph = styled.p`
  display: inline;
  color: red;
`;

const LineContainer = styled.div`
  height: 150px;
`;
