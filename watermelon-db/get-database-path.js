import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'


async function getDatabasePath(dbName){
    let dbPath = `${FileSystem.documentDirectory}/watermelon-db/${dbName}`;

    const doesExist = await FileSystem.getInfoAsync(dbPath.concat(".db"));
    if(!doesExist){
        try{
            await FileSystem.downloadAsync(
                Asset.fromModule(require(`./${dbName}.db`)).uri,
                dbPath.concat(".db")
                );
        } catch(e){
            console.log(">>> getDatabasePath Error", e);
        }
    }

    return dbPath
}

export default getDatabasePath