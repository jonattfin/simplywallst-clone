import { WatchlistComponent } from "./watchlist";

import { datastoreFactory } from "../../api/datastore-factory";

const datastore = datastoreFactory.getDatastore();

export function WatchlistContainer() {
  const data = datastore.getWatchlistCompanies();
  return <WatchlistComponent {...{ data }} />;
}
