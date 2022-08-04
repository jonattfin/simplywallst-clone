export type CompetitorsDataType = {
  name: string;
  competitors: {
    name: string;
    snowflakeValueJson: string;
    stocks: {
      marketCap: number;
    }[];
  }[];
};

export interface ICompanyCompetitors
  extends ICompanyBase<CompetitorsDataType> {}

export type DividendDataType = {
  name: string;
  stocks: {
    priceHistoryJson: string;
  }[];
};

export interface ICompanyDividend extends ICompanyBase<DividendDataType> {}

export type FinancialHealthDataType = {
  name: string;
  stocks: {
    priceHistoryJson: string;
  }[];
};

export interface ICompanyFinancialHealth
  extends ICompanyBase<FinancialHealthDataType> {}

export type FundamentalsDataType = {
  name: string;
  radialBarValueJson: string;
};

export interface ICompanyFundamentals
  extends ICompanyBase<FundamentalsDataType> {}

export type HeaderDataType = {
  name: string;
  stocks: {
    ticker: string;
    exchangeName: string;
    lastPrice: number;
    marketCap: number;
    priceSevenDays: number;
    priceOneYear: number;
    lastUpdated: string;
    priceHistoryJson: string;
  }[];
};

export interface ICompanyHeader extends ICompanyBase<HeaderDataType> {}

export type HistoryDataType = {
  news: {
    date: string;
    description: string;
  }[];
  stocks: { priceHistoryJson: string }[];
};

export interface ICompanyHistory extends ICompanyBase<HistoryDataType> {}

export type OverviewDataType = {
  name: string;
  description: string;
  snowflakeValueJson: string;
  rewards: {
    description: string;
  }[];
  risks: {
    description: string;
  }[];
  stocks: {
    marketCap: number;
    ticker: string;
  }[];
};

export interface ICompanyOverview extends ICompanyBase<OverviewDataType> {}

export type OwnershipDataType = {
  name: string;
  stocks: { priceHistoryJson: string }[];
};

export interface ICompanyOwnership extends ICompanyBase<OwnershipDataType> {}

export type PortolioDataType = {
  id: number;
  name: string;
  currency: string;
  image: string;
  created: string;
  description: string;

  companies: {
    id: number;
  }[];
};

export interface IPortfoliosList
  extends IPortfoliosListBase<PortolioDataType> {}

export type PortolioCompanyDetailsDataType = {
  holding: number;
  annualDividendYield: number;
  annualDividendContribution: number;
  company: {
    name: string;
    snowflakeValueJson: string;
    stocks: {
      ticker: string;
      lastPrice: number;
      priceOneYear: number;
      priceSevenDays: number;
    }[];
  };
};

export type PortolioDetailsDataType = {
  id: number;
  name: string;
  image: string;
  created: string;
  description: string;
  snowflakeValueJson: string;

  companies: PortolioCompanyDetailsDataType[];
};

export interface IPortfolioDetails
  extends IPortfolioBase<PortolioDetailsDataType> {}

export type CompanyDataType = {
  id?: number;
  name: string;
  snowflakeValueJson: string;

  stocks: {
    lastPrice: number;
    fairValue: number;
    priceSevenDays: number;
    priceOneYear: number;
    priceHistoryJson: string;
  }[];
  news: {
    id: number;
    date: string;
    description: string;
  }[];
};

export interface ICompaniesList extends ICompaniesListBase<CompanyDataType> {}

interface IPortfoliosListBase<T> {
  portfolios: T[];
}

interface IPortfolioBase<T> {
  portfolio: T;
}

interface ICompaniesListBase<T> {
  companies: T[];
}

interface ICompanyBase<T> {
  company: T;
}
