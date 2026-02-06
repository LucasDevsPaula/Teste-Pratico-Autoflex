import { Request, Response } from "express";
import { DeleteProductsService } from "../../services/products/DeleteProductsService";

class DeleteProductsController {
  async handle(req: Request, res: Response) {
    const { productId } = req.params;

    if (!productId || Array.isArray(productId)) {
      return res.status(400).json({ error: "Product not found" });
    }

    const deleteProductsService = new DeleteProductsService();

    const product = await deleteProductsService.execute(productId);

    return res.json(product);
  }
}

export { DeleteProductsController };
