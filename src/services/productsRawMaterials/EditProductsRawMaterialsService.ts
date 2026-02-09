import prismaClient from "../../prisma/index";

interface MaterialItem {
  codeRawMaterial: string;
  requiredQuantity: string;
}

interface EditProductRequest {
  codeProduct: string;
  materials: MaterialItem[];
}

class EditProductsRawMaterialsService {
  async execute({ codeProduct, materials }: EditProductRequest) {
    const product = await prismaClient.product.findUnique({
      where: {
        code: codeProduct,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const materialCodes = materials.map((m) => m.codeRawMaterial);

    const rawMaterialsFound = await prismaClient.rawMaterial.findMany({
      where: {
        code: {
          in: materialCodes,
        },
      },
    });

    if (rawMaterialsFound.length !== materials.length) {
      throw new Error("One or more raw materials codes are invalid.");
    }

    const newLinksData = materials.map((item) => {
      const materialEntity = rawMaterialsFound.find(
        (rm) => rm.code === item.codeRawMaterial,
      );
      return {
        product_id: product.id,
        rawMaterial_id: materialEntity!.id,
        requiredQuantity: item.requiredQuantity,
      };
    });

    await prismaClient.$transaction([
      prismaClient.productRawMaterial.deleteMany({
        where: {
          product_id: product.id,
        },
      }),

      prismaClient.productRawMaterial.createMany({
        data: newLinksData,
      }),
    ]);

    return {
      message: "Product composition update successfully",
      count: newLinksData.length,
    };
  }
}

export { EditProductsRawMaterialsService };
