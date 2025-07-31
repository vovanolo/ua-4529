// const func = function(){
//     console.log("hello guys");
// }

// const func = () => {
//     console.log("hello guys");
// }

// const func = (a,b) => {
//     console.log("hello guys" + a + b);
// }

// const sum = function(a,b) {
//     return a + b;
// }

// const sum = (a,b) => {
//     return a + b;
// }

// const sum = (a,b) => a + b;
// const sum = a => a ** 2;

// [1,3,4,5,6,7,8,97,45,6,77,88].map(function(number) {
//     return number + 1;
// })

// [1,3,4,5,6,7,8,97,45,6,77,88].map(number => number + 1)

// const numbers = [1,3,4,5,6,7,8,97,45,6,77,88];

// numbers.map(number => number + 1)
//        .filter(el => el > 6)   
//        .reduce((sum, el) => sum + el);

// const numbers = [1,3,4,5,6,7,8,97,45,6,77,88];

// const copyNumbers = [...numbers];


// function func(a,...arr){
//     // console.log(arguments);
//     console.log(a);
//     console.log(arr);
// }

// func(23,34,35,456,456,5,675,75)

// array object

// const numbers = [3.14, 200, 300, 400];

// const pi = numbers[0];

// const num = numbers[1]; 

// const [firstNumber, ...restNumbers] = numbers;

// console.log(firstNumber);
// console.log(restNumbers);

// const user = {
//     name: "Ivan",
//     // age: 33,
//     city: "NY",
// }

// const name = user.name;
// const {name, age = 100} = user;

// console.log(age);

// function func(a = 10){
//     console.log(a);
// }

// func();

// function func({name, age}){
//     // const {name, age} = obj
//     // console.log(a);
// }

// func( { name: "Ivan",age: 33, city: "NY"});