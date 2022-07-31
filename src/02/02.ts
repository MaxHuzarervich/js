
export type studentType = {
    id: number
    age: number
    name: string
    address: addressType
    technologies: Array<technologiesType>
}

type addressType = {
    street: string
    city: localCityType
}

type localCityType = {
    titleCity: string
    index: number
}
type technologiesType = {
    id: number
    title: string
}

export const student: studentType = {
    id: 1,
    age: 32,
    name: 'Max',
    address: {
        street: 'Brestskaya',
        city: {
            titleCity: 'Pinsk',
            index: 225710
        }
    },
    technologies: [
        {id: 1, title: 'CSS'},
        {id: 2, title: 'HTML'},
        {id: 3, title: 'React'}
    ]
}
console.log(student.id)
console.log(student.address.city.titleCity)
console.log(student.technologies[1].title)