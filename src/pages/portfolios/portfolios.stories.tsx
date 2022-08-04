import { PortfolioDetailsComponent } from "./portfolio-details";
import { datastoreFactory } from "../../api/datastore-factory";
import { PortfoliosComponent } from "./portfolios";

const portfolioFacade = datastoreFactory.getDatastore().getPortfolioFacade();

export default function Index() {
  return <div></div>;
}

export const PortfoliosInstance = () => {
  return (
    <PortfoliosComponent
      {...{
        data: portfolioFacade.getPortfoliosList(),
        createPortfolio: () => {
          console.log("createPortfolio");
        },
      }}
    />
  );
};

// export const PortfolioDetailsInstance = () => {
//   const data = {
//     portfolio: datastore.getPortfolioFacade(1).portfolios[0],
//   };

//   return <PortfolioDetailsComponent {...{ data }} />;
// };
