import { head } from "lodash";
import { Company } from "./generic-types";
import {
  ICompaniesList,
  ICompanyCompetitors,
  ICompanyDividend,
  ICompanyFinancialHealth,
  ICompanyFundamentals,
  ICompanyHeader,
  ICompanyHistory,
  ICompanyOverview,
  ICompanyOwnership,
} from "./graphql-types";

export interface ICompanyFacade {
  getCompetitors(): ICompanyCompetitors;
  getDividend(): ICompanyDividend;
  getFinancialHealth(): ICompanyFinancialHealth;
  getFundamentals(): ICompanyFundamentals;
  getHeader(): ICompanyHeader;
  getHistory(): ICompanyHistory;
  getOverview(): ICompanyOverview;
  getOwnership(): ICompanyOwnership;

  getCompanies(): ICompaniesList;
}

export class CompanyFacade implements ICompanyFacade {
  private readonly companies: Company[];

  constructor(companies: Company[]) {
    this.companies = companies;
  }

  getCompanies(): ICompaniesList {
    return {
      companies: this.companies.map((c, index) => {
        return {
          id: index + 1,
          name: c.name,
          snowflakeValueJson: c.snowflakeValueJson,
          stocks: c.stocks.map((s) => ({
            lastPrice: s.lastPrice,
            fairValue: s.lastPrice,
            priceSevenDays: s.priceSevenDays,
            priceOneYear: s.priceOneYear,
            priceHistoryJson: s.priceHistoryJson,
          })),
          news: c.news,
        };
      }),
    };
  }

  getCompetitors(): ICompanyCompetitors {
    const { name, competitors } = this.getCompany();

    return {
      company: {
        name,
        competitors: competitors.map((c) => {
          return {
            name: c.name,
            snowflakeValueJson: c.snowflakeValueJson,
            stocks: c.stocks.map((s) => ({ marketCap: s.marketCap })),
          };
        }),
      },
    };
  }
  getDividend(): ICompanyDividend {
    const { name, stocks } = this.getCompany();

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getFinancialHealth(): ICompanyFinancialHealth {
    const { name, stocks } = this.getCompany();

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getFundamentals(): ICompanyFundamentals {
    const { name, radialBarValueJson } = this.getCompany();

    return {
      company: {
        name,
        radialBarValueJson,
      },
    };
  }
  getHeader(): ICompanyHeader {
    const { name, stocks } = this.getCompany();

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getHistory(): ICompanyHistory {
    const { news, stocks } = this.getCompany();

    return {
      company: {
        news,
        stocks,
      },
    };
  }
  getOverview(): ICompanyOverview {
    const { name, description, snowflakeValueJson, rewards, risks, stocks } =
      this.getCompany();

    return {
      company: {
        name,
        description,
        snowflakeValueJson,
        rewards,
        risks,
        stocks,
      },
    };
  }
  getOwnership(): ICompanyOwnership {
    const { name, stocks } = this.getCompany();

    return {
      company: {
        name,
        stocks,
      },
    };
  }

  private getCompany(): Company {
    return this.companies[0];
  }
}
