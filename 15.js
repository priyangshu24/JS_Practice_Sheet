//Q Implement a recusive function to find the nth Fibonacci number.
console.log("Q Implement a recusive function to find the nth Fibonacci number.");
// concept 
// 0 1 1 2 3 5 8...n
//n =5
// n = 6(8)

function fibonacci(n) {
    if (n<=1) // base case: if the number is less than or equal to 1, return the number
    {
        return n;
    }
    else // recursive case: return the sum of the previous two Fibonacci numbers
    {
        return fibonacci(n-1) + fibonacci(n-2);//0 1 1 2 3 5 8 13: 0+1 1+1 1+2 2+3 3+5 5+8 8+13
    }
}

console.log(fibonacci(5));//5 : 0 1 1 2 3
console.log(fibonacci(6));//8 : 0 1 1 2 3 5 8
console.log(fibonacci(7));//13 : 0 1 1 2 3 5 8 13
// Time complexity: O(2^n) because we are doing a lot of repeated work. Space complexity: O(n) because we are using a stack to store the recursive calls.
// Rethink the problem: We can use dynamic programming to solve this problem more efficiently. We can store the values of the Fibonacci numbers in an array and use them to calculate the next value. This way, we can avoid the repeated work and reduce the time complexity to O(n).