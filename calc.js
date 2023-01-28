console.log("calc js file loaded");

// Variables
// Used to store values

var name1;
console.log(name1);
name1 = "Viral";

console.log(name1);

let NAME;
console.log(NAME);
NAME = "Bani";
console.log(NAME);

if(1) {
    let NAME = "Mayur";
    console.log(NAME);
}

console.log(NAME);


const car = "JLR";
console.log(car);


// Put and get data from HTML?
// Communication between JS and HTML


// Concatenation of strings: Join
let firstname = "Tom";
let lastname = "Hanks";
let space = " ";

let fullname = firstname + space + lastname;
console.log(fullname);

// Operators
// 5 types
// Arithematic op : +, -, /, *, ++, %
// Logical && ||
// ternary: ?
// Assignment: =
// Comparison: <=, >=, <, >, ==, ===

let num1 = 22;
let num2 = 13;
let num3 = 5;


// Logical (&& || )
// used for conditions

// if (num1 == 2 || num2 == 3 || num3 == 5) {
//     console.log(num1 + num2 + num3);
// } else {
//     console.log("Imput not as desired...!!")
// }

// if ((num1 == 2 && num2 == 3) || num3 == 5) {
//     console.log(num1 + num2 + num3);
// } else {
//     console.log("Imput not as desired...!!")
// }

// Ternary
//(num1 != 2 ) ? console.log(add(num1,num2)) : console.log("Input not correct");


//Assignmennt
name1 = 6;

// Functions
// Inbuilt function
// let p = prompt("Enter some value");
// console.log(p);


// User defined functions

function add(num1, num2, num3){

    //if(num1 == 2 && num2 == 3 )
    if (num1 == undefined && num2 == undefined && num3 == undefined) {
        console.log("All are undefined");
    }
    // if (num1 == undefined &&  num2 != undefined && num3 != undefined) {
    //     console.log(num2+num3);
    // }
    // if (num1 != undefined &&  num2 == undefined && num3 != undefined) {
    //     console.log(num1+num3);
    // }

    if (num1 != undefined &&  num2 == undefined && num3 == undefined) {
        console.log(num1);
    }

    if (num1 != undefined &&  num2 != undefined && num3 == undefined) {
        console.log(num1+num2);
    }

    if (num1 != undefined && num2 != undefined && num3 != undefined) {
        console.log(num1 + num2 + num3);
    }
}

add("Mayur","Green");
add();


































