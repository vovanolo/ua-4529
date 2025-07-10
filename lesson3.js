// Debugging 
// Handling Exceptions

// Dubugging - виявлення і виправлення помилок у коді

// console.log("Debugging started");

// let a = 5;

// let b = 10;

// let c = a + b;

// console.log("Сума a і b: " + c);

// let d = c * 2;

// console.log("c * 2: " + d);

// let e = a + c + d;

// console.log("Сума a, c і d: " + e);


// console.log("Результат: " + e);




// let a = 5;

// let b = 10;

// let c = a + b;


// let d = c * 2;


// let e = a + c + d;
// // debugger;

// for(let i = 0; i < 10; i += 1) {
//     console.log("Цикл: " + i);
// }

// Syntax Error

// console.log(;

// Reference Error

// printUS();


// 
// try catch (error) {

// try{
//     console.log("Початок try блоку");
//     printUs();// Викликаємо функцію, яка не існує
//     console.log("Кінець try блоку");
// }catch (error) {
//     console.log('Блок Catch');
// }


// try{
//     console.log("Початок try блоку");
//     printUs();// Викликаємо функцію, яка не існує
//     console.log("Кінець try блоку");
// }catch (error) {
//     // console.log('Блок Catch');
//     // console.log( error);
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);



// }

// 

// new Error("Виникла яксь помилка")
// new TypeError("Помилка типу")
// new ReferenceError("Помилка посилання")
// new SyntaxError("Помилка синтаксису")
// new RangeError("Помилка діапазону")

// throw new Error("Це помилка, яку ми створили");

// class AgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try{
//     const age = prompt("Введіть ваш вік:");
//     if (isNaN(age)) {
//         throw new TypeError("Вік має бути числом");
//     }
//     if (age < 0 || age > 120) {
//         throw new RangeError("Вік має бути в діапазоні від 0 до 120");
//     }
//     console.log("Ваш вік:", age);
// }catch(error) {
//     console.error("Помилка:", error.message);
// }


// try{
//     const age = prompt("Введіть ваш вік:");
//     if (isNaN(age)) {
//         throw new AgeError("Вік має бути числом");
//     }
//     if (age < 0 || age > 120) {
//         throw new RangeError("Вік має бути в діапазоні від 0 до 120");
//     }
//     console.log("Ваш вік:", age);
// }catch(error) {
//     console.log(error.name);
//     console.error("Помилка:", error.message);

// }



// try{
//     console.log("Початок try блоку");
//     printUs(); // Викликаємо функцію, яка не існує
//     console.log("Кінець try блоку");
// }catch (error) {
//     console.log('Блок Catch');
// } finally{
//     console.log("finally block");
// }

// forEach, map, filter, reduce

// const students = ["Іван", "Марія", "Петро", "Олена"];


// students.forEach(function(student, index){
//     // console.log(student);
//     // console.log(index);
//     console.log("Індекс студента " + student + " дорівнює " + index);
// })

// students.map(function(student, index){
//     // console.log(student);
//     // console.log(index);
//     console.log("Індекс студента " + student + " дорівнює " + index);
// });

// let newStudents = students.map(function(student, index){
//     return student + 1;
// });

// console.log(newStudents);

// students.filter(function(student, index){
//     console.log("Індекс студента " + student + " дорівнює " + index);
// });

// let newStudents =  students.filter(function(student, index){
//     return student !== "Петро"; // Фільтруємо студентів, пропускаючи "Петро"
// });

// console.log(newStudents);


// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce(function(sum, number) {
//     return sum * number;
// }, 1);

// console.log(result); // Виведе 15, оскільки 1 + 2 + 3 + 4 + 5 = 15