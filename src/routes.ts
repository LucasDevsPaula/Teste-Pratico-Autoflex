import { Router, Request, Response } from "express";
//middleware
import { validateSchema } from "./middleware/validateSchema";

//schemas
import { createProductsSchema } from "./schemas/porductsSchema";

//products
import { CreateProductsController } from "./controllers/products/CreateProductsController";

const router = Router();

router.post(
  "/products",
  validateSchema(createProductsSchema),
  new CreateProductsController().handle,
);

export { router };
