//Q. Implement a function thet makes multiple API calls and processes that data using callbacks.

console.log("Q. Implement a function thet makes multiple API calls and processes that data using callbacks.");

// concept
// callback is a function that is passed as an argument to another function and is executed after the completion of that function.
// callback is used to handle asynchronous operations such as API calls, file reading, etc.

// solution
// implement a function that makes multiple API calls and processes that data using callbacks.
// the function should take an array of API endpoints as an argument and a callback function as an argument.
// the function should make multiple API calls and process the data using the callback function.

function makeApiCalls(apiEndpoints, callback) // define the function
{
  // make multiple API calls
  apiEndpoints.forEach((apiEndpoint) => // loop through the array of API endpoints
    {
    fetch(apiEndpoint) // make the API call
      .then((response) => response.json()) // process the response
      .then((data) => {
        // process the data using the callback function
        callback(data);//call the callback function and pass the data as an argument
      })
      .catch((error) => // handle any errors
        {
        console.error(error);// log the error
      });
  });
}
// example usage
const apiEndpoints = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/users'
];
makeApiCalls(apiEndpoints, (data) => // call the function with the array of API endpoints and a callback function
  {
  console.log(data);// log the data to the console
});
// This function makes multiple API calls and processes the data using the callback function.   
// It takes an array of API endpoints and a callback function as arguments.
// It makes multiple API calls and processes the data using the callback function.
// The callback function is called with the data as an argument after each API call is completed.
// The function handles any errors that occur during the API calls.
