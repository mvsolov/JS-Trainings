// Task 2

alert ("Solovii");

// Task 3

let a = 5;
let b = 7;

alert(a);
alert(b);

a = b;

alert(a);
alert(b);

// Task 4

let testObject = {
  
    product: "Test",
    price: 50,
    available: true,
    packaging: undefined,
    discount: null,
};

// Task 5

let isAdult = confirm("Have you reached the age of majority?");
console.log(isAdult);

// Task 6

let firstName = "John";
let lastName = "Doe";
let studyGroup = "A";
let yearBirth = 2000;
let isMarried = false;

console.log(typeof yearBirth);
console.log(typeof isMarried);
console.log(typeof firstName, typeof lastName, typeof studyGroup);

let email = null;
console.log(typeof email);

let phoneNum
console.log(typeof phoneNum);

// Task 7

let login = prompt("Please enter you login");
let emailAddress = prompt("Please enter you email");
let password = prompt("Please enter you password");

alert(`Dear ${login}, your email is ${emailAddress}, your password is ${password}`);