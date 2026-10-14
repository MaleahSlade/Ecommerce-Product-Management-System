// * Calculates the dollar amount discounted from a product’s original price.
// * @param price - The original price of the product.
// * @param discountPercentage - The discount percentage.
// * @returns The dollar amount deducted from the original price.
//     */
export function calculateDiscount(price, discountPercentage) {
    return price * (discountPercentage / 100);
}
