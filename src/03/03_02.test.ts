import {cityType} from "../02/02_02";
import {addMoneyToBudget, addStaff, createMessage, increaseStaff, repairHouse} from "./03";

export let city: cityType;

beforeEach(() => {
    city = {
        title: 'Pinsk',
        houses: [{
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            buildAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            buildAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {title: 'Central Str'},
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {title: 'South Str'}
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for Fair-Station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -200000)
    expect(city.governmentBuildings[1].budget).toBe(300000)
})

test('House should be repaired', () => {
    expect(city.houses[0].repaired).toBe(false)
    repairHouse(city.houses[0])
    expect(city.houses[0].repaired).toBe(true)
})

test('staff should be increased', () => {
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    increaseStaff(city.governmentBuildings[0], 10)
    expect(city.governmentBuildings[0].staffCount).toBe(190)
})

test('staff should be added', () => {
    addStaff(city.governmentBuildings[1], 35)
    expect(city.governmentBuildings[1].staffCount).toBe(1035)
})

test('Greeting message should be correct for city', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello Pinsk citizens. I want you be happy. All 1000000 men.')
})