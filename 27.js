//Q. Implement an async function to featch data from an API and handle errors. Using try/catch blocks.

console.log("Q. Implement an async function to featch data from an API and handle errors. Using try/catch blocks.");

// concept
// async function is a function that returns a promise. It is used to handle asynchronous operations in JavaScript.
// async function is used to handle asynchronous operations in JavaScript.

// solution
// implement an async function to featch data from an API and handle errors. Using try/catch blocks.
// the function should make an API call and return a promise. The promise should resolve with the data from the API call or reject with an error message.

async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("request failed with status " + response.status);
        }
        return await response.json();
    }
    catch(error) 
    {
        console.error("Error fetching data:", error);
    }
}
// call the function with a URL
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));