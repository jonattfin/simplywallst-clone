import { DashboardDataType } from "./dashboardDataType";
import { IDashboardDataType } from "./data-types";

export default class DataTypeFactory {
  private _dashboardDataType!: DashboardDataType;

  constructor() {
    this._dashboardDataType = new DashboardDataType();
  }

  getDashboardDataType(): IDashboardDataType {
    return this._dashboardDataType;
  }
}
