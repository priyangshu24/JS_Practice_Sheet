//Q. Create a prototype for a product object with properties like name,price, and quantity. Implement a method to calculate the total price of the product.

console.log("Q. Create a prototype for a product object with properties like name,price, and quantity. Implement a method to calculate the total price of the product.");

// concept
// prototype is an object that is used to create new objects that inherit properties and methods from an existing object. It is a way to create a blueprint for objects that share common properties and methods.

// solution
// create a prototype for a product object
// implement a method to calculate the total price of the product

function Product(name, price, quantity) // create a new product object
{
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.calculateTotalPrice = function() // calculate the total price of the product
  {
    return this.price * this.quantity;
  };
}

// create a new product object
let product1 =  new Product("Laptop", 1000, 2);
let product2 =  new Product("Mobile", 500, 3);
let product3 =  new Product("Tablet", 300, 1);

// calculate the total price of the product
console.log("Price of each product1:",product1.calculateTotalPrice()); // answer is 2000
console.log("Price of each product2:",product2.calculateTotalPrice());// answer is 1500
console.log("Price of each product3:",product3.calculateTotalPrice());// answer is 300

// calculate the total price of all products

console.log("Total Price: " , product1.calculateTotalPrice() + product2.calculateTotalPrice() + product3.calculateTotalPrice()); // answer is 3800

