import { NoSsr } from "@mui/material";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

export default function RadialBarComponent({ data }: { data: any }) {
  return (
    <NoSsr>
      <ResponsiveRadialBar data={data} />
    </NoSsr>
  );
}
