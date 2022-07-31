

export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name:'Fill Link', age: 33},
    {name:'Bob Guess', age: 32},
    {name: 'Jimmy Carry', age: 35}
]

export const Transform = (man: ManType) => {
    return {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'React'],
        firstName: man.name.split(' ')[0],
        lastname: man.name.split(' ')[1]
    }
}

const devs = [
    Transform(people[0]),
    Transform(people[1]),
    Transform(people[2])
]
 const devs2 = [
     people.map((man) => {
         return <ul>
             <li>{man.name}</li>
             <li>{man.age}</li>
         </ul>
     })
 ]

export const messages = people.map((man) => {`Hello, ${man.name.split(' ')[0]} welcome to city`})

export const createGreetingMessage = (people: Array<ManType>) => {
   return people.map(man => `Hello, ${man.name.split(' ')[0]} welcome to city`)
}