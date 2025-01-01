// Calculate Area of a Rectangle
console.log("Calculate Area of a Rectangle");
let calculateAreaRectangle = (height, width) => 
    {
  return height * width;
}
let area = calculateAreaRectangle(19, 4);
console.log( "Area of Rectangle is: "+ area);

// Calculate Area of a Circle
console.log("Calculate Area of a Circle");
let calculateAreaCircle = (radius) => 
    {
  return Math.PI * radius * radius;
}
let areaCircle = calculateAreaCircle(7);
console.log( "Area of Circle is: "+ areaCircle);

// Calculate Area of a Triangle
console.log("Calculate Area of a Triangle");
let calculateAreaTriangle = (base, height) => 
    {
  return 0.5 * base * height;
}
let areaTriangle = calculateAreaTriangle(6, 5);
console.log( "Area of Triangle is: "+ areaTriangle);

// Calculate Area of a Square
console.log("Calculate Area of a Square");
let calculateAreaSquare = (side) => 
    {
  return side * side;
}
let areaSquare = calculateAreaSquare(5);
console.log( "Area of Square is: "+ areaSquare);

// Calculate Area of a Parallelogram
console.log("Calculate Area of a Parallelogram");
let calculateAreaParallelogram = (base, height) =>
    {
  return base * height;
}   
let areaParallelogram = calculateAreaParallelogram(7, 5);
console.log( "Area of Parallelogram is: "+ areaParallelogram);



