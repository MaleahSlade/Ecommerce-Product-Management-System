"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
const Products_1 = require("../models/Products");
const errorHandler_1 = require("../utils/errorHandler");
const API_URL = "https://dummyjson.com/products";
/**
 * Fetches product data from the API.
 * @returns A Promise containing an array of Product objects.
 */
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data.products)) {
            throw new Error("Invalid API response: products must be an array.");
        }
        const products = data.products.map((item) => new Products_1.Product(item.id, item.title, item.description, item.category, item.price, item.discountPercentage, item.rating, item.stock, item.thumbnail));
        return products;
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error, "fetching products");
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map