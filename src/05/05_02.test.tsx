import {createMessageForStreet, getStreetTitleOfGovernmentBuildings, getStreetTitleOfHouse} from "./05_02";
import {cityType} from "../02/02_02";

let city: cityType;

beforeEach(() => {
    city = {
        title: 'Pinsk',
        houses: [{
            id:1,
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            id:2,
            buildAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            id:3,
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

test('list of street title of government buildings', () => {
    const streetTitles = getStreetTitleOfGovernmentBuildings(city.governmentBuildings)

    expect(streetTitles.length).toBe(2)
    expect(streetTitles[0]).toBe('Central Str')
    expect(streetTitles[1]).toBe('South Str')
})

test('list of street title', () => {
    const streets = getStreetTitleOfHouse(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test('create greeting message for street', () => {
    let messages = createMessageForStreet(city.houses);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})