import {studentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeMaximus} from "./03";


let student: studentType;

beforeEach(() => {
    student = {
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
})

test('new skill should be added', () => {
    addSkill(student, 'TypeScript')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('TypeScript')
})

test('student should be made active', () => {
    expect(student.name).toBe('Max')
    makeMaximus(student, 'Maximus')
    expect(student.name).toBe('Maximus')
})

test('student should be live in', () =>{
    let result1 = doesStudentLiveIn(student,'Moscow')
    let result2 = doesStudentLiveIn(student, 'Pinsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})