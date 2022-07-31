test('should take old men older then 90', () => {
    const ages = [20, 40, 100, 50, 1, 120, 45]
    const oldAges = ages.filter(ages => ages > 90)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
})

test('chip courses < 200', () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'HTML', price: 199},
        {title: 'React', price: 299},
        {title: 'JS', price: 499}
    ]

    const chipCourses = courses.filter(course => course.price < 200)
    expect(chipCourses.length).toBe(2)
    expect(chipCourses[1].price).toBe(199)
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, name: 'HTML', isDone: true},
        {id: 2, name: 'CSS', isDone: false},
        {id: 3, name: 'React', isDone: true},
        {id: 4, name: 'JS', isDone: false},
        {id: 5, name: 'TS', isDone: true},
    ]
    const completedTasks = tasks.filter(task => task.isDone)
    expect(completedTasks.length).toBe(3)
    expect(completedTasks[0].name).toBe('HTML')
})

test('get only no completed tasks', () => {
    const tasks = [
        {id: 1, name: 'HTML', isDone: true},
        {id: 2, name: 'CSS', isDone: false},
        {id: 3, name: 'React', isDone: true},
        {id: 4, name: 'JS', isDone: false},
        {id: 5, name: 'TS', isDone: true},
    ]
    const completedTasks = tasks.filter(task => !task.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].name).toBe('CSS')
})