//Q. Create a function using closures that increments and returns the count on each call.

console.log("Q. Create a function using closures that increments and returns the count on each call.");
// concept 
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.

function createCounter() {
  let count = 0;
  return function() 
  {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// answer is 1 2 3


