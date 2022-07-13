export interface HeaderDataType {
  ticker: string;
  name: string;
  exchangeName: string;
  lastPrice: number;
  marketCap: number;
  priceLastSevenDays: number;
  priceLastYear: number;
  lastUpdated: Date;
}

export interface HistoryNews {
  date: Date;
  type: string;
  value: string;
}

export interface HistoryDataType {
  news: HistoryNews[];
}

export interface OverviewDataType {
  ticker: string;
  description: string;
  rewards: string[];
  risks: string[];
}

export interface DashboardDataType {
}
