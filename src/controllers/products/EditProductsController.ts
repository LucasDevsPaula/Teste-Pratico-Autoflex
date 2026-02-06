import { Request, Response } from "express";
import { EditProductsService } from "../../services/products/EditProductsService";

class EditProductsController {
  async handle(req: Request, res: Response) {
    const { name, price } = req.body;
    const { productId } = req.params;

    if (!productId || Array.isArray(productId)) {
      return res.status(400).json({
        error: "Product not found",
      });
    }

    const editProductService = new EditProductsService();

    const product = await editProductService.execute(
      { name, price },
      productId,
    );

    return res.json(product);
  }
}

export { EditProductsController };
