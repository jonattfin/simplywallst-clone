import { NoSsr } from "@mui/material";
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";

const commonProperties = {
  animate: true,
  enableSlices: "x",
  margin: { top: 20 },
};

export default function LineComponent({ data }: { data: any }) {
  const lineProps = {
    ...commonProperties,
  };

  return (
    <NoSsr>
      <ResponsiveLine
        {...lineProps}
        data={data}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        axisLeft={
          {
            // legend: "linear scale",
          }
        }
        axisBottom={{
          format: "%b %d",
          tickValues: "every 7 days",
          // legend: "time scale",
        }}
        enablePointLabel={false}
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
