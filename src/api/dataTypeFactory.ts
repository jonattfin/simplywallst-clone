import { DashboardDataType } from "./dashboardDataType";
import { IDashboardDataType, IDashboardDataTypeAsync } from "./data-types";

export default class DataTypeFactory {
  private _dashboardDataType!: IDashboardDataType;

  constructor() {
    this._dashboardDataType = new DashboardDataType();
  }

  getDashboardDataType(): IDashboardDataType {
    return this._dashboardDataType;
  }
}
