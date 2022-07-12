import { NoSsr } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";
import _ from "lodash";

const commonProperties = {
  animate: true,
  enableSlices: "x",
};

export default function LineComponent() {
  const lineProps = {
    ...commonProperties,
  };

  return (
    <NoSsr>
      <ResponsiveLine
        {...lineProps}
        data={generateData()}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        axisLeft={{
          legend: "linear scale",
        }}
        axisBottom={{
          format: "%b %d",
          tickValues: "every 2 days",
          legend: "time scale",
        }}
        enablePointLabel={true}
        enableGridX={false}
        enableGridY={false}
        pointSize={2}
        pointBorderWidth={1}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
        enableArea={true}
        yScale={{
          type: "linear",
          stacked: true,
        }}
        colors={["goldenrod"]}
        defs={[
          linearGradientDef("gradientA", [
            { offset: 0, color: "inherit" },
            { offset: 100, color: "inherit", opacity: 0 },
          ]),
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
      />
    </NoSsr>
  );
}

function generateData() {
  const year = 2022;
  const months = _.range(1, 6);
  const days = _.range(1, 10);

  const data: any = [];
  months.forEach((month) => {
    days.forEach((day) => {
      const obj = { x: `${year}-${month}-${day}`, y: 10 + _.random(-2, 2) };
      data.push(obj);
    });
  });

  return [
    {
      id: "INGB",
      data,
    },
  ];
}
