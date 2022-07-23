export interface IHeaderDataType {
  company: {
    name: string;
    description: string;
  }
  stock: {
    ticker: string;
    exchangeName: string;
    lastPrice: number;
    marketCap: number;
    priceSevenDays: number;
    priceOneYear: number;
    lastUpdated: string;
    history: ILineDataType[];
  };
}

export interface IHistoryNews {
  date: string;
  text: string;
}

export interface IHistoryDataType {
  news: IHistoryNews;
  getHistory: (numberOfYears: number) => ILineDataType[];
}

export interface IOverviewDataType {
  company: {
    name:string;
    description: string;
    rewards: {
      description: string;
    }[];
    risks: {
      description: string;
    }[];
    // radarData: any;
  };
  stock: {
    ticker: string;
  };
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
  company: {
    name: string;
  };
  stock: {
    marketCap: string;
  };
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
