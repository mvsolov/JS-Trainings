// Task 1

let x = 1;
let y = 2; 

// x = x + "";
y = y + "";

let res1 = x + y;
console.log(res1);
console.log( typeof res1);

// let x = true;
let res2 = Boolean(x) + y;
console.log(res2);
console.log( typeof res2); 


let res3 = Boolean(x + y);
console.log(res3); 
console.log (typeof res3);


// let x = 0;
// let y = 0;
let res4 = (NaN * x * y);
console.log(res4);
console.log(typeof res4);


// // Task 2
// a)
let num = prompt("Please enter number");

if (num > 0) {
   console.log(num + " is positive");
} else {
   console.log(num + " is negative");
};
// b)
if (num % 7 == 0 ) {
    console.log(num + " a multiple of 7");
}

// Task 3

const arr = [];
arr[0] = 7;
arr[1] = "line";
arr[2] = true;
arr[3] = null;

console.log(arr.length);

arr[4] = prompt("Enter any value");
alert(`5th element is ${arr[4]}`);
arr.shift();
alert(arr);

// Task 4

let cities = [" Rome ", " Lviv ", " Warsaw "]; 
console.log(cities.join("*"));

// Task 5

let isAdult = prompt("Have you reached the age of majority?");
if (isAdult >= 18) {
   alert("You have reached the age of majority");
} else {
    alert("You are still too young");
}

// Task 6

let a = prompt("Enter lengths 1st side");
let b = prompt("Enter lengths 2nd side");
let c = prompt("Enter lengths 3rd side");

function isNumber() {
    return !isNaN(a) && !isNaN(b) && !isNaN(c);
}

function isPositive() {
    return a > 0 && b > 0 && c > 0;
}
if (!isNumber() || !isPositive()) {
console.log("Incorrect data");
}

let perimeter = (a + b + c) / 2;

let area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));

console.log(area.toFixed(3));

function isRectangular(a, b, c) {
    const sides = [a, b, c].sort((x, y) => x - y);
    return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2);
 }

 if (isRectangular(a, b, c)) {
    console.log("The triangle is rectangular");
 } else {
    console.log("The triangle is not rectangular");
 }

 // Task 7

 const currentDate = new Date();
 const hour = currentDate.getHours();

if(hour >= 23 && hour <= 5){
    console.log("Good night");
} else if(hour >= 5 && hour <= 11){
    console.log("Good morning");
} else if(hour >= 11 && hour <= 17){
    console.log("Good day");
} else {
    console.log("Good evening");
}
    
switch (true) {
    case (hour >= 23 && hour < 5):
        console.log("Good night");
        break;
    case (hour >= 5 && hour < 11):
        console.log("Good morning");
        break;
    case (hour >= 11 && hour < 17):
        console.log("Good day");
        break;
    default:
        console.log("Good evening");
        break;    
}
