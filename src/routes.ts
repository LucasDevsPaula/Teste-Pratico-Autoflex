import { Router } from "express";
//middleware
import { validateSchema } from "./middleware/validateSchema";

//schemas
import { createProductsSchema } from "./schemas/porductsSchema";

//products
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";

const router = Router();

router.post(
  "/products",
  validateSchema(createProductsSchema),
  new CreateProductsController().handle,
);

router.get("/products", new ListAllProductsController().handle);

export { router };
