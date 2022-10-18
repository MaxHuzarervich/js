import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10_01";


test('test', () => {
        let user: UserType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            }
        }
        let awesomeUser = makeHairStyle(user, 2)

        expect(awesomeUser.hair).toBe(5)
        expect(user.hair).toBe(10)
        expect(user.address).toBe(awesomeUser.address)
    }
)
test('change address', () => {
        let user: UserWithLaptopType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            }
        }
        let movedUser = moveUser(user, 'Miami')

        expect(user).not.toBe(movedUser)
        expect(user.address).not.toBe(movedUser.address)
        expect(user.laptop).toBe(movedUser.laptop)
        expect(movedUser.address.city).toBe('Miami')
    }
)

test('change laptop', () => {
        let user: UserWithLaptopType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            }
        }
        let upgradeUser = upgradeUserLaptop(user, 'MacBook')

        expect(user).not.toBe(upgradeUser)
        expect(user.laptop).not.toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(upgradeUser.laptop.title).toBe('MacBook')
    }
)