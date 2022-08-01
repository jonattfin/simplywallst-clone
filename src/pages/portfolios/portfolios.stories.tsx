import { PortfolioDetailsComponent } from "./portfolio-details";
import PortfoliosComponent from "./portfolios";
import { datastoreFactory } from "../../api/datastore-factory";
import { head } from "lodash";

const datastore = datastoreFactory.getDatastore();

export default function Index() {
  return <div></div>;
}

export const PortfoliosInstance = () => {
  return <PortfoliosComponent {...{ data: datastore.getPortfolioFacade() }} />;
};

export const PortfolioDetailsInstance = () => {
  const data = {
    portfolio: head(datastore.getPortfolioFacade(1).portfolios),
  };

  return <PortfolioDetailsComponent {...{ data }} />;
};
