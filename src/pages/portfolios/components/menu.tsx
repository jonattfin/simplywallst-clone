import styled from "@emotion/styled";
import { Stack, Button, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Portfolio } from "../../../api/data-types";

export function MenuComponent({ portfolio }: { portfolio: Portfolio | undefined }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Fragment>
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
