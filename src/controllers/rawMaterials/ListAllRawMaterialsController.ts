import { Request, Response } from "express";
import { ListAllRawMaterialsService } from "../../services/rawMaterials/ListAllRawMaterialsService";

class ListAllRawMaterialsController {
  async handle(_req: Request, res: Response) {
    const listAllRawMaterialsService = new ListAllRawMaterialsService();

    const rawMaterial = await listAllRawMaterialsService.execute();

    return res.json(rawMaterial);
  }
}

export { ListAllRawMaterialsController };
