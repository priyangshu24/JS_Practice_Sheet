//Q. Create a function that display the current date and time in a specific format.

console.log("Q. Create a function that display the current date and time in a specific format.");

function displayDateTime() // The function displays the current date and time in a specific format
{
    let date = new Date();// Create a new date object
    let year = date.getFullYear();// Year
    let month = date.getMonth() + 1; // Month is zero-based, so we add 1 to get the correct month number
    let day = date.getDate();// Day
    let hours = date.getHours();// Hours
    let minutes = date.getMinutes();// Minutes
    let seconds = date.getSeconds();// Seconds
  
    let formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;// Format the date and time in the desired format 
    console.log(formattedDateTime);// Print the formatted date and time
}

displayDateTime(); // Call the function to display the current date and time
