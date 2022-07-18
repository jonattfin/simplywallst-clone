import _ from "lodash";

import {
  ICompetitorsDataType,
  IDashboardDataType,
  IDashboardDataTypeAsync,
  IDividendDataType,
  IFinancialHealthDataType,
  IFundamentalsDataType,
  IHeaderDataType,
  IHistoryDataType,
  IOverviewDataType,
  IOwnershipDataType,
} from "./data-types";

export class DashboardDataTypeAsync implements IDashboardDataTypeAsync {
  dashboardDataType!: IDashboardDataType;
  
  constructor(dashboardDataType: IDashboardDataType) {
    this.dashboardDataType = dashboardDataType;
  }

  getHeaderAsync(): Promise<IHeaderDataType> {
    return makePromise(this.dashboardDataType.getHeader());
  }
  getOverviewAsync(): Promise<IOverviewDataType> {
    return makePromise(this.dashboardDataType.getOverview());
  }
  getHistoryAsync(): Promise<IHistoryDataType> {
    return makePromise(this.dashboardDataType.getHistory());
  }
  getOwnershipAsync(): Promise<IOwnershipDataType> {
    return makePromise(this.dashboardDataType.getOwnership());
  }
  getCompetitorsAsync(): Promise<ICompetitorsDataType> {
    return makePromise(this.dashboardDataType.getCompetitors());
  }
  getFundamentalsAsync(): Promise<IFundamentalsDataType> {
    return makePromise(this.dashboardDataType.getFundamentals());
  }
  getFinancialHealthAsync(): Promise<IFinancialHealthDataType> {
    return makePromise(this.dashboardDataType.getFinancialHealth());
  }
  getDividendAsync(): Promise<IDividendDataType> {
    return makePromise(this.dashboardDataType.getDividend());
  }
}

function makePromise<T>(data: T): Promise<T> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(data);
    }, _.random(1, 5) * 1000);
  });
}
