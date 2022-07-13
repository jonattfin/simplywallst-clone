import { NoSsr } from "@mui/material";
import { generateLibTree } from "@nivo/generators";
import { ResponsiveTreeMap } from "@nivo/treemap";

export default function TreemapComponent() {
  return (
    <NoSsr>
      <ResponsiveTreeMap
        {...getCommonProperties()}
        tooltip={({ node }) => (
          <strong style={{ color: node.color }}>
            {node.pathComponents.join(" / ")}: {node.formattedValue}
          </strong>
        )}
        theme={{
          tooltip: {
            container: {
              background: "#333",
            },
          },
        }}
      />
    </NoSsr>
  );
}

function getCommonProperties() {
  return {
    data: generateLibTree("", 2),
    identity: "name",
    value: "loc",
    valueFormat: ".02s",
    labelSkipSize: 16,
  };
}
