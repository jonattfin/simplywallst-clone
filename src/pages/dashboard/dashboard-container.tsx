import { fetchDashboardData } from "../../api";
import DashboardComponent from "./dashboard-component";

export default function DashboardContainer() {
  const data = fetchDashboardData();

  return <DashboardComponent {...data} />;
}
