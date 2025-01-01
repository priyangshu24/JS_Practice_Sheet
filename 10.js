//Q. Use `map()` to double all the elements in an array.

console.log("Q. Use `map()` to double all the elements in an array.");
function doubleArrayElements(array) // The .map() method is used to create a new array by multiplying each element in the input array by 2. The new array is then returned by the function. [2, 4, 6, 8, 10]
{
    return array.map((element) => element * 2);
}
let array = [1, 2, 3, 4, 5]; // Input array [2, 4, 6, 8, 10]
doubleArrayElements(array); // Output: [2, 4, 6, 8, 10]
console.log(doubleArrayElements(array));// Print the result



//Q. Find the largest element in an array using `reduce()`method.

console.log("Q. Find the largest element in an array using `reduce()`method.");
function findLargestElement(array1) // The .reduce() method is used to find the largest element in the input array. The largest element is found by comparing each element in the array with the current largest element. The largest element is then returned by the function. [10]
{
    return array1.reduce((max, current) => Math.max(max, current), -Infinity); // The -Infinity is used as the initial value for the max variable. This ensures that the first element in the array is compared with -Infinity and is considered the largest element. reduce() returns the largest element in the array
}
let array1 = [1, 2, 3, 4, 5]; // Input array [10]
findLargestElement(array1); // Output: 5
console.log(findLargestElement(array1));// Print the result
