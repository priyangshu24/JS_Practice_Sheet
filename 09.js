//Q Write a function that takes an array of a number and a new array with only the even numbers .
console.log("Q Write a function that takes an array of a number and a new array with only the even numbers .");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(array) {
    let evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers;
}

console.log(filterEvenNumbers(array));


//Q Write a function that takes an array of a number and a new array with only the odd numbers .

console.log("Q Write a function that takes an array of a number and a new array with only the odd numbers .");
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(array1) {
    let oddNumbers = array1.filter(num => num % 2 !== 0);
    return oddNumbers;
}
console.log(filterOddNumbers(array1));


