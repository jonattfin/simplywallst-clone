import { generateCountriesData } from "@nivo/generators";
import { Bar } from "@nivo/bar";
import { NoSsr } from "@mui/material";

const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];

export interface BarDatum {
  [key: string]: string | number;
}

const commonProps = {
  width: 500,
  height: 300,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }) as BarDatum[],
  indexBy: "country",
  keys,
  padding: 0.2,
  labelTextColor: "inherit:darker(1.4)",
  labelSkipWidth: 16,
  labelSkipHeight: 16,
};

export default function BarComponent() {
  return (
    <NoSsr>
      <Bar {...commonProps} groupMode="grouped" />
    </NoSsr>
  );
}
