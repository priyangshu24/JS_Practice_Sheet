//Q. Write the previous exercise using promises.
console.log("Q. Write the previous exercise using promises.");
// concept
// promise is a way to handle asynchronous operations in JavaScript. It is a way to handle asynchronous operations in JavaScript.
// it is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// it is a way to handle asynchronous operations in JavaScript.


function makeApiCalls(apiEndpoints, callback) // define the function
{
    let results = []; // define the array to store the results
    apiEndpoints.forEach((apiEndpoint) => // loop through the array of API endpoints
    {
        fetch(apiEndpoint) // make the API call
            .then((response) => response.json()) // convert the response to JSON
            .then((data) => results.push(data)) // push the data to the results array
            .catch((error) => console.error(error)); // log any errors
    });
    callback(results); // call the callback function with the results array
}
// example usage
const apiEndpoints = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users'
];
makeApiCalls(apiEndpoints, (data) => // call the function with the array of API endpoints and a callback function
{
    console.log(data); // log the data to the console
});

