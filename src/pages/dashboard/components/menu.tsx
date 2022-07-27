import { MenuList, MenuItem, ListItemText } from "@mui/material";
import { useState } from "react";

export function MenuComponent() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedItem(index);
  };

  return (
    <MenuList>
      {MenuItems.map((menuItem, index) => (
        <MenuItem
          key={`menuItem_${index}`}
          selected={index === selectedItem}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
          <ListItemText key={`menuItem_${index}`}>
            <a href={`#${menuItem.replace(" ", "_")}`}>{`${
              index == 0 || index == MenuItems.length ? "" : `${index} `
            }${menuItem}`}</a>
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export const MenuItems = [
  "Company Overview",
  "Valuation",
  "Future Growth",
  "Past Performance",
  "Financial Health",
  "Dividend",
  "Ownership",
  "Other Information",
];
