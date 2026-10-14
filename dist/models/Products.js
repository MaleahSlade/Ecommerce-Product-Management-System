"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//export makes the class available to other files
//class defines a bluepreint for creating Product objects
//items within the class are the properties and their corresponding types
class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    stock;
    thumbnail;
    //Runs when a new class instance is created using new Product(...)
    //Constructor body -> this.id = id; this.title = title; etc. 
    //"this" refers to the new object being created.
    //Without these assignments, the properties would stay undefined
    constructor(id, title, description, category, price, discountPercentage, rating, stock, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.thumbnail = thumbnail;
    }
    //Example of OOP: You’re demonstrating object-oriented programming. 
    // Instead of writing separate console statements for every product, 
    // you give every Product object a method that knows how to display its own details.
    // Displays the product’s details.
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Original Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Discounted Price: $${this.getPriceWithDiscount().toFixed(2)}`);
        console.log(`Rating: ${this.rating}`);
    }
    // Calculates and returns the product's price after the discount.
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage / 100);
    }
}
exports.Product = Product;
//Console.log not used here because we want other parts of our application 
// to use the calculated price. For example, the main application will 
// eventually be able to display the discounted price or use it in another calculation.
//# sourceMappingURL=Products.js.map