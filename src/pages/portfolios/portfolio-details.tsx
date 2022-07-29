import {
  Avatar,
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
} from "@mui/material";
import { head } from "lodash";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { SpecialMenu } from "./components";
import { datastoreFactory } from "../../api/datastore-factory";
import { Company } from "../../api/data-types";
import { RadarComponent } from "../../_shared_";

const datastore = datastoreFactory.getDatastore();

export function PortfolioDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { portfolios } = datastore.getPortfolioFacade(parseInt(`${id}`));
  const portfolio = head(portfolios);

  return (
    <MainDiv>
      <Grid
        container
        direction="row"
        justifyContent="flow-start"
        alignItems="center"
        padding={2}
        spacing={3}
      >
        <Grid item xs={3}>
          <SpecialMenu.MenuComponent {...{ portfolio }} />
        </Grid>
        <Grid item xs={9}>
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
            <h4>{"$7.57k"}</h4>
          </div>
          <h2>Holdings ({portfolio?.companies.length})</h2>
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
                <CompanyCard {...{ company }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MainDiv>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardHeader
        avatar={
          <RadarContainer>
            <RadarComponent data={JSON.parse(company.snowflakeValueJson)} />
          </RadarContainer>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={company.name}
        subheader="HOLN CHF43.53"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div>
            <div></div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{"1.49%"}</TableCell>
                    <TableCell align="right">{"-3.4%"}</TableCell>
                    <TableCell align="right">{"100$"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">7 Day</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Holding</TableCell>
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

const MainDiv = styled.div`
  min-height: 100vh;
  padding: 0px 100px;
`;

const RadarContainer = styled.div`
  width: 50px;
  height: 50px;
`;
