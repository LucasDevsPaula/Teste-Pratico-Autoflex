import prismaClient from "../../prisma/index";

interface MaterialItem {
  codeRawMaterial: string;
  requiredQuantity: number;
}

interface ProductsRawMaterialsProps {
  codeProduct: string;
  materials: MaterialItem[];
}

class CreateProductsRawMaterialsService {
  async execute({ codeProduct, materials }: ProductsRawMaterialsProps) {
    const products = await prismaClient.product.findUnique({
      where: {
        code: codeProduct,
      },
    });

    if (!products) {
      throw new Error("Product not found");
    }

    const createdLinks = await Promise.all(
      materials.map(async (material) => {
        const rawMaterial = await prismaClient.rawMaterial.findUnique({
          where: {
            code: material.codeRawMaterial,
          },
        });
        if (!rawMaterial) {
          throw new Error(
            `Raw material not found: ${material.codeRawMaterial}`,
          );
        }

        const productRawMaterialAlreadyExists =
          await prismaClient.productRawMaterial.findFirst({
            where: {
              product_id: products?.id,
              rawMaterial_id: rawMaterial?.id,
            },
          });

        if (productRawMaterialAlreadyExists) {
          throw new Error("Product raw materials already exists!");
        }

        return prismaClient.productRawMaterial.create({
          data: {
            product_id: products?.id,
            rawMaterial_id: rawMaterial?.id,
            requiredQuantity: material.requiredQuantity,
          },
        });
      }),
    );

    return createdLinks;
  }
}

export { CreateProductsRawMaterialsService };
