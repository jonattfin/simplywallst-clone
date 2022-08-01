import { datastoreFactory } from "../../api/datastore-factory";
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

const datastore = datastoreFactory.getDatastore();

export const CompanyInstance = () => {
  return <Company.CompanyComponent {...{ sectionName: "Company" }} />;
};

export const CompetitorsInstance = () => {
  return (
    <Competitors.CompetitorsComponent
      {...{ data: datastore.getCompanyFacade() }}
    />
  );
};

export const DividendInstance = () => {
  return (
    <Dividend.DividendComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const FinancialHealthInstance = () => {
  return (
    <FinancialHealth.FinancialHealthComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const FundamentalsInstance = () => {
  return (
    <Fundamentals.FundamentalsComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const HistoryInstance = () => {
  return (
    <History.HistoryComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const OverviewInstance = () => {
  return (
    <Overview.OverviewComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};

export const OwnershipInstance = () => {
  return (
    <Ownership.OwnershipComponent
      {...{ data: datastore.getCompanyFacade(), sectionName: "" }}
    />
  );
};
