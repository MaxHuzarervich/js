import {multiply, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    //action
    const result = sum(a,b)
    //expect result
    expect(result).toBe(3)
})
test('multiply should be correct', () => {
    let a = 2;
    let b = 3;
    const result = multiply(a,b);
    expect(result).toBe(6)
})
test('splitting into words should be correct', () => {
    //data
    let sent1 = 'Hello my friend!';
    let sent2 = 'JS - the best programming language.'
    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)
    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})