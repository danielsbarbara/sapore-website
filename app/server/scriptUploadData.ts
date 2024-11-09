import { getMenu } from "./mongoCRUD"

export const uploadData = async() => {
    const menu = await getMenu('entries')
    console.log(menu)

}

uploadData()