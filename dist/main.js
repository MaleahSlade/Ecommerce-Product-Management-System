"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
async function main() {
    try {
        // Fetch product data from the API.
        const products = await (0, apiService_1.fetchProducts)();
        console.log(`Successfully retrieved ${products.length} products.`);
        // Process each product.
        for (const product of products) {
            console.log("\n==============================");
            // Display the product's details.
            product.displayDetails();
            // Calculate the dollar amount of the discount.
            const discountAmount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountPercentage);
            console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
            // Calculate the discounted price.
            const discountedPrice = product.getPriceWithDiscount();
            // Calculate tax on the discounted price.
            const taxAmount = (0, taxCalculator_1.calculateTax)(discountedPrice, product.category);
            // Calculate the final price, including tax.
            const finalPrice = discountedPrice + taxAmount;
            console.log(`Tax Amount: $${taxAmount.toFixed(2)}`);
            console.log(`Final Price Including Tax: $${finalPrice.toFixed(2)}`);
        }
        console.log("\nProduct processing complete.");
    }
    catch (error) {
        console.error("The application could not complete successfully.");
    }
}
main();
//# sourceMappingURL=main.js.map