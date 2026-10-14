export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, thumbnail: string);
    displayDetails(): void;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Products.d.ts.map