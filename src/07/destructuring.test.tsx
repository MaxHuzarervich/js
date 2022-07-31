import {ManType} from "./Destructuring";


let man: ManType;
beforeEach(() => {
    man = {
        name: 'John',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '45'}],
        address: {
            street: {
                title: 'BestStreet'
            }
        }
    }
})

test('', () => {

    // const name = man.name
    // const lessons = man.lessons

    const {name, lessons} = man
    const {title} = man.address.street
    expect(name).toBe('John')
    expect(lessons.length).toBe(3)
    expect(title).toBe('BestStreet')


    const n = man.name
    const l = man.lessons
    expect(n).toBe('John')
    expect(l.length).toBe(3)
})

test('', () => {
    // const l1 = man.lessons[0]
    // const l2 = man.lessons[1]

    const [l1, ,l3] = man.lessons

    expect(l1.title).toBe('1')
    // expect(l2.title).toBe('2')
    expect(l3.title).toBe('45')
})