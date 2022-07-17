import { factory } from "../../api";
import { CompanyComponent } from "./components";
import { CompetitorsComponent } from "./components/competitors";
import { DividendComponent } from "./components/dividend";
import { FinancialHealthComponent } from "./components/financial-health";
import { FundamentalsComponent } from "./components/fundamentals";
import { HistoryComponent } from "./components/history";
import { OverviewComponent } from "./components/overview";
import { OwnershipComponent } from "./components/ownership";
import { DashboardContainer } from ".";

export default function Index() {
  return <div></div>;
}

const dashboarDataType = factory.getDashboardDataType();

export const Company = () => {
  return <CompanyComponent {...{ sectionName: "Company" }} />;
};

export const Competitors = () => {
  return (
    <CompetitorsComponent {...{ data: dashboarDataType.getCompetitors() }} />
  );
};

export const Dividend = () => {
  return (
    <DividendComponent
      {...{ data: dashboarDataType.getDividend(), sectionName: "" }}
    />
  );
};

export const FinancialHealth = () => {
  return (
    <FinancialHealthComponent
      {...{ data: dashboarDataType.getFinancialHealth(), sectionName: "" }}
    />
  );
};

export const Fundamentals = () => {
  return (
    <FundamentalsComponent
      {...{ data: dashboarDataType.getFundamentals(), sectionName: "" }}
    />
  );
};

export const History = () => {
  return (
    <HistoryComponent
      {...{ data: dashboarDataType.getHistory(), sectionName: "" }}
    />
  );
};

export const Overview = () => {
  return (
    <OverviewComponent
      {...{ data: dashboarDataType.getOverview(), sectionName: "" }}
    />
  );
};

export const Ownership = () => {
  return (
    <OwnershipComponent
      {...{ data: dashboarDataType.getOwnership(), sectionName: "" }}
    />
  );
};

export const Dashboard = () => {
  return <DashboardContainer />;
};
