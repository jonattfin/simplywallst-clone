import { factory } from "../../api";
import { DashboardComponent } from "./dashboard";

export function DashboardContainer() {
  const dashboardDataTypeAsync = factory.getDashboardDataTypeAsync();
  return <DashboardComponent {...{ data: dashboardDataTypeAsync }} />;
}
