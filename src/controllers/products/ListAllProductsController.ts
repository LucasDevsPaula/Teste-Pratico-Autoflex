import { Request, Response } from "express";
import { ListAllProductsService } from "../../services/products/ListAllProductsService";

class ListAllProductsController {
  async handle(_req: Request, res: Response) {
    const listAllProductsService = new ListAllProductsService();

    const products = await listAllProductsService.execute();

    return res.json(products);
  }
}

export { ListAllProductsController };
