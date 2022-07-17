import { DashboardDataType } from "./dashboardDataType";
import { DashboardDataTypeAsync } from "./dashboardDataTypeAsync";
import { IDashboardDataType, IDashboardDataTypeAsync } from "./data-types";

export default class DataTypeFactory {
  private _dashboardDataType!: IDashboardDataType;
  private _dashboardDataTypeAsync!: IDashboardDataTypeAsync;

  constructor() {
    this._dashboardDataType = new DashboardDataType();
    this._dashboardDataTypeAsync = new DashboardDataTypeAsync();
  }

  getDashboardDataType(): IDashboardDataType {
    return this._dashboardDataType;
  }

  getDashboardDataTypeAsync(): IDashboardDataTypeAsync {
    return this._dashboardDataTypeAsync;
  }
}
