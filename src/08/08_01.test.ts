import {usersType} from "./08_01";

let users: usersType

beforeEach(() => {
    users = {
        '12': {id: 12, name: 'Max'},
        '211': {id: 211, name: 'Jo'},
        '1': {id: 1, name: 'Bob'}
    }
})

test('should update corresponding user', () => {

    users['12'].name = 'Cat'

    expect(users['12'].name).toBe('Cat')
})
test('should delete corresponding user', () => {

    delete users['12']

    expect(users['12']).toBeUndefined()

})
