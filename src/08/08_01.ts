export type usersType = {
    [key: string]: { id: number, name: string }
}

export const usersOne: usersType = {
    '12': {id: 12, name: 'Max'},
    '211': {id: 211, name: 'Jo'},
    '1': {id: 1, name: 'Bob'}
}

// usersOne[1]

let user = {id: 100500, name: 'Lol'}
usersOne[user.id] = user
delete usersOne[user.id]
usersOne[user.id].name = 'Victor'

export const usersArray = [
    {id: 12, name: 'Max'},
    {id: 211, name: 'Jo'},
    {id: 1, name: 'Bob'}
]

// usersArray.find(u => u.id === 1)


