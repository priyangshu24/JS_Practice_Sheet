//Q implement a private variable using clousers

console.log("Q implement a private variable using clousers");

// concept 
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.
// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.

function createCounter() {
    // private variable
    let count = 0;
    //Inner function 
    function increment()//increment the count
 {
        count++;//increment the count
        console.log("Count"+count);//print the count
    }
    return {
        incrementCounter: function()//increment the count 
        {
            increment();//call the increment function
        },
        getCount: function()//get the count 
        {
            return count;//return the count
        }
    }
}
const counter = createCounter();
counter.incrementCounter();  // increment the counter
counter.incrementCounter();  // increment the counter
counter.incrementCounter();  // increment the counter
console.log(counter.getCount());
// output is 3

// closure is a function that has access to the variables and functions of its parent scope, even after the parent function has returned.






