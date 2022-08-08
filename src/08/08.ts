const student = {
    name: 'Josh',
    age: 32,
    city: {
        address: {
            title: 'Minsk'
        }
    }
}
student.city.address.title
student['city']['address']['title']

const users = ['low','middle','high']
users['map'](e => e.toUpperCase())
users['filter'](e => e === 'low')
users['find'](e => e[0] === 'm')

const obj = {
    '1':'2',
    '2':'3',
    '3':'3'
}
obj['1']
obj["1"]

const obj2 = {
    '1': 'Polly',
    '2': 'Jimmy',
    '3': 'Anabel'
}
