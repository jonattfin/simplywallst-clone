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
import { gql } from "@apollo/client";

import { LineComponent, WithLoadingSpinner } from "../../../_shared_";
import { HistoryDataType } from "../../../api/data-types";
import { generateHistory } from "../../../api/dashboardDataType";

const GET_HISTORY_QUERY = gql`
  query getNewsForCompanyData {
    company(id: 1) {
      news {
        id
        date
        description
      }
    }
  }
`;

export function HistoryContainer({ sectionName }: { sectionName: string }) {
  return WithLoadingSpinner<HistoryDataType>({
    WrappedComponent: HistoryComponent,
    query: GET_HISTORY_QUERY,
    otherProps: { sectionName },
  });
}

export function HistoryComponent({
  data,
  sectionName,
}: {
  data: HistoryDataType;
  sectionName: string;
}) {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { company } = data;

  return (
    <Fragment>
      <h4 id={sectionName}>Price History &amp; Performance</h4>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {tabValues.map((tabValue, index) => (
              <Tab key={`tab_${index}`} label={tabValue} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs>
            <ContentDiv>
              {tabValues.map((_tabValue, index) => (
                <TabPanel key={`tabPanel_${index}`} value={value} index={index}>
                  <LineContainer>
                    <LineComponent data={generateHistory({ start: 10, numberOfYears: index + 1 })} />
                  </LineContainer>
                </TabPanel>
              ))}
            </ContentDiv>
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
          {company.news.map((newsItem, index) => (
            <ListItem key={`news_${index}`} disablePadding>
              <ListItemButton>
                <ListItemText primary={newsItem.date} />
                <CustomListItemText primary={newsItem.description} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fragment>
  );
}

const tabValues = ["1Y", "2Y", "3Y", "4Y"];

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

const LineContainer = styled.div`
  height: 100px;
`;
