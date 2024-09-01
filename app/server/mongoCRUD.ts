import { DBname, GetCollection } from "./mongoConnect"

export async function getTipDay() {
    const collection = await GetCollection(DBname, 'tips-of-day')
    const result = await collection.find().toArray()
    return result
}