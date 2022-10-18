export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LapTopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LapTopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompanyType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUserToOtherHouse(u: UserWithBooksType & UserWithLaptopType,
                                     house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithBooksType & UserWithLaptopType,
                                  newBooks: Array<string>) {
    return {
        ...u,
        books: {
            ...u.books.concat(newBooks)
        }
    }
}

export function updateBooks(u: UserWithBooksType & UserWithLaptopType,
                            js: string, ts: string) {
    return {
        ...u,
        books: u.books.map(b => b === js ? ts : b)
    }
}

export function removeBook(u: UserWithBooksType & UserWithLaptopType,
                           bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompanyType,
                              company: { id: number, title: string }) {
    return {
        ...u,
        companies: [u.companies, company]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompanyType,
                                   id: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ?
            {...c, title: newTitle} : c)
    }
}


export function updateCompanyTitle2(
    companies:
        { [key:string]: Array<{ id: number, title: string }> },
    userName: string,
    companyID: number,
    companyTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id
    === companyID ? {...c, title: companyTitle} : c)
    return companyCopy
}