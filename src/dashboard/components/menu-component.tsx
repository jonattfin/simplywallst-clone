import styled from "@emotion/styled";
import { MenuList, MenuItem, ListItemText } from "@mui/material";
import { useState } from "react";

export default function MenuComponent() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedItem(index);
  };

  return (
    <MenuList>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          selected={index === selectedItem}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
          <ListItemText key={`menuItem_${index}`}>{`${
            index == 0 || index == menuItems.length ? "" : index
          } ${menuItem}`}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}

const menuItems = [
  "Company Overview",
  "Valuation",
  "Future Growth",
  "Past Performance",
  "Financial Health",
  "Dividend",
  "Management",
  "Ownership",
  "Other Information",
];

// Styled Components

const SelectedMenuItem = styled(MenuItem)`
  /* border-left: 2px solid goldenrod; */
`;

const NormalMenuItem = styled(MenuItem)``;
