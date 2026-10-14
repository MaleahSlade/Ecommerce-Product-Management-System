"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
// * Calculates the dollar amount discounted from a product’s original price.
// * @param price - The original price of the product.
// * @param discountPercentage - The discount percentage.
// * @returns The dollar amount deducted from the original price.
//     */
function calculateDiscount(price, discountPercentage) {
    return price * (discountPercentage / 100);
}
//# sourceMappingURL=discountCalculator.js.map