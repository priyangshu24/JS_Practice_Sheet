//Q. Remove all occurences of a specific element from an array.

console.log("Q. Remove all occurences of a specific element from an array.");

function removeElementFromArray(array, element)// The .filter() method is used to create a new array by removing all occurrences of the specified element from the input array. The new array is then returned by the function. [1, 2, 3, 5, 6, 7]
{
    return array.filter((item) => item !== element);// The .filter() method is used to create a new array by removing all occurrences of the specified element from the input array. The new array is then returned by the function. [1, 2, 3, 5, 6, 7]
}
let array = [1, 3, 3, 4, 5, 2, 6, 3, 7, 3];// Input array
let element = 3;// Element to remove
removeElementFromArray(array, element);// Output: [1, 2, 3, 5, 6, 7]
console.log(removeElementFromArray(array, element));// Print the result
