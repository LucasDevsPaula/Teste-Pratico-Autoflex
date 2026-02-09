import { Request, Response } from "express";
import { EditProductsRawMaterialsService } from "../../services/productsRawMaterials/EditProductsRawMaterialsService";

class EditProductRawMaterialsController {
  async handle(req: Request, res: Response) {
    const { codeProduct, materials } = req.body;

    const editProductRawMaterialsService =
      new EditProductsRawMaterialsService();

    const productRawMaterials = await editProductRawMaterialsService.execute({
      codeProduct,
      materials,
    });

    return res.json(productRawMaterials);
  }
}

export { EditProductRawMaterialsController };
