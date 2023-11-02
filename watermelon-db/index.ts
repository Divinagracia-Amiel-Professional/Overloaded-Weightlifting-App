import getDatabasePath from "./get-database-path";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import sampleSchema from "./schema";
import sampleSchemaModelClass from "./model-class";


const DEFAULT_DATABASE_NAME = 'sample';

const promises: { [key: string]: Promise<Database> } = {};
const instances: { [key: string]: Database } = {};

async function init(dbName: string = DEFAULT_DATABASE_NAME) {
  const dbPath = await getDatabasePath(dbName);

  const adapter = new SQLiteAdapter({
    schema: sampleSchema,
    dbName: dbPath,
  });

  const instance = new Database({
    adapter,
    modelClasses: [ sampleSchemaModelClass ],
  });

  instances[dbName] = instance;
  // sync();
  return instance;
}

export const getDatabase = async (
    dbName: string = DEFAULT_DATABASE_NAME,
  ) => {
    if (!promises[dbName]) {
      promises[dbName] = init(dbName);
    }
    const instance = await promises[dbName];
    return instance;
  };

export const getDatabaseSync = (altDbName: string = DEFAULT_DATABASE_NAME) => {
    return instances[altDbName];
};
