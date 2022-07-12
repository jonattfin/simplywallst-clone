import { linearGradientDef } from "@nivo/core";
import { Line } from "@nivo/line";
import _ from "lodash";

const commonProperties = {
  height: 20,
  width: 250,
  animate: true,
  enableSlices: "x",
};

export interface LineProps {
  height: number;
  width: number;
}

export default function LineComponent(props?: LineProps) {
  const lineProps = {
    ...commonProperties,
    ...props,
  };

  return (
    <Line
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
      colors={['goldenrod']}
      defs={[
        linearGradientDef("gradientA", [
          { offset: 0, color: "inherit" },
          { offset: 100, color: "inherit", opacity: 0 },
        ]),
      ]}
      fill={[{ match: "*", id: "gradientA" }]}
    />
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
