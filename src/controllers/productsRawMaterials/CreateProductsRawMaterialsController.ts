import { Request, Response } from "express";
import { CreateProductsRawMaterialsService } from "../../services/productsRawMaterials/CreateProductsRawMaterialsService";

class CreateProductRawMaterialController {
  async handle(req: Request, res: Response) {
    const { codeProduct, materials } = req.body;

    const createProductsRawMaterialsService =
      new CreateProductsRawMaterialsService();

    const productRawMaterial = await createProductsRawMaterialsService.execute({
      codeProduct,
      materials,
    });

    return res.json(productRawMaterial);
  }
}

export { CreateProductRawMaterialController };
