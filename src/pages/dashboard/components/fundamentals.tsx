import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Divider, Grid, Tooltip } from "@mui/material";
import { Fragment } from "react";

import { IFundamentalsDataType } from "../../../api/data-types";

import {
  RadialBarComponent,
  BarComponent,
  withLoadingSpinner,
} from "../../../_shared_";

const GET_FUNDAMENTALS_QUERY = gql`
  query getFundamentalsData($companyId: ID!) {
    company(id: $companyId) {
      id
      name
      description
    }
  }
`;

export function FundamentalsContainer({
  sectionName,
}: {
  sectionName: string;
}) {
  return withLoadingSpinner<IFundamentalsDataType>({
    WrappedComponent: FundamentalsComponent,
    query: GET_FUNDAMENTALS_QUERY,
    otherProps: { sectionName },
  });
}

export function FundamentalsComponent({
  data,
  sectionName,
}: {
  data: IFundamentalsDataType;
  sectionName: string;
}) {
  return (
    <Fragment>
      <h4 id={sectionName}>ING Groep Fundamentals Summary</h4>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <RadialBarWrapper>
            <RadialBarContainer>
              <RadialBarComponent data={data.radialData} />
            </RadialBarContainer>
          </RadialBarWrapper>
        </Grid>
        <Grid item xs={6}>
          <div>
            <p>8.4x</p>
            <p>P/E Ratio</p>
          </div>
          <div>
            <p>0.7x</p>
            <p>P/B Ratio</p>
          </div>
        </Grid>
      </Grid>
      <SpecialDivider />
      Earnings &amp; Revenue
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <BarWrapper>
            <BarContainer>
              <BarComponent />
            </BarContainer>
          </BarWrapper>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <p>Last Reported Earnings</p>
              <p>Mar 31, 2022</p>
            </Grid>
            <Grid item xs={4}>
              <p>Next Earnings Date</p>
              <p>Aug 04, 2022</p>
            </Grid>
            <Grid item xs>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              <SpecialDivider />
            </Grid>
            <Grid item xs={10}>
              <Tooltip
                title="Earnings per share (EPS) is calculated as a company's profit divided by the outstanding shares of its common stock. 
                The resulting number serves as an indicator of a company's profitability. 
                It is common for a company to report EPS that is adjusted for extraordinary items and potential share dilution."
                placement="top"
                arrow
              >
                <SpecialParagraph>Earnings per share (EPS)</SpecialParagraph>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              1.12
            </Grid>
            <Grid item xs={10}>
              <Tooltip
                title="Earnings per share (EPS) is calculated as a company's profit divided by the outstanding shares of its common stock. 
                The resulting number serves as an indicator of a company's profitability. 
                It is common for a company to report EPS that is adjusted for extraordinary items and potential share dilution."
                placement="top"
                arrow
              >
                <SpecialParagraph>Gross Margin</SpecialParagraph>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              24.65%
            </Grid>
            <Grid item xs={10}>
              <Tooltip
                title="Earnings per share (EPS) is calculated as a company's profit divided by the outstanding shares of its common stock. 
                The resulting number serves as an indicator of a company's profitability. 
                It is common for a company to report EPS that is adjusted for extraordinary items and potential share dilution."
                placement="top"
                arrow
              >
                <SpecialParagraph>Net Profit Margin</SpecialParagraph>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              1.12
            </Grid>
            <Grid item xs={10}>
              <Tooltip
                title="Earnings per share (EPS) is calculated as a company's profit divided by the outstanding shares of its common stock. 
                The resulting number serves as an indicator of a company's profitability. 
                It is common for a company to report EPS that is adjusted for extraordinary items and potential share dilution."
                placement="top"
                arrow
              >
                <SpecialParagraph>Debt/Equity Ratio</SpecialParagraph>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              333.3%
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SpecialDivider />
      Dividends
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <p>6.6%</p>
          <p>Current Dividend Yield</p>
        </Grid>
        <Grid item xs={4}>
          <p>82%</p>
          <p>Payout Ratio</p>
        </Grid>
        <Grid item xs={4}>
          <p>Does INGA pay a reliable dividends?</p>
          <a href="#">See INGA dividend history and benchmarks</a>
        </Grid>
      </Grid>
    </Fragment>
  );
}

const SpecialDivider = styled(Divider)`
  margin: 10px 0px;
`;

const SpecialParagraph = styled.p`
  display: inline;
  padding: 10px;
`;

const RadialBarContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const RadialBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

const BarContainer = styled.div`
  width: 250px;
  height: 125px;
`;
