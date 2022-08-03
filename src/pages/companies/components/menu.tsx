import { Stack, Button } from "@mui/material";
import { useState } from "react";

export function MenuComponent() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Stack>
      {MenuItems.map((menuItem, index) => (
        <Button
          key={`${menuItem}_${index}`}
          href={`#${menuItem.replace(" ", "_")}`}
          onClick={() => {
            setSelectedItem(index);
          }}
          disabled={index == selectedItem}
        >
          {`${
            index == 0 || index == MenuItems.length ? "" : `${index} `
          }${menuItem}`}
        </Button>
      ))}
    </Stack>
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
