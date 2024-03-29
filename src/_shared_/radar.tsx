import { NoSsr } from "@mui/material";
import { ResponsiveRadar } from "@nivo/radar";

const commonProperties = {
  indexBy: "value",
  animate: true,
};

export default function RadarComponent({ data }: { data: any }) {
  const radarProps = {
    ...commonProperties,
    ...{ ...data },
  };

  try {
    return (
      <NoSsr>
        <ResponsiveRadar
          {...radarProps}
          gridShape="linear"
          curve="catmullRomClosed"
        />
      </NoSsr>
    );
  } catch {
    return <div></div>;
  }
}
