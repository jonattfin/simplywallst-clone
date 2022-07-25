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
  ICompany,
} from "./data-types";

export class DashboardDataType implements IDashboardDataType {
  private readonly _company!: ICompany;

  constructor() {
    const competitors = getCompetitors();
    this._company = getCompany("INGB", competitors);
  }

  getHeader(): IHeaderDataType {
    return {
      company: this._company,
    };
  }
  getOverview(): IOverviewDataType {
    return {
      company: this._company,
    };
  }
  getHistory(): IHistoryDataType {
    return {
      company: this._company,
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
    return { company: this._company };
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

function getCompetitors() {
  return [
    getCompany("ABN AMRO Bank"),
    getCompany("Lloyds Banking Group"),
    getCompany("Oversea-Chinese Banking"),
    getCompany("Shanghai Development Bank"),
  ];
}

function getCompany(ticker: string, competitors: ICompany[] = []) {
  return {
    name: ticker,
    description: "",
    stocks: [
      {
        ticker: ticker,
        exchangeName: "ENXTAM",
        lastPrice: 9.42,
        marketCap: 35.3e9,
        priceSevenDays: -0.1,
        priceOneYear: -13.4,
        lastUpdated: new Date(2022, 6, 10).toString(),
        history: generateHistory({ start: 9 }),
      },
    ],
    news: [
      {
        date: new Date(2022, 5, 18).toDateString(),
        description:
          "ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022.",
      },
    ],
    rewards: [
      {
        description: "Trading at 67% below our estimate of its fair value",
      },
      { description: "Earnings are forecast to grow 12.35% per year" },
      { description: "Earnings grew by 48.9% over the past year" },
    ],
    risks: [{ description: "Unstable dividend track record" }],
    competitors,
  };
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

export function generateSnowflakeValues(ticker: string | undefined) {
  if (!ticker) {
    ticker = "RandomTicker";
  }

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
