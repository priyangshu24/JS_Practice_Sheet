//.Q Write a function that fetches data from an API and logs it to the console. Using try and catch blocks to handle any errors that may occur during the fetch operation.

async function fetchData() // define an asynchronous function
{
    try // use try and catch block to handle any errors that may occur during the fetch operation.
    {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetch data from an API
        let data =  await response.json(); // convert the response to JSON
        console.log(data); // log the data to the console
    }
    catch(error) // catch any errors that may occur during the fetch operation
    {
        console.error("Error fetching data:", error); // log the error to the console
    }
}
fetchData();// call the fetchData function