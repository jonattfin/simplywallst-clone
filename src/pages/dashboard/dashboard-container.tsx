import { factory } from "../../api";
import { DashboardComponent } from "./dashboard-component";

export function DashboardContainer() {
  const dashboardDataTypeAsync = factory.getDashboardDataTypeAsync();
  return <DashboardComponent {...{ data: dashboardDataTypeAsync }} />;
}
