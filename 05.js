//Q Find the sum of all elements in an array.
console.log("Q Find the sum of all elements in an array.");
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);