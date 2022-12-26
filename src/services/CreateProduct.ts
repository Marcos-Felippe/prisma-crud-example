import { prismaClient } from "../database/prismaClient";

type ProductRequest = {
    name: string;
    bar_code: string;
    price: number;
}

export class CreateProductService {
    async execute({name, bar_code, price}: ProductRequest) {

        // make a code to filter if already exists a product with this name or bar_code
        // ...

        try {
            const product = await prismaClient.product.create({
                data: {
                    name,
                    bar_code,
                    price
                }
            });

            return product;
        } catch(err: any) {
            return new Error(err);
        }
    }
}