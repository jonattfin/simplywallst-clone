import { NoSsr } from "@mui/material";
import { generateWinesTastes } from "@nivo/generators";
import { Radar } from "@nivo/radar";

const commonProperties = {
  width: 100,
  height: 100,
  indexBy: "taste",
  animate: true,
};

export interface RadarProps {
  width: number;
  height: number;
}

export default function RadarContainer(props?: RadarProps) {
  const radarProps = {
    ...commonProperties,
    ...props,
    ...{ ...generateWinesTastes() },
  };

  return (
    <NoSsr>
      <Radar {...radarProps} gridShape="linear" curve="catmullRomClosed" />
    </NoSsr>
  );
}
