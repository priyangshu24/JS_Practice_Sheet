//Q. Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

console.log("Q. Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.");
// concept
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumEvenNumbers(array)); // 30
// answer is 30