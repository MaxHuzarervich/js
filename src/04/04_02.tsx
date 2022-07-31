import {cityType, governmentBuildingType} from "../02/02_02";


export function demolichHousesOnTheStreet(city: cityType, street: string) {
city.houses = city.houses.filter(city => city.address.street.title !== street)
}
export function getBuildingsWithStaffCountGreaterThen(buildings: Array<governmentBuildingType>, number: number){
return buildings.filter(buildings => buildings.staffCount > number)
}

