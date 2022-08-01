import { PortfolioDetailsComponent } from "./portfolio-details";
import { datastoreFactory } from "../../api/datastore-factory";
import { PortfoliosComponent } from "./portfolios";

const datastore = datastoreFactory.getDatastore();

export default function Index() {
  return <div></div>;
}

export const PortfoliosInstance = () => {
  return <PortfoliosComponent {...{ data: datastore.getPortfolioFacade() }} />;
};

export const PortfolioDetailsInstance = () => {
  const data = {
    portfolio: datastore.getPortfolioFacade(1).portfolios[0],
  };

  return <PortfolioDetailsComponent {...{ data }} />;
};
