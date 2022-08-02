import { NoSsr } from "@mui/material";
import { generateProgrammingLanguageStats } from "@nivo/generators";
import { ResponsivePie } from "@nivo/pie";

const commonProperties = {
  // data: generateProgrammingLanguageStats(true, 2).map(({ label, ...d }) => ({
  //   id: label,
  //   ...d,
  // })),
  animate: true,
  activeOuterRadiusOffset: 8,
};

export default function PieComponent({ data }: { data: any[] }) {
  return (
    <NoSsr>
      <ResponsivePie
        {...commonProperties}
        data={data}
        innerRadius={0.6}
        padAngle={0.5}
        cornerRadius={5}
        arcLinkLabelsColor={{
          from: "color",
        }}
        arcLinkLabelsThickness={3}
        arcLinkLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 1.2]],
        }}
      />
    </NoSsr>
  );
}

// function getData() {
//   return [
//     {
//       id: "trees",
//       label: "trees",
//       value: 1128621,
//     },
//     {
//       id: "green_investments",
//       label: "green_investments",
//       value: 287981,
//     },
//     {
//       id: "taxes",
//       label: "taxes",
//       value: 423000,
//     },
//     {
//       id: "spreading_the_word",
//       label: "spreading_the_word",
//       value: 53655,
//     },
//     {
//       id: "operational_costs",
//       label: "operational_costs",
//       value: 483226,
//     },
//   ];
// }
