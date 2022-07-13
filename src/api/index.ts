export function fetchDashboardData() {
  const ticker = "INGA";

  return {
    data: {
      header: {
        data: {
          ticker,
          name: "ING Groep",
          exchangeName: "ENXTAM",
          lastPrice: 9.42,
          marketCap: 35.3e9,
          priceLastSevenDays: -0.1,
          priceLastYear: -13.4,
          lastUpdated: new Date(2022, 6, 10),
        },
      },
      overview: {
        data: {
          ticker,
          description: `ING Groep N.V., a financial institution, provides various banking
            products and services in the Netherlands, Belgium, Germany,
            Poland, Rest of Europe, North America, Latin America, Asia, and
            Australia.`,
          rewards: [
            "Trading at 67% below our estimate of its fair value",
            "Earnings are forecast to grow 12.35% per year",
            "Earnings grew by 48.9% over the past year",
          ],
          risks: ["Unstable dividend track record"],
        },
      },
      history: {
        data: {
          news: [
            {
              date: new Date(2022, 5, 18),
              type: "Inbox",
              value:
                "ING Groep N.V. commences an Equity Buyback Plan, under the authorization approved on April 25, 2022.",
            },
            {
              date: new Date(2022, 4, 1),
              type: "Inbox",
              value:
                "First quarter 2022 earnings: EPS exceeds analyst expectations.",
            },
            {
              date: new Date(2022, 3, 7),
              type: "Inbox",
              value: "Upcoming dividend of €0.41 per share.",
            },
            {
              date: new Date(2022, 2, 1),
              type: "Inbox",
              value:
                "Boursorama Société Anonyme agreed to acquire Retail Banking Business of ING Groep NV in France from ING Groep N.V. (ENXTAM:INGA)",
            },
          ],
        },
      },
    },
  };
}
