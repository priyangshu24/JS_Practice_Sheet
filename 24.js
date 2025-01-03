//Q.Implement a private variable using clousers
console.log("Q.Implement a private variable using clousers");

// concept 
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.

function createCounter() {
    // private variable
    let count = 0;

    function increment() {
        count++;
        console.log("Count :", count);
    }

    return {
        incrementCounter: function() {
            increment();
        },
        getCount:function() {
            return count;
        }
    }
}

const counter = createCounter();
counter.incrementCounter();  // increment the counter
counter.incrementCounter();  // increment the counter
counter.incrementCounter();  // increment the counter
console.log("the count is "+counter.getCount());
// output is 3