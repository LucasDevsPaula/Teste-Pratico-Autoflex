import { Request, Response } from "express";
import { DeleteRawMaterialsService } from "../../services/rawMaterials/DeleteRawMaterialsService";

class DeleteRawMaterialsController {
  async handle(req: Request, res: Response) {
    const { rawMaterialsId } = req.params;

    if (!rawMaterialsId || Array.isArray(rawMaterialsId)) {
      return res.status(400).json({ error: "Product not found" });
    }

    const deleteRawMaterialsService = new DeleteRawMaterialsService();

    const rawMaterial = await deleteRawMaterialsService.execute(rawMaterialsId);

    return res.json(rawMaterial);
  }
}

export { DeleteRawMaterialsController };
