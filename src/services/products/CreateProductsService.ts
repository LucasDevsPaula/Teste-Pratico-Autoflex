import prismaClient from "../../prisma/index";

interface CreateProductsProps {
  code: string;
  name: string;
  price: number;
}

class CreateProductsService {
  async execute({ code, name, price }: CreateProductsProps) {
    console.log({ code, name, price });

    const productAlreadyExists = await prismaClient.product.findFirst({
      where: {
        code: code,
      },
    });

    if (productAlreadyExists) {
      throw new Error("Produto já existente!");
    }

    const products = await prismaClient.product.create({
      data: {
        code,
        name,
        price,
      },
    });

    return products;
  }
}

export { CreateProductsService };
