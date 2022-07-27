import { dataTypeFactory } from "../../api/dataTypeFactory";
import {
  Company,
  Competitors,
  Dividend,
  FinancialHealth,
  Fundamentals,
  History,
  Overview,
  Ownership,
} from "./components";

export default function Index() {
  return <div></div>;
}

const dashboardDataType = dataTypeFactory.getDashboardDataType();

export const CompanyInstance = () => {
  return <Company.CompanyComponent {...{ sectionName: "Company" }} />;
};

export const CompetitorsInstance = () => {
  return (
    <Competitors.CompetitorsComponent
      {...{ data: dashboardDataType.getCompanyFacade() }}
    />
  );
};

export const DividendInstance = () => {
  return (
    <Dividend.DividendComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const FinancialHealthInstance = () => {
  return (
    <FinancialHealth.FinancialHealthComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const FundamentalsInstance = () => {
  return (
    <Fundamentals.FundamentalsComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const HistoryInstance = () => {
  return (
    <History.HistoryComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const OverviewInstance = () => {
  return (
    <Overview.OverviewComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const OwnershipInstance = () => {
  return (
    <Ownership.OwnershipComponent
      {...{ data: dashboardDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};
