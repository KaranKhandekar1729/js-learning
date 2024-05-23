// const TinderUser = new Object()
const TinderUser = {}

TinderUser.id = "123"
TinderUser.name = "Jules"
TinderUser.isLoggedIn = false

// console.log(TinderUser);

const RegularUser = {
    email: "julian@hotmail.com",
    fullname: {
        userfullname: {
            firstname: "Julian",
            lastname: "Rue"
        }
    }
}

// console.log(RegularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const anotherUser = [
    {
        id: 123,
        email: "k2@email.com"
    },
    {
        id: 34,
        email: "k11@email.com"
    },
    {
        id: 456,
        email: "k1@email.com"
    },
    {
        id: 134,
        email: "kk@email.com"
    }
]

// console.log(anotherUser);
anotherUser[1].email

// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

// console.log(TinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: 'js',
    courseInstructor: "hitesh",
    price: 999
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
