//Q Create an object representing a car with properties like make, model, year, and color. Add a method to the object that returns a string in the format "This car is a [year] [make] [model] and it is [color]."

console.log("Q Create an object representing a car with properties like make, model, year, and color. Add a method to the object that returns a string in the format \"This car is a [year] [make] [model] and it is [color].\"");

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
}
car.startEngine = function() {
    console.log("Engine started");
}
car.startEngine();

