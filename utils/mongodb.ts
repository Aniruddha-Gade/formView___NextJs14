import { MongoClient, Db } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null


const uri: string = process.env.MONGODB_URI || ''
const dbName: string = process.env.MONGODB_DB || ''

if (!uri || !dbName) {
    throw new Error('Please define the MONGODB_URI and MONGODB_DB')
}


// Create the MongoDB connection
export async function connectToDatabase(): Promise<Db> {
    if (db) {
        // Return the database if already connected
        return db
    }

    if (!client) {
        client = new MongoClient(uri)
        await client.connect()
    }

    db = client.db(dbName)
    return db
}
