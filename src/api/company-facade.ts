import { Company } from "./generic-types";
import {
  ICompanyCompetitors,
  ICompanyDividend,
  ICompanyFinancialHealth,
  ICompanyFundamentals,
  ICompanyHeader,
  ICompanyHistory,
  ICompanyOverview,
  ICompanyOwnership,
} from "./graphql-types";
import { ICompanyFacade } from "./interfaces";

export class CompanyFacade implements ICompanyFacade {
  private readonly company;

  constructor(company: Company) {
    this.company = company;
  }

  getCompetitors(): ICompanyCompetitors {
    const { name, competitors } = this.company;

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
    const { name, stocks } = this.company;

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getFinancialHealth(): ICompanyFinancialHealth {
    const { name, stocks } = this.company;

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getFundamentals(): ICompanyFundamentals {
    const { name, radialBarValueJson } = this.company;

    return {
      company: {
        name,
        radialBarValueJson,
      },
    };
  }
  getHeader(): ICompanyHeader {
    const { name, stocks } = this.company;

    return {
      company: {
        name,
        stocks,
      },
    };
  }
  getHistory(): ICompanyHistory {
    const { news, stocks } = this.company;

    return {
      company: {
        news,
        stocks,
      },
    };
  }
  getOverview(): ICompanyOverview {
    const { name, description, snowflakeValueJson, rewards, risks, stocks } =
      this.company;

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
    const { name, stocks } = this.company;

    return {
      company: {
        name,
        stocks,
      },
    };
  }
}
