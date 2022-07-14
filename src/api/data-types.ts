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
  getHistory: (numberOfYears: number) => LineDataType[];
}

export interface OverviewDataType {
  ticker: string;
  description: string;
  rewards: string[];
  risks: string[];
  radarData: any;
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

export interface CompetitorType {
  name: string;
  marketCap: string;
  radarData: any;
}

export interface CompetitorsDataType {
  competitors: CompetitorType[];
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
