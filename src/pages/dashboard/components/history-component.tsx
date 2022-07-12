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
import SubjectIcon from "@mui/icons-material/Subject";

import { LineComponent } from "../../../_shared_";

export interface HistoryNews {
  date: Date;
  type: string;
  value: string;
}

export interface HistoryProps {
  news: HistoryNews[];
}

export default function HistoryComponent(props: HistoryProps) {
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
                  <LineWrapper>
                    <LineComponent {...{ height: 100, width: 800 }} />
                  </LineWrapper>
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
              <Button
                variant="outlined"
                size="small"
                startIcon={<SubjectIcon />}
              >
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
          {props.news.map((news, index) => (
            <ListItem key={`news_${index}`} disablePadding>
              <ListItemButton>
                <ListItemText primary={news.date.toDateString()} />
                <ListItemText primary={news.type} />
                <CustomListItemText primary={news.value} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fragment>
  );
}

const tabValues = ["1M", "3M", "1Y", "3Y", "5Y", "Max"];

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

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
