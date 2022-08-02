import { NoSsr } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const commonProperties = {
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
