import prismaClient from "../../prisma/index";

class ListAllProductsService {
  async execute() {
    const products = await prismaClient.product.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        materials: {
          select: {
            rawMaterial: {
              select: {
                name: true,
                code: true,
              },
            },
            requiredQuantity: true,
          },
        },
      },
    });

    return { products };
  }
}

export { ListAllProductsService };
