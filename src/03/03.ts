import {studentType} from "../02/02";
import {cityType, governmentBuildingType, houseType} from "../02/02_02";
import {city} from "./03_02.test";

const sum = (a: number, b: number) => {
    return a + b
}
const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: studentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}
export const makeMaximus = (student: studentType, name: string) => {
    student.name = name
}
export const doesStudentLiveIn = (student: studentType, city: string) => {
    return student.address.city.titleCity === city
}
export const addMoneyToBudget = (governmentBuilding: governmentBuildingType, budget: number) => {
    governmentBuilding.budget += budget;
}
export const repairHouse = (house: houseType) => {
    house.repaired = true
}
export const increaseStaff = (governmentBuilding: governmentBuildingType, staffCountToDelete: number) => {
    governmentBuilding.staffCount -= staffCountToDelete
}
export const addStaff = (governmentBuilding: governmentBuildingType, staffCountToHire: number) => {
    governmentBuilding.staffCount += staffCountToHire
}
export const createMessage = (city: cityType) => {
    // return 'Hello ' + city.title + ' citizens. I want you be happy. All ' + city.citizensNumber + ' men.'
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}