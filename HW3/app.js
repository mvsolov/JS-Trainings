// Task 1

let product = [2, 3, 4, 5];
for (let i = 0; i < product.length; i++) {
    console.log(product[i]);
}

i = 0;
while (i < product.length) {
    console.log(product[i]);
    i++;
}

// Task 2

for (let i = 0; i < 15; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
}

// Task 3

function randArray ( k ) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500));
    }
    return arr;
}
console.log(randArray(5));

// Task 4

function raiseToDegree(a, b) {
    if (Number.isInteger(parseInt(a)) && Number.isInteger(parseInt(b))) {
        let result = Math.pow(parseInt(a), parseInt(b));
        return result;
    } else {
        console.log("Incorrect data");
        return null;
    }
 }
 let a = prompt("Enter number a");
 let b = prompt("Enter number b");
 console.log(raiseToDegree(a, b));

 // Task 5

function findMin(){
    let i = 0;
        min = arguments[0];

    for (i = 1; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(1,2,5,7,9,-8));

// Task 6

function findUnique(arr) {
        const uniqueSet = new Set(arr);
        return uniqueSet.size === arr.length;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 1];
console.log(findUnique(array1));
console.log(findUnique(array2));

// Task 8

 function upperCase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(upperCase("i love java script"));