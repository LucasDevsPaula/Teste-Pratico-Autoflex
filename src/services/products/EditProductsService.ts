import prismaClient from "../../prisma/index";

interface UpdateProductProps {
  name: string;
  price: number;
}


class EditProductsService {
  async execute(
    { name, price }: UpdateProductProps,
    productId: string
  ) {
    const product = await prismaClient.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const updateProduct = await prismaClient.product.update({
      where: {
        id: productId,
      },
      data: {
        name: name ?? product.name,
        price: price ?? product.price,
      },
    });

    return { updateProduct };
  }
}

export { EditProductsService };
