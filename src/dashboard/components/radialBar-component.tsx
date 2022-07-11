import { RadialBar } from "@nivo/radial-bar";

const multipleCategoriesData = [
  {
    id: "Supermarket",
    data: [
      {
        x: "Vegetables",
        y: 55,
      },
      {
        x: "Fruits",
        y: 200,
      },
      {
        x: "Meat",
        y: 269,
      },
    ],
  },
  {
    id: "Combini",
    data: [
      {
        x: "Vegetables",
        y: 251,
      },
      {
        x: "Fruits",
        y: 23,
      },
      {
        x: "Meat",
        y: 100,
      },
    ],
  },
  {
    id: "Online",
    data: [
      {
        x: "Vegetables",
        y: 15,
      },
      {
        x: "Fruits",
        y: 37,
      },
      {
        x: "Meat",
        y: 285,
      },
    ],
  },
  {
    id: "Marché",
    data: [
      {
        x: "Vegetables",
        y: 180,
      },
      {
        x: "Fruits",
        y: 154,
      },
      {
        x: "Meat",
        y: 197,
      },
    ],
  },
];

const commonProperties = {
  width: 300,
  height: 300,
  margin: { top: 40, right: 40, bottom: 40, left: 40 },
  data: multipleCategoriesData,
};

export default function RadialBarComponent() {
  return <RadialBar {...commonProperties} />;
}
