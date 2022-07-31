import {createGreetingMessage, ManType, messages} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name:'Fill Link', age: 33},
        {name:'Bob Guess', age: 32},
        {name: 'Jimmy Carry', age: 35}
    ]
})

test('Should get array of greeting messages', () => {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello, Fill welcome to city')
    expect(messages[1]).toBe('Hello, Bob welcome to city')
    expect(messages[2]).toBe('Hello, Jimmy welcome to city')
})