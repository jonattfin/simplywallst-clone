import _, { random, range, take } from "lodash";

import {
  GenericDatastore,
  LineDataType,
  Company,
  CompanyFacade,
  PortfolioFacade,
  Portfolio,
  CompanyPortfolio,
} from "./data-types";

export class LocalDatastore implements GenericDatastore {
  private readonly _company!: Company;
  private readonly _portfolios: Portfolio[];

  constructor() {
    const competitors = getCompetitors();
    this._company = getCompany("INGB", competitors);

    this._portfolios = getPortfolios(competitors);
  }

  getCompanyFacade(): CompanyFacade {
    return { company: this._company };
  }

  getPortfolioFacade(id: number): PortfolioFacade {
    let portfolios = this._portfolios;
    if (id) {
      portfolios = portfolios.filter((p) => p.id == id);
    }

    return { portfolios };
  }
}

function getPortfolios(companies: Company[]) {
  const companiesPortfolios: CompanyPortfolio[] = companies.map((company, index) => {
    return {
      id: index,
      company,
      holding: random(500, 1000),
      annualDividendContribution: random(10, 20),
      annualDividendYield: random(1, 7)
    };
  });

  const portolios: Portfolio[] = [
    {
      id: 1,
      name: "Accel Partners",
      image: "/forrest.jpg",
      currency: "Usd",
      created: new Date().toDateString(),
      description: "",
      snowflakeValueJson: JSON.stringify(generateSnowflakeValue("")),
      companies: companiesPortfolios,
    },
    {
      id: 2,
      name: "ARK Investment Management",
      image: "/spiderweb.jpg",
      currency: "Usd",
      created: new Date().toDateString(),
      description: "",
      snowflakeValueJson: JSON.stringify(generateSnowflakeValue("")),
      companies: companiesPortfolios,
    },
    {
      id: 3,
      name: "Bill & Melinda Gates Foundation",
      image: "/stock.jpg",
      currency: "Usd",
      created: new Date().toDateString(),
      description: "",
      snowflakeValueJson: JSON.stringify(generateSnowflakeValue("")),
      companies: companiesPortfolios,
    },
  ];

  return portolios;
}

function getCompany(ticker: string, competitors: Company[] = []): Company {
  return {
    name: ticker,
    description: "",
    snowflakeValueJson: JSON.stringify(generateSnowflakeValue(ticker)),
    radialBarValueJson: JSON.stringify(generateRadialBarData()),
    stocks: [
      {
        ticker: take(ticker, 4).join(""),
        exchangeName: "ENXTAM",
        lastPrice: random(10, 20),
        marketCap: 35.3e9,
        priceSevenDays: random(-5, 5),
        priceOneYear: random(-10, 20),
        lastUpdated: new Date(2022, 6, 10).toString(),
        priceHistoryJson: JSON.stringify(generateHistory({ start: 9 })),
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

export interface IHistoryData {
  start: number;
  dimensions?: number;
  numberOfYears?: number;
}

function getCompetitors() {
  return [
    getCompany("ABN AMRO Bank"),
    getCompany("Lloyds Banking Group"),
    getCompany("Oversea-Chinese Banking"),
    getCompany("Shanghai Development Bank"),
  ];
}

function generateHistory(historyData: IHistoryData): LineDataType[] {
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

function generateSnowflakeValue(ticker: string | undefined) {
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
