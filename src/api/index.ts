import _ from "lodash";

import {
  CompetitorsDataType,
  DashboardDataType,
  LineDataType,
} from "./data-types";

export function fetchDashboardData(): DashboardDataType {
  const ticker = "INGA";

  const historyData = generateData({ start: 9 });

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
      radarData: generateSnowflakeValues("ING Groep"),
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
      getHistory: (numberOfYears) => generateData({ start: 10, numberOfYears }),
    },
    ownership: {
      history: generateData({ start: 100000 }),
    },
    competitors: getCompetitors(),
    fundamentals: {
      radialData: generateRadialBarData(),
    },
    financialHealth: {
      history: generateData({ start: 100, dimensions: 2 }),
    },
  };
}

interface HistoryData {
  start: number;
  dimensions?: number;
  numberOfYears?: number;
}

function generateData(historyData: HistoryData): LineDataType[] {
  if (!historyData.dimensions) {
    historyData.dimensions = 1;
  }

  if (!historyData.numberOfYears) {
    historyData.numberOfYears = 1;
  }

  return _.range(0, historyData.dimensions).map((item) => {
    return {
      id: `INGB ${item}`,
      data: getData(historyData),
    };
  });
}

function getData(historyData: HistoryData) {
  const years = _.range(0, historyData.numberOfYears)
    .map((year) => 2022 - year)
    .sort((a, b) => a - b);

  const months = _.range(1, 12);
  const days = _.range(1, 28, 5);

  const randomValue = historyData.start * 0.4;

  const data: any = [];

  years.forEach((year) => {
    months.forEach((month) => {
      days.forEach((day) => {
        const obj = {
          x: `${year}-${month}-${day}`,
          y: (historyData.start + _.random(-randomValue, randomValue)).toFixed(
            2
          ),
        };
        data.push(obj);
      });
    });
  });

  return data;
}

function getCompetitors(): CompetitorsDataType {
  const competitors = [
    {
      name: "ABN AMRO Bank",
      marketCap: "$9.8b",
      radarData: generateSnowflakeValues("ABN AMRO Bank"),
    },
    {
      name: "Lloyds Banking",
      marketCap: "UK28.8b",
      radarData: generateSnowflakeValues("Lloyds Banking"),
    },
    {
      name: "BCR Bank",
      marketCap: "$11.8b",
      radarData: generateSnowflakeValues("BCR Bank"),
    },
    {
      name: "Intesa Sanpaolo Bank",
      marketCap: "$10.8b",
      radarData: generateSnowflakeValues("Intesa Sanpaolo Bank"),
    },
  ];

  return {
    competitors,
  };
}

function generateSnowflakeValues(ticker: string) {
  const tickers = [ticker];
  const values = ["value", "future", "past", "health", "dividend"];

  const data = values.map((value) => {
    const d: Record<string, unknown> = { value };
    tickers.forEach((tickerValue) => {
      d[tickerValue] = _.random(2, 6);
    });

    return d;
  });

  return { data, keys: tickers };
}

function generateRadialBarData() {
  return [
    {
      id: "Earnings",
      data: [
        {
          x: "Value",
          y: 4.2,
        },
      ],
    },
    {
      id: "Revenue",
      data: [
        {
          x: "Value",
          y: 17.04,
        },
      ],
    },
    {
      id: "Market Cap",
      data: [
        {
          x: "Value",
          y: 34.48,
        },
      ],
    },
  ];
}
