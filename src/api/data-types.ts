export interface HeaderDataType {
  ticker: string;
  name: string;
  exchangeName: string;
  lastPrice: number;
  marketCap: number;
  priceLastSevenDays: number;
  priceLastYear: number;
  lastUpdated: Date;
  history: LineDataType[];
}

export interface HistoryNews {
  date: Date;
  type: string;
  value: string;
}

export interface HistoryDataType {
  news: HistoryNews[];
  history: LineDataType[];
}

export interface OverviewDataType {
  ticker: string;
  description: string;
  rewards: string[];
  risks: string[];
}

export interface DashboardDataType {
  header: HeaderDataType;
  overview: OverviewDataType;
  history: HistoryDataType;
  ownership: OwnershipDataType;
}

export interface OwnershipDataType {
  history: LineDataType[];
}

export interface PointType {
  x: string;
  y: number;
}

export interface LineDataType {
  id: string,
  data: PointType[]
}
