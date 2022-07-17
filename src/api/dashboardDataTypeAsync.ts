import _ from "lodash";
import { DashboardDataType } from "./dashboardDataType";
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

const dashboardDataType = new DashboardDataType();

export class DashboardDataTypeAsync implements IDashboardDataTypeAsync {
  getHeaderAsync(): Promise<IHeaderDataType> {
    return makePromise(dashboardDataType.getHeader());
  }
  getOverviewAsync(): Promise<IOverviewDataType> {
    return makePromise(dashboardDataType.getOverview());
  }
  getHistoryAsync(): Promise<IHistoryDataType> {
    return makePromise(dashboardDataType.getHistory());
  }
  getOwnershipAsync(): Promise<IOwnershipDataType> {
    return makePromise(dashboardDataType.getOwnership());
  }
  getCompetitorsAsync(): Promise<ICompetitorsDataType> {
    return makePromise(dashboardDataType.getCompetitors());
  }
  getFundamentalsAsync(): Promise<IFundamentalsDataType> {
    return makePromise(dashboardDataType.getFundamentals());
  }
  getFinancialHealthAsync(): Promise<IFinancialHealthDataType> {
    return makePromise(dashboardDataType.getFinancialHealth());
  }
  getDividendAsync(): Promise<IDividendDataType> {
    return makePromise(dashboardDataType.getDividend());
  }
}

function makePromise<T>(data: T): Promise<T> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(data);
    }, _.random(1, 5) * 1000);
  });
}
