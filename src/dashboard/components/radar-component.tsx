import { generateWinesTastes } from "@nivo/generators";
import { Radar } from "@nivo/radar";

const commonProperties = {
  width: 200,
  height: 200,
  ...generateWinesTastes(),
  indexBy: "taste",
  animate: true,
};

export interface RadarProps {
  width: number;
  height: number;
}

export default function RadarContainer(props?: RadarProps) {
  return (
    <Radar
      {...{ ...commonProperties, ...props }}
      gridShape="linear"
      curve="catmullRomClosed"
    />
  );
}
