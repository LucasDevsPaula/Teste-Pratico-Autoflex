import { Request, Response } from "express";
import { CreateRawMaterialService } from "../../services/rawMaterials/CreateRawMaterialsService";

class CreateRawMaterialController {
  async handle(req: Request, res: Response) {
    const { code, name, stockyQuantity } = req.body;

    const createRawMaterialService = new CreateRawMaterialService();

    const rawMaterial = await createRawMaterialService.execute({
      code,
      name,
      stockyQuantity,
    });

    res.json(rawMaterial);
  }
}

export { CreateRawMaterialController };
