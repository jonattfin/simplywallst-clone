import { Portfolio } from "./generic-types";
import { IPortfoliosList } from "./graphql-types";

export interface IPortfolioFacade {
  getPortfoliosList(): IPortfoliosList;
}

export class PortfolioFacade implements IPortfolioFacade {
  private readonly portfolios;

  constructor(portfolios: Portfolio[]) {
    this.portfolios = portfolios;
  }

  getPortfoliosList(): IPortfoliosList {
    return {
      portfolios: this.portfolios,
    };
  }
}
