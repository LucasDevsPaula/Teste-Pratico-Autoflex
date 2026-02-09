import { Router } from "express";
//middleware
import { validateSchema } from "./middleware/validateSchema";

//schemas
import { createProductsSchema } from "./schemas/porductsSchema";
import { createRawMaterialSchema } from "./schemas/rawMaterialsSchema";
import { createProductRawMaterialSchema } from "./schemas/productRawMaterialsSchema";

//products
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";
import { EditProductsController } from "./controllers/products/EditProductsController";
import { DeleteProductsController } from "./controllers/products/DeleteProductsController";

//rawMaterial
import { CreateRawMaterialController } from "./controllers/rawMaterials/CreateRawMaterialsController";
import { ListAllRawMaterialsController } from "./controllers/rawMaterials/ListAllRawMaterialsController";
import { EditRawMaterialsController } from "./controllers/rawMaterials/EditRawMaterialsController";
import { DeleteRawMaterialsController } from "./controllers/rawMaterials/DeleteRawMaterialsController";

//ProductRawMaterial
import { CreateProductRawMaterialController } from "./controllers/productsRawMaterials/CreateProductsRawMaterialsController";
import { ListProductsRawMaterialsController } from "./controllers/productsRawMaterials/ListProductsRawMaterialsController";
import { EditProductRawMaterialsController } from "./controllers/productsRawMaterials/EditProductsRawMaterialsController";

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

router.get("/rawMaterials", new ListAllRawMaterialsController().handle);

router.put(
  "/rawMaterials/:rawMaterialsId",
  new EditRawMaterialsController().handle,
);

router.delete(
  "/rawMaterials/:rawMaterialsId",
  new DeleteRawMaterialsController().handle,
);

router.post(
  "/product/composition",
  validateSchema(createProductRawMaterialSchema),
  new CreateProductRawMaterialController().handle,
);

router.get(
  "/product/composition",
  new ListProductsRawMaterialsController().handle,
);

router.put(
  "/product/composition",
  new EditProductRawMaterialsController().handle,
);
export { router };
