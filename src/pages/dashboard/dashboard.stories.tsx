import { factory } from "../../api";
import { CompanyComponent } from "./components";
import { CompetitorsComponent } from "./components/competitors";
import { DividendComponent } from "./components/dividend";
import { FinancialHealthComponent } from "./components/financial-health";
import { FundamentalsComponent } from "./components/fundamentals";
import { HistoryComponent } from "./components/history";
import { OverviewComponent } from "./components/overview";
import { OwnershipComponent } from "./components/ownership";

export default function Index() {
  return <div></div>;
}

const dashboarDataType = factory.getDashboardDataType();

export const Company = () => {
  return <CompanyComponent {...{ sectionName: "Company" }} />;
};

export const Competitors = () => {
  return (
    <CompetitorsComponent {...{ data: dashboarDataType.getCompanyFacade() }} />
  );
};

export const Dividend = () => {
  return (
    <DividendComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const FinancialHealth = () => {
  return (
    <FinancialHealthComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const Fundamentals = () => {
  return (
    <FundamentalsComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const History = () => {
  return (
    <HistoryComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const Overview = () => {
  return (
    <OverviewComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const Ownership = () => {
  return (
    <OwnershipComponent
      {...{ data: dashboarDataType.getCompanyFacade(), sectionName: "" }}
    />
  );
};
