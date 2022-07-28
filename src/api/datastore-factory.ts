import { LocalDatastore } from "./local-datastore";
import { GenericDatastore } from "./data-types";

export class DatastoreFactory {
  private _datastore!: GenericDatastore;

  constructor() {
    this._datastore = new LocalDatastore();
  }

  getDatastore(): GenericDatastore {
    return this._datastore;
  }
}

export const datastoreFactory = new DatastoreFactory();
