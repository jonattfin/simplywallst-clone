import { fetchDashboardData } from "../../api";
import DashboardComponent from "./dashboard-component";

export default function Index() {
  return <div></div>;
}

export const Dashboard = () => {
  const data = fetchDashboardData();
  return <DashboardComponent {...data} />;
};
