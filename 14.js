//.Q Write a recursive function to calculate a factorial of a given number.
console.log("Q Write a recursive function to calculate a factorial of a given number.");

function factorial(n) {
    if (n === 0) // base case : if the number is 0, return 1
    {
        return 1;
    }
    else // recursive case : return the number multiplied by the factorial of the number minus 1
    {
        return n * factorial(n - 1);
    }
}

const result = factorial(5); // call the function with 5 as argument
console.log( "The factorial of 5 is : " + result); // print the result

//.Q Write a function that takes an array of numbers and returns the sum of all the numbers in the array using recursion.
console.log("Q Write a function that takes an array of numbers and returns the sum of all the numbers in the array using recursion.");

function sumArray(arr)
 {
    if(arr.length === 0) // base case : if the array is empty, return 0
    {
        return 0;
    }
    else// recursive case : return the first element of the array plus the sum of the rest of the array
    {
        return arr [0] + sumArray(arr.slice(1)); // slice(1) is used to remove the first element of the array
    }
}

const array = [1, 2, 3, 4, 5];// Input array
const sum = sumArray(array); // Output: 15
console.log(sum); // Output: 15

//  5* factorial(5-1)
//  4* factorial(4-1)
//  3* factorial(3-1)
//  2* factorial(2-1)
//  1* factorial(1-1)