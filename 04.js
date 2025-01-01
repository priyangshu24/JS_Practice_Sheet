//Q. write a function that take a string and return the reversed version of it .
console.log("Q. write a function that take a string and return the reversed version of it .");
console.log("hello");
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello"));

//Q. Write a function that checks if a number is even or odd and return "Even " or "Odd" accordingly.

console.log("Q. Write a function that checks if a number is even or odd and return \"Even \" or \"Odd\" accordingly.");
console.log("5");
function checkEvenOdd(num) {
    if (num % 2 ===0 ){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOdd(5));

//Q Create a progeram that checks if a given year is a leap year or not.

console.log("Q Create a progeram that checks if a given year is a leap year or not.");
console.log("2021");
function checkLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return "Leap Year";
        } else {
          return "Not a Leap Year";
        }
      } else {
        return "Leap Year";
      }
    } else {       
      return "Not a Leap Year";
    }
  }
  console.log(checkLeapYear(2021));
