import { ObjectId } from "mongodb"
import { DBname, GetCollection } from "./mongoConnect"
import { MenuType4All, MenuTypeFromDB1, TipsFromDBType, TipsOfDayType } from "../_lib/types"

export async function getTipDay() {
    const collection = await GetCollection(DBname, 'tips-of-day')
    const result = await collection.find().toArray() as TipsFromDBType[]
    return await Promise.all(result.map(async(el: TipsFromDBType) => ({...el, menu: await getMenuById(el.menu)}))) as TipsOfDayType[]
}

const getMenuById = async(array: ObjectId[]) => {
    const collection = await GetCollection(DBname, 'menu')
    const result = await collection.find({_id: {$in: array}}).toArray()
    return result
}

export async function getMenu(type: string) {
    const collection = await GetCollection(DBname, type)
    const result = await collection.find().toArray() as MenuTypeFromDB1[]
    return await Promise.all(result.map(async(el: MenuTypeFromDB1) => ({...el, menu: await getMenuById((el.menu))}))) as MenuType4All[]
}