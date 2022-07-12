import dynamic from "next/dynamic";

export const BarComponent = getBarComponent();

export const LineComponent = getLineComponent();

export const RadarComponent = getRadarComponent();

export const RadialBarComponent = getRadialBarComponent();

export { default as HeaderComponent } from "./header-component";

function getBarComponent() {
  return dynamic(() => import("./bar-component"), {
    ssr: false,
  });
}

function getLineComponent() {
  return dynamic(() => import("./line-component"), {
    ssr: false,
  });
}

function getRadarComponent() {
  return dynamic(() => import("./radar-component"), {
    ssr: false,
  });
}

function getRadialBarComponent() {
  return dynamic(() => import("./radialBar-component"), {
    ssr: false,
  });
}
