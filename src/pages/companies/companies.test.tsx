import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

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
import { GET_COMPETITORS_QUERY } from "./components/competitors";
import { GET_DIVIDENDS_QUERY } from "./components/dividend";
import { GET_OWNERSHIP_QUERY } from "./components/ownership";
import { GET_OVERVIEW_QUERY } from "./components/overview";
import { GET_NEWS_QUERY } from "./components/history";
import { GET_FUNDAMENTALS_QUERY } from "./components/fundamentals";
import { GET_FINANCIAL_HEALTH_QUERY } from "./components/financial-health";

beforeAll(() => {
  // we need to set this otherwise the graphs won't work in tests
  // more details here: https://github.com/ZeeCoder/use-resize-observer/issues/40
  global.ResizeObserver = require("resize-observer-polyfill");
});

const companyFacade = datastoreFactory.getDatastore().getCompanyFacade();

describe("Companies components", () => {
  describe("Company", () => {
    it("CompanyComponent renders without error", () => {
      const { getByText } = render(<Company.CompanyComponent sectionName="" />);
      expect(getByText("About the Company")).toBeInTheDocument();
    });
  });

  describe("Competitors", () => {
    it("CompetitorsComponent renders without error", () => {
      const { getByText } = render(
        <Competitors.CompetitorsComponent
          {...{ data: companyFacade.getCompetitors() }}
        />
      );
      expect(getByText("ING Groep Competitors")).toBeInTheDocument();
    });

    it("CompetitorsContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_COMPETITORS_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getCompetitors(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Competitors.CompetitorsContainer />
        </MockedProvider>
      );

      expect(
        await screen.findByText("ING Groep Competitors")
      ).toBeInTheDocument();
    });
  });

  describe("Dividend", () => {
    it("DividendComponent renders without error", () => {
      const { getByText } = render(
        <Dividend.DividendComponent
          sectionName=""
          {...{ data: companyFacade.getDividend() }}
        />
      );
      expect(getByText("Dividend")).toBeInTheDocument();
    });

    it("DividendContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_DIVIDENDS_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getDividend(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Dividend.DividendContainer sectionName="" />
        </MockedProvider>
      );

      expect(await screen.findByText("Dividend")).toBeInTheDocument();
    });
  });

  describe("Financial Health", () => {
    it("FinancialHealthComponent renders without error", () => {
      const { getByText } = render(
        <FinancialHealth.FinancialHealthComponent
          sectionName=""
          {...{ data: companyFacade.getFinancialHealth() }}
        />
      );
      expect(getByText("Financial Health")).toBeInTheDocument();
    });

    it("FinancialHealthContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_FINANCIAL_HEALTH_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getFinancialHealth(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <FinancialHealth.FinancialHealthContainer sectionName="" />
        </MockedProvider>
      );

      expect(await screen.findByText("Financial Health")).toBeInTheDocument();
    });
  });

  describe("Fundamentals", () => {
    it("FundamentalsComponent renders without error", () => {
      const { getByText } = render(
        <Fundamentals.FundamentalsComponent
          sectionName=""
          {...{ data: companyFacade.getFundamentals() }}
        />
      );
      expect(getByText("ING Groep Fundamentals Summary")).toBeInTheDocument();
    });

    it("FundamentalsContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_FUNDAMENTALS_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getFundamentals(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Fundamentals.FundamentalsContainer sectionName="" />
        </MockedProvider>
      );

      expect(
        await screen.findByText("ING Groep Fundamentals Summary")
      ).toBeInTheDocument();
    });
  });

  describe("History", () => {
    it("HistoryComponent renders without error", () => {
      const { getByText } = render(
        <History.HistoryComponent
          sectionName=""
          {...{ data: companyFacade.getHistory() }}
        />
      );
      expect(getByText("Price History & Performance")).toBeInTheDocument();
    });

    it("HistoryContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_NEWS_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getHistory(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <History.HistoryContainer sectionName="" />
        </MockedProvider>
      );

      expect(
        await screen.findByText("Price History & Performance")
      ).toBeInTheDocument();
    });
  });

  describe("Overview", () => {
    it("OverviewComponent renders without error", () => {
      const { getByText } = render(
        <Overview.OverviewComponent
          sectionName=""
          {...{ data: companyFacade.getOverview() }}
        />
      );
      expect(getByText("About the company")).toBeInTheDocument();
    });

    it("OverviewContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_OVERVIEW_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getOverview(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Overview.OverviewContainer sectionName="" />
        </MockedProvider>
      );

      expect(await screen.findByText("About the company")).toBeInTheDocument();
    });
  });

  describe("Ownership", () => {
    it("OwnershipComponent renders without error", () => {
      const { getByText } = render(
        <Ownership.OwnershipComponent
          sectionName=""
          {...{ data: companyFacade.getOwnership() }}
        />
      );
      expect(
        getByText(
          "Who are the major shareholders and have insiders been buying or selling?"
        )
      ).toBeInTheDocument();
    });

    it("OwnershipContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_OWNERSHIP_QUERY,
        },
        result: {
          data: {
            ...companyFacade.getOwnership(),
          },
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Ownership.OwnershipContainer sectionName="" />
        </MockedProvider>
      );

      expect(
        await screen.findByText(
          "Who are the major shareholders and have insiders been buying or selling?"
        )
      ).toBeInTheDocument();
    });
  });
});
