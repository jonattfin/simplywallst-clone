import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { head, sum } from "lodash";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { SpecialMenu } from "./components";
import { CompanyPortfolio, Portfolio } from "../../api/data-types";
import { gql } from "@apollo/client";
import WithLoadingSpinner from "../../_shared_/data-loader";
import RadarComponent from "../../_shared_/radar";

export const GET_PORTFOLIO_DETAILS_QUERY = gql`
  query getPortfolioData {
    portfolio(id: 3) {
      id
      name
      image
      created
      description
      snowflakeValueJson

      companies {
        holding
        annualDividendYield
        annualDividendContribution
        company {
          name
          snowflakeValueJson
          stocks {
            ticker
            lastPrice
            priceOneYear
            priceSevenDays
          }
        }
      }
    }
  }
`;

export function PortfolioDetailsContainer() {
  const router = useRouter();
  const { id } = router.query;

  return WithLoadingSpinner<Portfolio>({
    WrappedComponent: PortfolioDetailsComponent,
    query: GET_PORTFOLIO_DETAILS_QUERY,
  });
}

export function PortfolioDetailsComponent({
  data,
}: {
  data: { portfolio: Portfolio };
}) {
  const { portfolio } = data;

  return (
    <MainDiv>
      <Grid
        container
        direction="row"
        justifyContent="flow-start"
        alignItems="flex-start"
        padding={2}
        spacing={3}
      >
        <Grid item xs={3}>
          <Paper>
            <SpecialMenu.MenuComponent {...{ portfolio }} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <CustomPaper>
              <div>
                <Breadcrumbs>
                  <Link href="/">Home</Link>
                  <Link href="/portfolios">My Portfolios</Link>
                  <Link href={`/portfolios/${portfolio?.id}`}>
                    {portfolio?.name}
                  </Link>
                </Breadcrumbs>
                <h1>{portfolio?.name}</h1>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Edit Portfolio</Button>
                  <Button variant="contained">More Actions</Button>
                </Stack>
              </div>
              <div>
                <h3>Market value</h3>
                <h4>${sum(portfolio?.companies.map((c) => c.holding))}</h4>
              </div>
            </CustomPaper>
            <CustomPaper>
              <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
                padding={2}
              >
                <h2>Holdings ({portfolio?.companies.length})</h2>
                <TextField label="Add company" variant="outlined" />
              </Stack>

              <Divider />
              <Grid
                container
                direction="row"
                justifyContent="flow-start"
                alignItems="center"
                padding={2}
                spacing={3}
              >
                {portfolio?.companies.map((company, index) => (
                  <Grid item xs={3} key={`company_${index}`}>
                    <CompanyCard {...{ companyPortfolio: company }} />
                  </Grid>
                ))}
              </Grid>
            </CustomPaper>
            <CustomPaper>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div>
                  <h1>Portfolio Summary</h1>
                  <p>
                    {portfolio?.name} is a USD portfolio that has returned 5.04%
                    since inception.
                  </p>
                  <p>Fundamentals</p>
                  <p>An undervalued Portfolio and income payer.</p>
                  <p>Actions</p>
                  <Button variant="contained">Detailed Returns Report</Button>
                </div>
                <MainRadarWrapperDiv>
                  <MainRadarContainer>
                    {/* <RadarComponent
                      data={JSON.parse(portfolio.snowflakeValueJson)}
                    /> */}
                  </MainRadarContainer>
                </MainRadarWrapperDiv>
              </Stack>
            </CustomPaper>
            <CustomPaper>
              <h1>Dividends</h1>
              <p>The average annual dividend yield and top payers</p>
              <p />
              <Divider />
              <p />
              List of Dividend Payers
              <p />
              <DividendTable {...{ portfolio }} />
            </CustomPaper>
          </Stack>
        </Grid>
      </Grid>
    </MainDiv>
  );
}

function CompanyCard({
  companyPortfolio,
}: {
  companyPortfolio: CompanyPortfolio;
}) {
  const { company, holding } = companyPortfolio;
  const stock = head(company.stocks);

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <RadarContainer>
            {/* <RadarComponent data={JSON.parse(company.snowflakeValueJson)} /> */}
          </RadarContainer>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={company.name}
        subheader={`${stock?.ticker} ${stock?.lastPrice}`}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div>
            <div></div>
            <TableContainer component={Paper}>
              <div></div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>7 Day</TableCell>
                    <TableCell>1 Year</TableCell>
                    <TableCell>Holding</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{stock?.priceSevenDays}%</TableCell>
                    <TableCell>{stock?.priceOneYear}%</TableCell>
                    <TableCell>${holding}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

function createData(
  name: string,
  annualYield: number,
  annualContribution: number
) {
  return { name, annualYield, annualContribution };
}

export default function DividendTable({
  portfolio,
}: {
  portfolio?: Portfolio;
}) {
  if (!portfolio) return <div></div>;

  const rows = portfolio.companies.map((companyPortfolio) => {
    return createData(
      companyPortfolio?.company?.name || "",
      companyPortfolio.annualDividendYield,
      companyPortfolio.annualDividendContribution
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Annual Yield</TableCell>
            <TableCell align="right">Annual Contribution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.annualYield}%
              </TableCell>
              <TableCell align="right">${row.annualContribution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Styled Components

const MainDiv = styled.div`
  min-height: 100vh;
  padding: 0px 100px;
`;

const RadarContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const MainRadarContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const MainRadarWrapperDiv = styled.div`
  padding-right: 100px;
`;

const CustomPaper = styled(Paper)`
  min-height: 20vh;
  padding: 20px;
`;
