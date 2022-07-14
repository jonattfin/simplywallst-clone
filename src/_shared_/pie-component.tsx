import { generateProgrammingLanguageStats } from "@nivo/generators";
import { ResponsivePie } from "@nivo/pie";

const commonProperties = {
  data: generateProgrammingLanguageStats(true, 2).map(({ label, ...d }) => ({
    id: label,
    ...d,
  })),
  animate: true,
  activeOuterRadiusOffset: 8,
};

export default function PieComponent() {
  return (
    <ResponsivePie
      {...commonProperties}
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
  );
}
