import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { code, name, price } = req.body;

    const createProductsService = new CreateProductsService();

    const products = await createProductsService.execute({
      code,
      name,
      price,
    });

    res.json(products);
  }
}

export { CreateProductsController };
