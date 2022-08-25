function increaseAge(user:userType){
    user.age++
}

type userType = {
    name: string
    age: number
    address: {title:string}
}

test('object test', () => {

    let user:userType = {
        name: 'Li',
        age: 21,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(22)

    let superMan = user

    superMan.age = 111

    expect(user.age).toBe(111)

})

test('array test', () => {
    let users = [
        {name: 'Lukas', age: 21},
        {name: 'Bob', age: 12}
    ]

    let superUsers = users

    superUsers.push({name:'Golang', age: 32})

    expect(users.length).toBe(3)
})

test('value type test', () => {
    let number = 100

    let number2 = number + 1

    expect(number).toBe(100)
    expect(number2).toBe(101)
})

test('reference type test', () => {

    let user:userType = {
        name: 'Li',
        age: 21,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2 = {
        name: 'Nata',
        age: 21,
        address: addr
    }

    user2.address.title = 'Miami'

    expect(user.address.title).toBe('Miami')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user1:userType = {
        name: 'Manny',
        age: 21,
        address: address
    }
    let user2:userType = {
        name: 'Josh',
        age: 32,
        address: address
    }

    const users = [user1, user2, {name: 'Mo', age: 43, address: address}]

    const admins = [user1, user2]

    admins[0].name = 'Garry'

    expect(users[0].name).toBe('Garry')

    expect(user1.name).toBe('Garry')
})