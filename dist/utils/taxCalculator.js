"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
/**
 * Calculates the tax amount for a product based on its category.
 * @param price - The price used to calculate tax.
 * @param category - The category the product belongs to.
 * @returns The dollar amount of tax owed.
 */
function calculateTax(price, category) {
    const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
    return price * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map