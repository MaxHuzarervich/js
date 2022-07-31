import {governmentBuildingType, houseType} from "../02/02_02";


export const getStreetTitleOfGovernmentBuildings = (buildings: Array<governmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetTitleOfHouse = (houses: Array<houseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessageForStreet = (houses: Array<houseType>) => {
    return houses.map(s => `Hello guys from ${s.address.street.title}`)
}