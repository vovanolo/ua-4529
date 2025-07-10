// Objects
// OOP

// 
// {  // Object Literal}
// const user = {
//     key: value
// }

// const user = {
//     key: value // властивість
// }

// const user = {
//     name: "John",
//     age: 30,
//     surname: "Doe",
//     city: "Kyiv",
//     wife: {
//         name: "Jane",
//         age: 28
//     },
//     // friends: ["Alice", "Bob", "Charlie"]
//     friends:[{
//         name: "Alice",
//         age: 29
//     }, {
//         name: "Bob",
//         age: 31
//     }, {
//         name: "Charlie",
//         age: 27
//     }]
    
// }


// console.log(user);
// console.log(user.name);
// console.log(user.age);

// console.log(user);

// user.name = "Jane"; // зміна властивості
// user.age = 25; // зміна властивості
// user.street = "Main St"; // додавання нової властивості

// delete user.surname; // видалення властивості

// console.log(user);


// console.log(user.wife.name)
// console.log(user.friends[0])

// console.log(user.friends[0].name);


// console.log(user.friends);

// for (let friend of user.friends){
//     console.log(friend.name);
// }


// const user = {
//     name: "John",
//     age: 30,
//     surname: "Doe",

//     greeting: function(){
//         console.log("Привіт, мене звати  " + this.name);
//     }
    
// }

// user.greeting();

// function User(username, userage, usersurname){
//     this.name = username;
//     this.age = userage;
//     this.surname = usersurname;
// }

// const user1 = new User("John", 30, "Doe");

// console.log(user1);

// EcmaScript 6
// Javascript v1


// class

// class User {
//     constructor(username, userage, usersurname){
//         this.name = username;
//         this.age = userage;
//         this.surname = usersurname;
//     }

//     greeting() {
//         console.log("Привіт, мене звати " + this.name);
//     }
// }

// const user1 = new User("John1", 30, "Doe");
// const user2 = new User("John2", 30, "Doe");
// const user3 = new User("John3", 30, "Doe");
// const user4 = new User("John4", 30, "Doe");
// const user5 = new User("John5", 30, "Doe");


// // console.log(user1);
// user1.greeting();
// user2.greeting();
// user3.greeting();
// user4.greeting();
// user5.greeting();

// OOP principles
// Encapsulation - інкапсуляція
// Inheritance - наслідування
// Polymorphism - поліморфізм


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }

//     run(){
//         console.log(`${this.name} runs at a speed of ${this.speed} km/h.`);
//     }

//     speak(){
//         super.speak();
//         console.log(`${this.name} barks.`);
//     }
// }

// const dog1 = new Dog("Rex", 5, 20);

// console.log(dog1);

// dog1.speak();
// dog1.run();


// public, private, protected


// class User {
//     #salary; // private property

//     constructor(username, userage, usersurname, userSalary) {
//         this.name = username;
//         this.age = userage;
//         this.surname = usersurname;
//         this.#salary = userSalary; // private property
//     }

//     get salary(){
//         return this.#salary; // getter for private property
//     }

//     set salary(newSalary){
//         if (newSalary < 0) {
//             console.error("Зарплата не може бути від'ємною");
//         }
//         else {
//             this.#salary = newSalary; // setter for private property
//         }
//     }

//     greeting() {
//         console.log("Привіт, мене звати " + this.name);
//     }
// }


// const user1 = new User("John1", 30, "Doe", 5000);
// // user1.#salary = 6000; // Error: Cannot assign to private property
// console.log(user1.salary);

// user1.salary = -110;

// console.log(user1.salary);



// console.log(user1.#salary); // undefined, private property is not accessible;

// getter and setter