export interface ProductInterface {
    _id?: string;
    name: string;
    description: string;
    price: number;
    imageURL: string;
    createdAt?: Date;
}