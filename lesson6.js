// BOM

// Events

// Browser Object Model

// window

// let number = 2;


// console.log(number)


// console.log(window);

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// window.open("http://www.google.com","","width=300, height=300,top=200,left=200");

// let newWindow = window.open("http://www.google.com","","width=300, height=300,top=200,left=200");

// newWindow.moveTo(400,400);

// // newWindow.resizeTo(500,500);

// setTimeout(function(){
//     // console.log("Hello guys");
//     //  newWindow.close();
//     newWindow.resizeTo(500,500);
// }, 2000);

// newWindow.close();


// Events


// function message(){
//     console.log("click from js");
// }


// const title = document.querySelector("#title");

// title.onclick = function(){
//     console.log('click click');
// }

// title.addEventListener("click", function(){
//     console.log("click from eventlistener");
// });

// title.addEventListener("dblclick", function(){
//     console.log("click from eventlistener");
// });

// title.addEventListener("mouseover", function(){
//     console.log("mouse over element");
// });


// function mouseEvent(){
//     console.log("mouse out element");
// }

// title.addEventListener("mouseout", mouseEvent);


// title.addEventListener("click", function(event){
//     // console.log(event);
//     console.log(event.type);

// })

// function titleClick(event){
//     // console.log("event is running");
//     if(event.type === 'click'){
//         console.log("click");
//     }
//     if(event.type === 'dblclick'){
//         console.log("dblclick");
//     }
// }

// title.addEventListener("click", titleClick);
// title.addEventListener("dblclick", titleClick);


// title.addEventListener("click", function(event){
//     // console.log(event);
//     // console.log(event.target);

//     event.target.style.color = 'red';

// })

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){
//     // title.style.color = 'red';
//     // title.classList.add("set-style");
// })

// const myform = document.forms.register;

// const greeting = document.querySelector(".greeting");
// console.log(greeting);


// console.log(myform);

// myform.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Form was submitted");
//     // console.log(event.target);
//     const login = event.target.elements.login.value;
//     const password = event.target.elements.password.value
//     // console.log(login);
//     // console.log(password);



// })

// myform.addEventListener("submit", function(event){
//     event.preventDefault();
//     const login = event.target.elements.login.value;
//     const password = event.target.elements.password.value
    
//     greeting.innerHTML += `<h1>Hello ${login}, your password: ${password}</h1>`;


// })


