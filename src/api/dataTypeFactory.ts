import { LocalDashboardDataType } from "./dashboardDataType";
import { DashboardDataType } from "./data-types";

export default class DataTypeFactory {
  private _dashboardDataType!: DashboardDataType;

  constructor() {
    this._dashboardDataType = new LocalDashboardDataType();
  }

  getDashboardDataType(): DashboardDataType {
    return this._dashboardDataType;
  }
}
