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

export function makeHairStyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
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