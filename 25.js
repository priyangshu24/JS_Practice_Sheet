//Q. Create a prototype for a prouct object properties like name,price,and quality. Add a method to calculate the total price of the product.

console.log("Q. Create a prototype for a prouct object properties like name,price,and quality. Add a method to calculate the total price of the product.");

// concept
// prototype is a blueprint for creating objects. It is a way to share properties and methods between objects.
// prototype is a way to create a blueprint for creating objects. It is a way to share properties and methods between objects.

function Product(name, price, quality) {
    this.name = name;
    this.price = price;
    this.quality = quality;
    this.totalPrice = function () {
        return this.price * this.quality;
    }
}

Product.prototype.totalPrice = function () {
    return this.price * this.quality;

}

let product1 = new Product("Laptop", 1000, 2);

console.log("Total Price:", product1.totalPrice()); // Output: 2000