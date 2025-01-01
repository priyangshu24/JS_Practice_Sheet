//Q. Write a function that calculate the factorial of a given number.
console.log("Q. Write a function that calculate the factorial of a given number.");
console.log(" Find the factorial of 5");
function factorial(n) {
    if (n === 0) // base case 
    {
      return 1; // return 1 when n is 0
    } 
    else // recursive case 
    {  
      return n * factorial(n - 1); // return n multiplied by the factorial of n-1
    }
}
const result = factorial(5); // call the function with 5 as argument
console.log( "The factorial of 5 is : " + result); // print the result
