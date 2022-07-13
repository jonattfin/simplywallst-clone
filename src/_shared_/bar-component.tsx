import { generateCountriesData } from "@nivo/generators";
import { ResponsiveBar } from "@nivo/bar";
import { NoSsr } from "@mui/material";

const keys = [
  "Revenue",
  "Cost Of Revenue",
  "Gross Profit",
  "Other Expenses",
  "Earnings",
];

export interface BarDatum {
  [key: string]: string | number;
}

const commonProps = {
  data: generateCountriesData(keys, { size: 1 }) as BarDatum[],
  indexBy: "country",
  keys,
  padding: 0.2,
  labelTextColor: "inherit:darker(1.4)",
  labelSkipWidth: 16,
  labelSkipHeight: 16,
  enableGridX: false,
  enableGridY: false,
};

export default function BarComponent() {
  return (
    <NoSsr>
      <ResponsiveBar {...commonProps} groupMode="grouped" />
    </NoSsr>
  );
}
