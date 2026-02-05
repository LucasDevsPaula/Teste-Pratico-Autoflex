import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, price } = req.body;
    console.log({name, price});

    const createProductsService = new CreateProductsService();

    const products = await createProductsService.execute();

    res.json(products);
  }
}

export { CreateProductsController };
