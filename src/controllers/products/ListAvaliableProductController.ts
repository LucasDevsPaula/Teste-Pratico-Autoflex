import { Request, Response } from "express";
import { ListAvaliableProductService } from "../../services/products/ListAvailableProductsService";

class ListAvaliableProductController {
  async handle(_req: Request, res: Response) {
    const listAvaliableProductService = new ListAvaliableProductService();

    const products = await listAvaliableProductService.execute();

    return res.json(products);
  }
}

export { ListAvaliableProductController };
