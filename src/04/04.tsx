const ages = [20, 40, 100, 50, 1, 120, 45]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type coursesType = {
    title: string
    price: number
}


const courses = [
    {title: 'CSS', price: 100},
    {title: 'HTML', price: 199},
    {title: 'React', price: 299},
    {title: 'JS', price: 499}
]

const chipPredicate = (courses: coursesType) => {
    return courses.price < 200
}

const chipCourses = [
    {title: 'CSS', price: 100},
    {title: 'HTML', price: 199},
]