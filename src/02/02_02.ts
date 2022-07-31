export type cityType = {
    id?:number
    title: string
    houses: Array<houseType>
    governmentBuildings: Array<governmentBuildingType>
    citizensNumber: number
}
export type houseType = {
    id?:number
    buildAt: number
    repaired: boolean
    address: addressType
}
type addressType = {
    number: number
    street: streetType
}
type streetType = {
    title: string
}
type addressGovernmentType = {
    street: titleType
}
type titleType = {
    title: string
}
export type governmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: addressGovernmentType
}