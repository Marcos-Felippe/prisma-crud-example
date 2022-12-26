import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProduct";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, bar_code, price } = request.body;

        if(name == "" || bar_code == "" || price == null || name == null || bar_code == null) {
            return response.status(400).json("Error: Missing data");
        }

        const service = new CreateProductService()

        const result = await service.execute({name, bar_code, price});

        if(result instanceof Error) {
            return response.status(500).json(result.message);
        }

        return response.json(result);
    }
}