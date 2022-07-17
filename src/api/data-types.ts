export interface IHeaderDataType {
  ticker: string;
  name: string;
  exchangeName: string;
  lastPrice: number;
  marketCap: number;
  priceLastSevenDays: number;
  priceLastYear: number;
  lastUpdated: Date;
  history: ILineDataType[];
}

export interface IHistoryNews {
  date: Date;
  type: string;
  value: string;
}

export interface IHistoryDataType {
  news: IHistoryNews[];
  getHistory: (numberOfYears: number) => ILineDataType[];
}

export interface IOverviewDataType {
  ticker: string;
  description: string;
  rewards: string[];
  risks: string[];
  radarData: any;
}

export interface IDashboardDataType {
  getHeader(): IHeaderDataType;
  getOverview(): IOverviewDataType;
  getHistory(): IHistoryDataType;
  getOwnership(): IOwnershipDataType;
  getCompetitors(): ICompetitorsDataType;
  getFundamentals(): IFundamentalsDataType;
  getFinancialHealth(): IFinancialHealthDataType;
  getDividend(): IDividendDataType;
}

export interface IDashboardDataTypeAsync {
  getHeaderAsync(): Promise<IHeaderDataType>;
  getOverviewAsync(): Promise<IOverviewDataType>;
  getHistoryAsync(): Promise<IHistoryDataType>;
  getOwnershipAsync(): Promise<IOwnershipDataType>;
  getCompetitorsAsync(): Promise<ICompetitorsDataType>;
  getFundamentalsAsync(): Promise<IFundamentalsDataType>;
  getFinancialHealthAsync(): Promise<IFinancialHealthDataType>;
  getDividendAsync(): Promise<IDividendDataType>;
}

export interface IOwnershipDataType {
  history: ILineDataType[];
}

export interface IPointType {
  x: string;
  y: number;
}

export interface ILineDataType {
  id: string;
  data: IPointType[];
}

export interface ICompetitorType {
  name: string;
  marketCap: string;
  radarData: any;
}

export interface ICompetitorsDataType {
  competitors: ICompetitorType[];
}

export interface IFundamentalsDataType {
  radialData: any;
}

export interface IFinancialHealthDataType {
  getHistory(): ILineDataType[];
}

export interface IDividendDataType {
  getHistory(): ILineDataType[];
}
