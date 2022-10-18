import {
    addNewBooksToUser, addNewCompany,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook,
    updateBooks, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from "./10_01";


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

test('change laptop', () => {
        let user: UserWithLaptopType & UserWithBooksType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            books: ['css', 'html', 'js']
        }
        let upgradeUser = moveUserToOtherHouse(user, 11)

        expect(user).not.toBe(upgradeUser)
        expect(user.books).toBe(upgradeUser.books)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).not.toBe(upgradeUser.address)
        expect(upgradeUser.address.house).toBe(11)
    }
)

test('add new books to user', () => {
        let user: UserWithLaptopType & UserWithBooksType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            books: ['css', 'html', 'js']
        }
        let upgradeUser = addNewBooksToUser(user, ['ts', 'restAPI'])

        expect(user).not.toBe(upgradeUser)
        expect(user.books).not.toBe(upgradeUser.books)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(upgradeUser.books[3]).toBe('ts')
        expect(upgradeUser.books[4]).toBe('restAPI')
        expect(user.books.length).toBe(3)
    }
)

test('update js to ts', () => {
        let user: UserWithLaptopType & UserWithBooksType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            books: ['css', 'html', 'js']
        }
        let upgradeUser = updateBooks(user, 'js', 'ts')

        expect(user).not.toBe(upgradeUser)
        expect(user.books).not.toBe(upgradeUser.books)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(user.books.length).toBe(3)
        expect(upgradeUser.books[2]).toBe('ts')
        expect(user.books[2]).toBe('js')
    }
)

test('remove JS book', () => {
        let user: UserWithLaptopType & UserWithBooksType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            books: ['css', 'html', 'js', 'react']
        }
        let upgradeUser = removeBook(user, 'js')

        expect(user).not.toBe(upgradeUser)
        expect(user.books).not.toBe(upgradeUser.books)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(user.books.length).toBe(4)
        expect(upgradeUser.books[2]).toBe('react')
        expect(user.books[2]).toBe('js')
    }
)

test('add new company', () => {
        let user: UserWithLaptopType & WithCompanyType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            companies: [{id: 1, title: 'Nokia'}, {id: 3, title: 'LG'}]
        }
        let upgradeUser = addNewCompany(user, {id: 3, title: 'NJK'})

        expect(user).not.toBe(upgradeUser)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(upgradeUser.companies.length).toBe(2)
    }
)

test('update company title', () => {
        let user: UserWithLaptopType & WithCompanyType = {
            name: 'Jo',
            hair: 10,
            address: {
                city: 'LA',
                house: 7
            },
            laptop: {
                title: 'ZenBook'
            },
            companies: [{id: 1, title: 'Nokia'}, {id: 3, title: 'LG'}]
        }
        let upgradeUser = updateCompanyTitle(user, 1, 'Samsung')

        expect(user).not.toBe(upgradeUser)
        expect(user.laptop).toBe(upgradeUser.laptop)
        expect(user.address).toBe(upgradeUser.address)
        expect(upgradeUser.companies.length).toBe(2)
        expect(upgradeUser.companies[0].title).toBe('Samsung')
    }
)

test('update company', () => {
        let companies = {
            'Max': [{id: 1, title: 'LG'}, {id: 2, title: 'GO'}],
            'Pitt': [{id: 1, title: 'GO'}]
        }
        let copyCompanies = updateCompanyTitle2(companies,
            'Max', 1, 'Google')
        expect(copyCompanies['Max']).not.toBe(companies['Max'])
        expect(copyCompanies['Max'][0].title).toBe('Google')
    }
)