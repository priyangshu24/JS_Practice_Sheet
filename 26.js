//Q. Write a function that makes an API call and handles the response using try and catch blocks.
console.log("Q. Write a function that makes an API call and handles the response using try and catch blocks.");

  async function makeAPICall(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during API call:", error.message);
      throw error; // Re-throw to handle in calling function
    }
  }
  
  function handleData(data) {
    console.log('Processed Data:', data);
  }
  
  async function main() {
    try {
      const apiUrl1 = "https://jsonplaceholder.typicode.com/posts";
      const apiUrl2 = "https://jsonplaceholder.typicode.com/comments";
  
      const data1 = await makeAPICall(apiUrl1);
      handleData(data1);
  
      const data2 = await makeAPICall(apiUrl2);
      handleData(data2);
    } catch (error) {
      console.error("Error in main:", error.message);
    }
  }
  
  main();