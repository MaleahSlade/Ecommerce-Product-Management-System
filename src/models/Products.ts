//export makes the class available to other files
//class defines a bluepreint for creating Product objects
//items within the class are the properties and their corresponding types
export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  
  //Runs when a new class instance is created using new Product(...)
  //Constructor body -> this.id = id; this.title = title; etc. 
  //"this" refers to the new object being created.
  //Without these assignments, the properties would stay undefined
  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    thumbnail: string
  ) {

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
  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Rating: ${this.rating}`);
  }

}

