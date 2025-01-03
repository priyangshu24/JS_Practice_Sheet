//Q. Create a counter fnction using a closures thet increments and returns the count on each cal

console.log("//Q. Create a counter fnction using a closures thet increments and returns the count on each cal");

// concept 
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    }
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
// output: 1, 2, 3