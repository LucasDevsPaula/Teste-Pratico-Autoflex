import prismaClient from "../../prisma/index";

class ListProductsRawMaterialsService {
  async execute() {
    const listProductsRawMaterials =
      await prismaClient.productRawMaterial.findMany({
        orderBy: {
          requiredQuantity: "desc",
        },
        include: {
          
          rawMaterial: true,
        },
      });

    return { listProductsRawMaterials };
  }
}

export { ListProductsRawMaterialsService };
