import _ from "lodash";

import { DashboardDataType, LineDataType } from "./data-types";

export function fetchDashboardData(): DashboardDataType {
  const ticker = "INGA";

  const historyData = generateData(9);

  return {
    header: {
      ticker,
      name: "ING Groep",
      exchangeName: "ENXTAM",
      lastPrice: 9.42,
      marketCap: 35.3e9,
      priceLastSevenDays: -0.1,
      priceLastYear: -13.4,
      lastUpdated: new Date(2022, 6, 10),
      history: historyData,
    },
    overview: {
      ticker,
      description: `ING Groep N.V., a financial institution, provides various banking
            products and services in the Netherlands, Belgium, Germany,
            Poland, Rest of Europe, North America, Latin America, Asia, and
            Australia.`,
      rewards: [
        "Trading at 67% below our estimate of its fair value",
        "Earnings are forecast to grow 12.35% per year",
        "Earnings grew by 48.9% over the past year",
      ],
      risks: ["Unstable dividend track record"],
    },
    history: {
      news: [
        {
          date: new Date(2022, 5, 18),
          type: "Inbox",
          value:
            "ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022.",
        },
        {
          date: new Date(2022, 4, 1),
          type: "Inbox",
          value:
            "First quarter 2022 earnings: EPS exceeds analyst expectations.",
        },
        {
          date: new Date(2022, 3, 7),
          type: "Inbox",
          value: "Upcoming dividend of €0.41 per share.",
        },
        {
          date: new Date(2022, 2, 1),
          type: "Inbox",
          value:
            "Boursorama Société Anonyme agreed to acquire Retail Banking Business of ING Groep NV in France from ING Groep N.V. (ENXTAM:INGA)",
        },
      ],
      history: historyData,
    },
    ownership: {
      history: generateData(100000),
    },
  };
}

function generateData(start: number = 10): LineDataType[] {
  const randomValue = start * 0.2;

  const year = 2022;
  const months = _.range(1, 6);
  const days = _.range(1, 28, 5);

  const data: any = [];
  months.forEach((month) => {
    days.forEach((day) => {
      const obj = {
        x: `${year}-${month}-${day}`,
        y: (start + _.random(-randomValue, randomValue)).toFixed(2),
      };
      data.push(obj);
    });
  });

  return [
    {
      id: "INGB",
      data,
    },
  ];
}
