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
const companyFacade = datastore.getCompanyFacade();

export const CompanyInstance = () => {
  return <Company.CompanyComponent {...{ sectionName: "Company" }} />;
};

export const CompetitorsInstance = () => {
  return (
    <Competitors.CompetitorsComponent
      {...{ data: companyFacade.getCompetitors() }}
    />
  );
};

export const DividendInstance = () => {
  return (
    <Dividend.DividendComponent
      {...{ data: companyFacade.getDividend(), sectionName: "" }}
    />
  );
};

export const FinancialHealthInstance = () => {
  return (
    <FinancialHealth.FinancialHealthComponent
      {...{ data: companyFacade.getFinancialHealth(), sectionName: "" }}
    />
  );
};

export const FundamentalsInstance = () => {
  return (
    <Fundamentals.FundamentalsComponent
      {...{ data: companyFacade.getFundamentals(), sectionName: "" }}
    />
  );
};

export const HistoryInstance = () => {
  return (
    <History.HistoryComponent
      {...{ data: companyFacade.getHistory(), sectionName: "" }}
    />
  );
};

export const OverviewInstance = () => {
  return (
    <Overview.OverviewComponent
      {...{ data: companyFacade.getOverview(), sectionName: "" }}
    />
  );
};

export const OwnershipInstance = () => {
  return (
    <Ownership.OwnershipComponent
      {...{ data: companyFacade.getOwnership(), sectionName: "" }}
    />
  );
};
