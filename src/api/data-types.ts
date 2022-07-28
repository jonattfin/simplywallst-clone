export interface Company {
  name?: string;
  description?: string;
  stocks: Stock[];
  rewards: Rewards[];
  risks: Risks[];
  news: News[];
  competitors?: Company[];
  snowflakeValueJson: string;
  radialBarValueJson: string;
}

export interface Stock {
  ticker: string;
  exchangeName?: string;
  lastPrice?: number;
  marketCap?: number;
  priceSevenDays?: number;
  priceOneYear?: number;
  lastUpdated?: string;
  priceHistoryJson: string;
}

export interface News {
  id?: number;
  date: string;
  description: string;
}

export interface Rewards {
  id?: number;
  description: string;
}

export interface Risks {
  id?: number;
  description: string;
}

export interface GenericDatastore {
  getCompanyFacade(): CompanyFacade;
  getPortfolioFacade(): PortfolioFacade;
}

export interface CompanyFacade {
  company: Company;
}

export interface HistoryNews {
  date: string;
  text: string;
}

export interface PointType {
  x: string;
  y: number;
}

export interface LineDataType {
  id: string;
  data: PointType[];
}

export interface Portfolio {
  id: number
  name: string;
  image: string;
  created: Date;
  numberOfStocks: number;
  description: string;
}

export interface PortfolioFacade {
  portfolios: Portfolio[]
}

