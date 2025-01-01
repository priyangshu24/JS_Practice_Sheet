// Q. Write a function that takes an array of numbers and returns the sum of all the numbers in the array. If the array is empty, return 0. Use the reduce() method to calculate the sum.

//concept
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }     
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([])); // Output: 0
console.log(sumArray([10, 20, 30])); // Output: 60