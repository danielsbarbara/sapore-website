import { ObjectId, WithId } from "mongodb";

//Mongo

export interface TipsFromDBType {
    _id: ObjectId
    day: {
        pt: string
        en: string
        fr: string
    }
    menu: ObjectId[]
}

export interface MenuSchema {
    _id: ObjectId
    menuType: string
    pt: { name: string, description: string }
    en: { name: string, description: string }
    fr: { name: string, description: string }
    price: string
    imageUrl: string
}

export interface TipsOfDayType {
    _id: ObjectId
    day: {
        pt: string
        en: string
        fr: string
    }
    menu: WithId<MenuSchema>[]
}

export interface TheMenuType {
    menuName: string,
    name: string,
    price: string,
    description: string,
    imageUrl: string
}

export interface MenuType {
    _id: ObjectId
    day: {
        pt: string
        en: string
        fr: string
    }
    menu: WithId<MenuSchema>[] | MenuSchema[]
}

//Page Menus Types

export interface MenuSchema1 {
    _id: ObjectId
    menuType: string
    menu: {
        _id: ObjectId
        menuType: string
        pt: { name: string, description: string }
        en: { name: string, description: string }
        fr: { name: string, description: string }
        price: string
        imageUrl: string
    }[]
}

export interface MenuTypeFromDB1 {
    _id: ObjectId
    pt: string
    en: string
    fr: string
    menu: ObjectId[]
}

export interface MenuType4All {
    _id: ObjectId
    pt: string
    en: string
    fr: string
    menu: MenuSchema1[]
}