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
  getPortfolioFacade(id?: number): PortfolioFacade;
  getWatchlistCompanies(): WatchlistCompanies;
}

export interface CompanyFacade {
  company: Company;
}

export interface WatchlistCompanies {
  companies: WatchlistCompany[];
}

export interface WatchlistCompany {
  id: number;
  name?: string,
  lastPrice?: number;
  fairValue?: number;
  sevenDays?: number;
  oneYear?: number;
  snowflakeValueJson: string;
  priceHistoryJson?: string,
  news: News[]
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
  id: number;
  name: string;
  currency: string;
  image: string;
  created: string;
  description: string;

  snowflakeValueJson: string;
  companies: CompanyPortfolio[];
}

export interface PortfolioFacade {
  portfolios: Portfolio[];
}

export interface CompanyPortfolio {
  id: number;
  holding: number;
  annualDividendYield: number;
  annualDividendContribution: number;
  company: Company;
}
