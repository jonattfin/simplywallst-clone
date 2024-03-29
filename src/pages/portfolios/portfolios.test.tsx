import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { datastoreFactory } from "../../api/datastore-factory";

import {
  GET_PORTFOLIOS_QUERY,
  PortfoliosComponent,
  PortfoliosContainer,
} from "./portfolios";

beforeAll(() => {
  // we need to set this otherwise the graphs won't work in tests
  // more details here: https://github.com/ZeeCoder/use-resize-observer/issues/40
  global.ResizeObserver = require("resize-observer-polyfill");
});

const portfolioFacade = datastoreFactory.getDatastore().getPortfolioFacade();

describe("Portfolios components", () => {
  describe("Portfolios", () => {
    const data = {
      ...portfolioFacade.getPortfoliosList(),
    };

    it("PortfoliosComponent renders without error", async () => {
      render(
        <PortfoliosComponent
          {...{ data, createPortfolio: () => console.log("create portfolio") }}
        />
      );
      expect(
        await screen.findByText("Accel Partners (Usd)")
      ).toBeInTheDocument();
    });

    it("PortfoliosContainer renders without error", async () => {
      const mock = {
        request: {
          query: GET_PORTFOLIOS_QUERY,
        },
        result: { data },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
          <PortfoliosContainer />
        </MockedProvider>
      );

      expect(
        await screen.findByText("Accel Partners (Usd)")
      ).toBeInTheDocument();
    });
  });

  // describe("Portfolio Details", () => {
  //   const data = {
  //     portfolio: datastore.getPortfolioFacade().portfolios[0],
  //   };

  //   it("PortfoliosDetailsComponent renders without error", async () => {
  //     render(<PortfolioDetailsComponent {...{ data }} />);
  //     expect(await screen.findByText("Accel Partners is a USD portfolio that has returned 5.04% since inception.")).toBeInTheDocument();
  //   });

  //   it("PortfoliosDetailsContainer renders without error", async () => {
  //     const mock = {
  //       request: {
  //         query: GET_PORTFOLIO_DETAILS_QUERY,
  //       },
  //       result: {
  //         data,
  //       },
  //     };

  //     render(
  //       <MockedProvider mocks={[mock]} addTypename={false}>
  //         <PortfoliosContainer />
  //       </MockedProvider>
  //     );

  //     expect(await screen.findByText("Accel Partners")).toBeInTheDocument();
  //     expect(
  //       await screen.findByText(
  //         "Accel Partners is a USD portfolio that has returned 5.04% since inception."
  //       )
  //     ).toBeInTheDocument();
  //   });
  // });
});
