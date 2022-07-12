import { Fragment, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

import { LineComponent } from "../../../_shared_";

const tabValues = ["1M", "3M", "1Y", "3Y", "5Y", "Max"];

export default function HistoryComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <p>Price History &amp; Performance</p>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {tabValues.map((tabValue, index) => (
              <Tab key={`tab_${index}`} label={tabValue} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            &nbsp;
          </Grid>
          <Grid item xs>
            <ContentDiv>
              {tabValues.map((_tabValue, index) => (
                <TabPanel key={`tabPanel_${index}`} value={value} index={index}>
                  <LineComponent {...{ height: 100, width: 800 }} />
                </TabPanel>
              ))}
            </ContentDiv>
          </Grid>
          <Grid item xs={3}>
            &nbsp;
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="right" alignItems="center">
          <Grid item xs={2}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" size="small">
                Data
              </Button>
              <Button variant="outlined" size="small">
                ...
              </Button>
            </Stack>
          </Grid>
        </Grid>
        Recent News &amp; Updates
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="May 18" />
              <ListItemText primary="Inbox" />
              <CustomListItemText primary="ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="May 09" />
              <ListItemText primary="Inbox" />
              <CustomListItemText primary="First quarter 2022 earnings: EPS exceeds analyst expectations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Apr 20" />
              <ListItemText primary="Inbox" />
              <CustomListItemText primary="Upcoming dividend of €0.41 per share" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Apr 07" />
              <ListItemText primary="Inbox" />
              <CustomListItemText primary="Boursorama Société Anonyme agreed to acquire Retail Banking Business of ING Groep NV in France from ING Groep N.V. (ENXTAM:INGA) " />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return value === index ? <Box>{children}</Box> : <Fragment />;
}

// Styled Components

const ContentDiv = styled.div`
  padding: 50px 0px;
`;

const CustomListItemText = styled(ListItemText)`
  width: 80%;
`;
