// умови

// if else

// switch case


// if(умова){

// }

// let age = 35;


// if (age >= 18) {
//     console.log("Ви повнолітній");
// }

// if (age >= 18) {
//     console.log("Ви повнолітній");
// } else {
//     console.log("Ви неповнолітній");
// }

// if (age >= 20 && age < 30) {
//     console.log("Ви повнолітній і вам від 20 до 30 років");
// } else {
//     console.log("вам не від 20 до 30 років");
// }


// if (age >= 20 && age < 30) {
//     console.log("Ви повнолітній і вам від 20 до 30 років");
// }  else if (age >= 30 && age < 40) { 
//     console.log("Ви повнолітній і вам від 30 до 40 років");
// } else if (age >= 40 && age < 50) {
//     console.log("Ви повнолітній і вам від 40 до 50 років");
// } else {
//     console.log("Ви не вказали свій вік або вік не відповідає жодній категорії");
// }

// switch case


// let age = 35;

// switch(age) {
//     case 35:  age === 35
//         console.log("Вам 35 років");
//         break;
//     case 30:
//         console.log("Вам 30 років");
//         break;
//     case 25:
//         console.log("Вам 25 років");
//         break;
//     default:
//         console.log("Ви не вказали свій вік або вік не відповідає жодній категорії");
//         break;
// }

// let age = 25;


// switch(true) {
//     case age >=20 && age < 30: 
//         console.log("Ви повнолітній і вам від 20 до 30 років");
//         break;
// }

// масиви

// const students = ["Іван" - 0, "Марія" - 1, "Петро" - 2, "Олена" - 3];



// const students = ["Іван", "Марія", "Петро", "Олена"];

// console.log(students[1]);
// console.log(students);


// students[1] = "Анна"; // зміна значення в масиві

// students[4] = "Олександр"; // додавання нового елемента в масив

// students[8] = "Олег"; // додавання нового елемента в масив, пропуски заповняться undefined
// console.log(students[7]);

// console.log(students);

// console.log(students.length);



// console.log(students[6]); // "Іван"



// const students = ["Іван", "Марія", "Петро", "Олена"];


// // push - додає елемент в кінець масиву

// students.push("Олександр", "Олег");

// students.pop(); // видаляє останній елемент масиву

// students.unshift("Анна"); // додає елемент на початок масиву

// students.shift(); // видаляє перший елемент масиву
// console.log(students); 

// students.splice(1, 0, "Анна", "Олег"); // видаляє 2 елементи з 1 позиції і додає нові

// // console.log(students.slice(1, 3)); // ["Марія", "Петро"] - отримує частину масиву з 1 по 3 елемент (не включно)

// console.log(students); // ["Іван", "Марія", "Петро", "Олена", "Олександр"]

// цикли

// while for

// while(умова) {
//     // код, який виконується, поки умова істинна
// }

// let i = 0;

// while (i <= 5){
//     console.log(i);
//     i += 1;
// }

// for(let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// for(let i = 10; i >= 0; i -= 1) {
//     console.log(i);
// }

// break
// continue

// for(let i = 0; i <= 10; i += 1) {
//     console.log(i);
//     if (i === 5) {
//         console.log("Зупинка на 5");
//         break; // вихід з циклу, коли i дорівнює 5
//     }
// }

// for(let i = 0; i <= 10; i += 1) {
//     if (i === 5) {
//         // console.log("Пропуск 5");
//         continue; // пропуск ітерації, коли i дорівнює 5
//     }
//     console.log(i);
// }


// const students = ["Іван", "Марія", "Петро", "Олена"];

// for (let i = 0; i < students.length; i += 1) {
//     console.log(students[i]);
// }

// for (let i = 0; i < students.length; i += 1) {
//     console.log(students[i]);
//     if (students[i] === "Петро") {
//         console.log("Знайдено студента Петро");
//         break; // вихід з циклу, коли знайдено студента Петро
//     }
// }

// for (let i = 0; i < students.length; i += 1) {
//     if (students[i] === "Петро") {
//         console.log("Пропускаємо студента Петро");
//         continue; // пропуск ітерації, коли знайдено студента Петро
//     }
//     console.log(students[i]);
// }

// for of

// for(const student of students){
//     console.log(student);
// }

// for(const i in students){
//     console.log(students[i]);
// }


// function

// function назваФункції(параметри) {

//     // код функції}

// function sayHello(){
//     console.log("Привіт, світ!");
// }

// function sayHello(){
//     return "Привіт, світ!";
// }

// let result = sayHello(); // виклик функції і збереження результату в змінну

// console.log(result); // виклик функції


// function addNumbers(a, b) {
//     let result = a + b;
//     return result; // повертаємо результат
// }

// console.log(addNumbers(5, 10));

// console.log(addNumbers(10, 30));


// function addNumbers() {
//     // console.log(arguments);
//     let sum = 0; // змінна для збереження суми
//     for (let i = 0; i < arguments.length; i += 1) {
//         sum += arguments[i]; // додаємо кожен аргумент до суми
//     }
//     return sum; // повертаємо суму
// }

// // console.log(addNumbers(5, 10, 23,5,6,7,8,5,4,2,4,5,6,7));

// console.log(addNumbers(5, 10, 23,4,5,6,4,3,3,5,6,5,6,7,8,5,4,2,4,5,6,7));


// console.log(addNumbers(10, 30));

// function declaration
// function expression

// declaration(); 

// // expression(); // виклик функції оголошеної через declaration

// console.log(a); // 10

// const a = 10;

// function declaration(){
//     console.log("function declaration");
// }

// const expression = function() {
//     console.log("function expression");
// }

// виклик функції оголошеної через expression
