import _ from "lodash";

import {
  ICompetitorsDataType,
  IDividendDataType,
  IFinancialHealthDataType,
  IFundamentalsDataType,
  IHeaderDataType,
  IHistoryDataType,
  IDashboardDataType,
  ILineDataType,
  IOverviewDataType,
  IOwnershipDataType,
} from "./data-types";

export class DashboardDataType implements IDashboardDataType {
  private _ticker!: string;

  constructor() {
    this._ticker = "INGA";
  }

  getHeader(): IHeaderDataType {
    return {
      company: {
        name: "ING Groep",
        description: ""
      },
      stock: {
        ticker: this._ticker,
        exchangeName: "ENXTAM",
        lastPrice: 9.42,
        marketCap: 35.3e9,
        priceSevenDays: -0.1,
        priceOneYear: -13.4,
        lastUpdated: new Date(2022, 6, 10).toString(),
        history: generateHistory({ start: 9 }),
      },
    };
  }
  getOverview(): IOverviewDataType {
    return {
      company: {
        name: "",
        description: `ING Groep N.V., a financial institution, provides various banking
        products and services in the Netherlands, Belgium, Germany,
        Poland, Rest of Europe, North America, Latin America, Asia, and
        Australia.`,
        rewards: [
          {
            description: "Trading at 67% below our estimate of its fair value",
          },
          { description: "Earnings are forecast to grow 12.35% per year" },
          { description: "Earnings grew by 48.9% over the past year" },
        ],
        risks: [{ description: "Unstable dividend track record" }],
      },
      stock: {
        ticker: this._ticker,
      },
    };
  }
  getHistory(): IHistoryDataType {
    return {
      news: {
        date: new Date(2022, 5, 18).toDateString(),
        text:
          "ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022.",
      },
      getHistory: (numberOfYears: number) =>
      generateHistory({ start: 10, numberOfYears }),
    };
  }
  getOwnership(): IOwnershipDataType {
    return {
      history: generateHistory({ start: 100000 }),
    };
  }
  getCompetitors(): ICompetitorsDataType {
    return {
      company: {
        name: "ABN AMRO Bank",
      },
      stock: {
        marketCap: "$9.8b",
      }
    };
  }
  getFundamentals(): IFundamentalsDataType {
    return {
      radialData: generateRadialBarData(),
    };
  }
  getFinancialHealth(): IFinancialHealthDataType {
    return {
      getHistory: () => generateHistory({ start: 100, dimensions: 2 }),
    };
  }
  getDividend(): IDividendDataType {
    return {
      getHistory: () => generateHistory({ start: 100, dimensions: 3 }),
    };
  }
}

export interface IHistoryData {
  start: number;
  dimensions?: number;
  numberOfYears?: number;
}

export function generateHistory(historyData: IHistoryData): ILineDataType[] {
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

function getData(historyData: IHistoryData) {
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

export function generateSnowflakeValues(ticker: string) {
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

export function generateRadialBarData() {
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
