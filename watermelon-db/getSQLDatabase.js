import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import sampleSchema from "./schema";
import sampleSchemaModelClass from "./model-class";
import migrations from "./migrations";
import getDatabasePath from "./get-database-path";

const getSQLDatabase = async(dbName) => {
    dbPath = await getDatabasePath(dbName)

    const adapter = SQLiteAdapter({
        schema: sampleSchema,
        dbName: dbPath,
        jsi: false,
    })

    const db = new Database({
        adapter,
        modelClasses: [sampleSchemaModelClass]
    })

    return db
}

export default getSQLDatabase