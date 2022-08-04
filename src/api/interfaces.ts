import { PortfolioFacade, WatchlistCompanies } from "./generic-types";
import {
  ICompanyCompetitors,
  ICompanyDividend,
  ICompanyFinancialHealth,
  ICompanyFundamentals,
  ICompanyHeader,
  ICompanyHistory,
  ICompanyOverview,
  ICompanyOwnership,
} from "./graphql-types";

export interface IDatastore {
  getCompanyFacade(): ICompanyFacade;
  getPortfolioFacade(id?: number): PortfolioFacade;
  getWatchlistCompanies(): WatchlistCompanies;
}

export interface ICompanyFacade {
  getCompetitors(): ICompanyCompetitors;
  getDividend(): ICompanyDividend;
  getFinancialHealth(): ICompanyFinancialHealth;
  getFundamentals(): ICompanyFundamentals;
  getHeader(): ICompanyHeader;
  getHistory(): ICompanyHistory;
  getOverview(): ICompanyOverview;
  getOwnership(): ICompanyOwnership;
}
