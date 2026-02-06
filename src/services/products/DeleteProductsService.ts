import prismaClient from "../../prisma/index";

class DeleteProductsService {
  async execute(productId: string) {
    const product = await prismaClient.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error("Product not found!");
    }

    const deleteProduct = await prismaClient.product.delete({
      where: {
        id: productId,
      },
    });

    return { deleteProduct };
  }
}

export { DeleteProductsService };
