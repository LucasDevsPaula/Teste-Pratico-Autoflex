import { Request, Response } from "express";
import { ListProductsRawMaterialsService } from "../../services/productsRawMaterials/ListProductsRawMaterialsService";

class ListProductsRawMaterialsController {
  async handle(_req: Request, res: Response) {
    const listProductsRawMaterialsService =
      new ListProductsRawMaterialsService();

    const productRawMaterial = await listProductsRawMaterialsService.execute();

    return res.json(productRawMaterial);
  }
}

export { ListProductsRawMaterialsController };
