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

export interface Stock {
  ticker: string;
  exchangeName?: string;
  lastPrice?: number;
  marketCap?: number;
  priceSevenDays?: number;
  priceOneYear?: number;
  lastUpdated?: string;
  history: LineDataType[];
}

export interface Company {
  name?: string;
  description?: string;
  stocks: Stock[];
  rewards: Rewards[];
  risks: Risks[];
  news: News[];
  competitors?: Company[];
}

export interface HeaderDataType {
  company: Company;
}

export interface HistoryNews {
  date: string;
  text: string;
}

export interface HistoryDataType {
  company: Company;
  getHistory: (numberOfYears: number) => LineDataType[];
}

export interface OverviewDataType {
  company: Company;
}

export interface DashboardDataType {
  getHeader(): HeaderDataType;
  getOverview(): OverviewDataType;
  getHistory(): HistoryDataType;
  getOwnership(): OwnershipDataType;
  getCompetitors(): CompetitorsDataType;
  getFundamentals(): FundamentalsDataType;
  getFinancialHealth(): FinancialHealthDataType;
  getDividend(): DividendDataType;
}

export interface OwnershipDataType {
  history: LineDataType[];
}

export interface PointType {
  x: string;
  y: number;
}

export interface LineDataType {
  id: string;
  data: PointType[];
}

export interface CompetitorsDataType {
  company: Company;
}

export interface FundamentalsDataType {
  radialData: any;
}

export interface FinancialHealthDataType {
  getHistory(): LineDataType[];
}

export interface DividendDataType {
  getHistory(): LineDataType[];
}
