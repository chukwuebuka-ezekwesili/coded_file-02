document.getElementById("test1").innerHTML = "Hello World!";

document.getElementById("test2").style.color = "red";

document.getElementById("test3").src = "images/ocean.jpg";

function myFunction(){
    document.getElementById("test4").style.fontSize = "40px";
}

function functionTwo(){

    document.getElementById("test5").innerHTML = "Thank you for visiting out Page!";
}

function calcSum(a, b){

    return a + b;
}

document.getElementById("test6").innerHTML = calcSum(12, 3);

function functionOne(){
    document.getElementById("test12").style.display = "block";
}

function myFunctionTwo(){

    document.getElementById("test14").style.fontSize = "40px";
    alert("This is the function call!");
}

var num10 = 12;
// here the value of num10 is 12


{

    var num10 = 24;

    // here the value of num10 is 24
}

// here the value of num10 is 24

let num11 = 23;

// here the value of num11 is 23

{

    let num11 = 56;
    // here the value of num11 is 56
}

// here the value of num11 is 23

var firstName = "John";

var firstName = "Mary";

var firstName = "Lisa";


let lastName = "Doe";

// let lastName;

const PI = 3.141567;

// const PI;

// here the value of PI is 3.141567

{

    const PI = 12.234;

    //here the value of PI is 12.234
}

// here the value of PI is 3.141567

let condt = false;

let cars = ["Toyota", "Fiat", "Volvo", "Nissan"];
cars[0];

document.getElementById("test15").innerHTML = cars.length;
document.write(cars[2]);


cars.push("BMW");
// cars.pop();
cars.shift();
cars.unshift("Audi");
console.log(cars[3]);

let text = "";

for(let i=0; i<cars.length;i++) {

   text += "<br>" + cars[i] + "<br>";
}

document.getElementById("test16").innerHTML = text;
let j = 7;
while (j <10) {

    alert("Hello JavaScript!");
    j++;
}

let k = 14

do {

    document.write(5+14);
    k++;
}

while(k <=15)

let time = new Date().getHours();

console.log(time);

if (time <= 12) {

    alert("Good morning");

}
else if (time < 20) {
    alert("Good afternoon");
}
else {

    alert("Good Day");
}


window.alert("Welcome to my site");

// document.getElementById("test17").value = 0;


function myFunctionThree(){

    let element = document.getElementsByClassName("intro");

    element[0].style.backgroundColor = "lightblue";
}

function myFunctionFour(){

    let element2 = document.getElementsByTagName("img");
    element2[0].src = "/images/laptop.jpg";
}

document.querySelector(".para").style.color = "blue";

let element3 = document.querySelectorAll("div");
for (let j=0; j<element3.length; j++){
    element3[j].style.backgroundColor = "yellow";
}

// const PI = 3.141593;

Math.PI;
Math.random();
Math.min(1, 34, 25);
Math.max(34, 24, 78);
Math.floor();
Math.ceil();


// let person = {

//     firstName: "John",
//     lastName: "Doe",
//     yearOfBirth: 2020,
//     nationality: ["Canadian", "Japanese"],
//     age: function(){
//         return 2023 - this.yearOfBirth;
//     }
// };

console.log(person["firstName"]);
console.log(person["nationality"]);
console.log(person.age());
let text2 = "";
for(let x in person) {

     text2 += person[x] + "<br>";

}

document.getElementById("test20").innerHTML = text2;

let car = new Object();
car.make = "Toyota";
car.model = 2020;
car["color"] = "white";
car.engine = ["xmodel", 2021];
car.calcPrice = function(){

    return 100000 * this.model;

};

car.calcPrice();

document.getElementById("test21").onclick = function(){

    window.alert("this is the test for the onclick on test21");
}

let cars2 = ["Toyota", "Fiat", "Volvo"];
cars2[0];
cars2[1];
cars2[2];

let people = new Array("John", "Lisa");

let day = new Date();
day.getHours();

Math.PI;
Math.random();
Math.floor();
Math.ceil();

window.alert();
document.getElementById("demo").innerHTML = "Thank you";


let person2 = {

    firstName: "John",
    lastName: "Doe",
    yearOfBirth: 2020,
    nationality: ["Canadian", "Japanese"],
    person3: {
        name: "Lisa Kay",
        age: 23

    },
    age: function(){
        return 2023 - this.yearOfBirth;
    }


};

alert(person2.firstName);
person2.age();
person2.person3.name;
person2["lastName"];

person2["person3"].age();

let car5 = new Object();
car.make = "Toyota";
car.model = 2020;
car.calcSum() = function(){

    //commands
};




function validateForm(){

    let element2 = document.forms["form1"]["first"].value;

    if(element2 == "") {
        alert("The first Name should be filled out");
    }

    else {

        alert("Thank you for your visit");
    }


}


function validateform(){

    let element2 = document.getElementById("numb").value;
    if (isNaN(element2) || element2 <0 || element2 > 100){

        alert("please enter a valid number");
    }
    else {

        alert("Thank you for your input");
    }
}


let person = {

    firstName : "Mary",
    lastName: "Doe",
    yearOfBrith: 1957,
    eyeColor: null,
    nationality: ["Canadian", "Japanese"],
    car: {
       make: "Fiat",
       model: 2020,
       color: "white"
    },
    age: function(){
        return 2023 - this.yearOfBrith;
    }


};

console.log(person.firstName);
alert(person["lastName"]);

let eye = "eyeColor";
alert(person[eye]);


person.car.model;
person["car"]["model"];
person["nationality"][0];

let car = new Object();
car.model = 2023;
car["make"] = "Toyota";
car["color"] = "gray";
car.calcPrice = function(){
   return 100000 * this.model;
};

function Person(first, last, eye, year, size){

    this.firstName = first; 
    this.lastName = last;
    this.eyeColor = eye;
    this.yearOfBirth = year;
    this.pSize = size;
    this.age = function(){

        return 2023 - this.yearOfBirth;
    };
    this.nationalitry = ["Canadian", "Japanese"];
}


let mySister = new Person("Lisa", "Kay", "gray", 2020, "L");
const myFather = new Person("Dylan","Doe","brown",1946, "M");

document.getElementById("demo").innerHTML = mySister.firstName + " " + mySister["lastName"] + " " +mySister["yearOfBirth"] + "was born";

alert(myFather["nationality"][0]);

let txt = "";
for (let x in person){

   txt += person[x] + "<br>";
}

console.log(txt);

Person.prototype.height = this.yearOfBirth - 2000;

Person.prototype.changeName = function(name){

    this.lastName = name;
};

let Person = new myMother("Mary", "Harper", "gary", 1967, "S");
console.log(myMother.height);
myMother.changeName("Smith");
mySister.height;























