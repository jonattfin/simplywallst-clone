import { WatchlistComponent } from "./watchlist";
import { datastoreFactory } from "../../api/datastore-factory";

const datastore = datastoreFactory.getDatastore();

export default function Index() {
  return <div></div>;
}

export const WatchlistInstance = () => {
  return (
    <WatchlistComponent
      {...{
        data: datastore.getWatchlistCompanies(),
      }}
    />
  );
};
