export type Company = {
  name: string;
  description: string;
  stocks: Stock[];
  rewards: Rewards[];
  risks: Risks[];
  news: News[];
  competitors: Company[];
  snowflakeValueJson: string;
  radialBarValueJson: string;
};

export type Stock = {
  ticker: string;
  exchangeName: string;
  lastPrice: number;
  marketCap: number;
  priceSevenDays: number;
  priceOneYear: number;
  lastUpdated: string;
  priceHistoryJson: string;
};

export type News = {
  id?: number;
  date: string;
  description: string;
};

export type Rewards = {
  id?: number;
  description: string;
};

export type Risks = {
  id?: number;
  description: string;
};

export type HistoryNews = {
  date: string;
  text: string;
};

export type PointType = {
  x: string;
  y: number;
};

export type LineDataType = {
  id: string;
  data: PointType[];
};

export type Portfolio = {
  id: number;
  name: string;
  currency: string;
  image: string;
  created: string;
  description: string;

  snowflakeValueJson: string;
  companies: CompanyPortfolio[];
};

export type CompanyPortfolio = {
  id: number;
  holding: number;
  annualDividendYield: number;
  annualDividendContribution: number;
  company: Company;
};
