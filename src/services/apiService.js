import { Product } from "../models/Products";
import { handleError } from "../utils/errorHandler";
const API_URL = "https://dummyjson.com/products";
/**
 * Fetches product data from the API.
 * @returns A Promise containing an array of Product objects.
 */
export async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data.products)) {
            throw new Error("Invalid API response: products must be an array.");
        }
        const products = data.products.map((item) => new Product(item.id, item.title, item.description, item.category, item.price, item.discountPercentage, item.rating, item.stock, item.thumbnail));
        return products;
    }
    catch (error) {
        handleError(error, "fetching products");
        throw error;
    }
}
