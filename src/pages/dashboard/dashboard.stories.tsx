import DashboardComponent from "./dashboard-component";
import { factory } from "../../api";

export default function Index() {
  return <div></div>;
}

export const Dashboard = () => {
  const dashboardDataType = factory.getDashboardDataType();
  return <DashboardComponent {...{ data: dashboardDataType }} />;
};
