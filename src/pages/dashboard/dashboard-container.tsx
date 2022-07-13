import { fetchDashboardData } from "../../api";
import DashboardComponent from "./dashboard-component";

export default function DashboardContainer() {
  const props = fetchDashboardData();

  return <DashboardComponent {...props}/>;
}
