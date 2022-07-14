import { factory } from "../../api";
import DashboardComponent from "./dashboard-component";

export default function DashboardContainer() {
  const dashboardDataType = factory.getDashboardDataType();
  return <DashboardComponent {...{ data: dashboardDataType }} />;
}
