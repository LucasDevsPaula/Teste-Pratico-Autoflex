import { Router } from "express";
//middleware
import { validateSchema } from "./middleware/validateSchema";

//schemas
import { createProductsSchema } from "./schemas/porductsSchema";
import { createRawMaterialSchema } from "./schemas/rawMaterialsSchema";

//products
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";
import { EditProductsController } from "./controllers/products/EditProductsController";
import { DeleteProductsController } from "./controllers/products/DeleteProductsController";

//rawMaterial
import { CreateRawMaterialController } from "./controllers/rawMaterials/CreateRawMaterialsController";

const router = Router();

router.post(
  "/products",
  validateSchema(createProductsSchema),
  new CreateProductsController().handle,
);

router.get("/products", new ListAllProductsController().handle);

router.put("/products/:productId", new EditProductsController().handle);

router.delete("/products/:productId", new DeleteProductsController().handle);

router.post(
  "/rawMaterials",
  validateSchema(createRawMaterialSchema),
  new CreateRawMaterialController().handle,
);

export { router };
