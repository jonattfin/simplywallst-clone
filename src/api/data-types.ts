export interface INews {
  id?: number;
  date: string
  description: string;
}

export interface IRewards {
  id?: number;
  description: string;
}

export interface IRisks {
  id?: number;
  description: string;
}

export interface IStock {
  ticker: string;
  exchangeName?: string;
  lastPrice?: number;
  marketCap?: number;
  priceSevenDays?: number;
  priceOneYear?: number;
  lastUpdated?: string;
  history: ILineDataType[];
}

export interface ICompany {
  name?: string;
  description?: string;
  stocks: IStock[];
  rewards: IRewards[];
  risks: IRisks[];
  news: INews[];
  competitors? : ICompany[]
}

export interface IHeaderDataType {
  company: ICompany;
}

export interface IHistoryNews {
  date: string;
  text: string;
}

export interface IHistoryDataType {
  company: ICompany;
  getHistory: (numberOfYears: number) => ILineDataType[];
}

export interface IOverviewDataType {
  company: ICompany;
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

export interface ICompetitorsDataType {
  company: ICompany;
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
