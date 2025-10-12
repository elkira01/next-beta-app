export interface Product {
    id: any;
    categoryId: any;
    designation: string;
    slug?: string;
    price: number;
    description: string;
    images: Array<string>;
    createdAt?: any;
    updatedAt?: any;
}
