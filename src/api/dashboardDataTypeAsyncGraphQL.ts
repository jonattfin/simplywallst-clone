import {
  ICompetitorsDataType,
  IDashboardDataTypeAsync,
  IDividendDataType,
  IFinancialHealthDataType,
  IFundamentalsDataType,
  IHeaderDataType,
  IHistoryDataType,
  IOverviewDataType,
  IOwnershipDataType,
} from "./data-types";



export class DashboardDataTypeAsyncGraphQL implements IDashboardDataTypeAsync {
  getHeaderAsync(): Promise<IHeaderDataType> {
    throw new Error("Method not implemented.");
  }
  getOverviewAsync(): Promise<IOverviewDataType> {
    throw new Error("Method not implemented.");
  }
  getHistoryAsync(): Promise<IHistoryDataType> {
    throw new Error("Method not implemented.");
  }
  getOwnershipAsync(): Promise<IOwnershipDataType> {
    throw new Error("Method not implemented.");
  }
  getCompetitorsAsync(): Promise<ICompetitorsDataType> {
    throw new Error("Method not implemented.");
  }
  getFundamentalsAsync(): Promise<IFundamentalsDataType> {
    throw new Error("Method not implemented.");
  }
  getFinancialHealthAsync(): Promise<IFinancialHealthDataType> {
    throw new Error("Method not implemented.");
  }
  getDividendAsync(): Promise<IDividendDataType> {
    throw new Error("Method not implemented.");
  }
}
