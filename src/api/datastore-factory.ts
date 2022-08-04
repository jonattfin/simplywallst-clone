import { IDatastore } from "./interfaces";
import { LocalDatastore } from "./local-datastore";

export class DatastoreFactory {
  private _datastore!: IDatastore;

  constructor() {
    this._datastore = new LocalDatastore();
  }

  getDatastore(): IDatastore {
    return this._datastore;
  }
}

export const datastoreFactory = new DatastoreFactory();
