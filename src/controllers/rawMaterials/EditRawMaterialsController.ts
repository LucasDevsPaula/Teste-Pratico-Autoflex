import { Request, Response } from "express";
import { EditRawMaterialsService } from "../../services/rawMaterials/EditRawMaterialsService";

class EditRawMaterialsController {
  async handle(req: Request, res: Response) {
    const { name, stockyQuantity } = req.body;
    const { rawMaterialsId } = req.params;

    if (!rawMaterialsId || Array.isArray(rawMaterialsId)) {
      return res.status(400).json({
        error: "Product not found",
      });
    }

    const editRawMaterialsService = new EditRawMaterialsService();

    const rawMaterials = await editRawMaterialsService.execute(
      { name, stockyQuantity },
      rawMaterialsId,
    );

    return res.json(rawMaterials);
  }
}

export { EditRawMaterialsController };
