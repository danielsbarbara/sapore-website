const { MongoClient } = require('mongodb')

const url: string = 'mongodb+srv://danielsantosbarbara:sapore2024@cluster0.5svdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export const DBname: string = 'sapore'

let client: any = undefined
async function GetMongoClient() {
    if (!client) {
        try {
            client = new MongoClient(url)
            await client.connect()
            console.log('⚡️ DB connections successfully! ⚡️')
        } catch (err) {
            console.log(err)
        }
    }
    return client
}

export async function GetCollection(dbName: string | undefined = DBname, collectionName: string | undefined) {
    const cli = await GetMongoClient()
    const db = await cli.db(dbName)
    return db.collection(collectionName)
}