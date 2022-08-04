import styled from "@emotion/styled";
import { Stack, Button, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import RadarComponent from "../../../_shared_/radar";
import { PortolioDetailsDataType } from "../../../api/graphql-types";

export function MenuComponent({ portfolio }: { portfolio: PortolioDetailsDataType }) {
  const [selectedItem, setSelectedItem] = useState(0);

  if (!portfolio) {
    return <div>&nbsp;</div>;
  }

  return (
    <Fragment>
      <RadarWrapper>
        <RadarContainer>
          <RadarComponent data={JSON.parse(portfolio.snowflakeValueJson)} />
        </RadarContainer>
      </RadarWrapper>
      <TitleDiv>
        <h3>{portfolio?.name}</h3>
        <div>
          Portfolio Analysis <DownloadForOfflineIcon color="primary" />
        </div>
      </TitleDiv>
      <CustomDivider />
      <Stack spacing={2}>
        {MenuItems.map((menuItem, index) => (
          <Button
            key={`${menuItem}_${index}`}
            href={`#${menuItem.replace(" ", "_")}`}
            onClick={() => {
              setSelectedItem(index);
            }}
            disabled={index == selectedItem}
          >
            {`${index + 1} ${menuItem}`}
          </Button>
        ))}
      </Stack>
    </Fragment>
  );
}

export const MenuItems = [
  "Holdings",
  "Portfolio Summary",
  "News",
  "Returns",
  "Diversification",
  "Valuation",
  "Future Growth",
  "Past Performance",
  "Financial Health",
  "Dividends",
];

const TitleDiv = styled.div`
  text-align: center;
`;

const CustomDivider = styled(Divider)`
  margin: 20px;
`;

const RadarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
`;

const RadarContainer = styled.div`
  width: 150px;
  height: 150px;
`;
