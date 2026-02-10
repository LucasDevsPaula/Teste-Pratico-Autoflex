import prismaClient from "../../prisma/index";

class ListAvaliableProductService {
  async execute() {
    const products = await prismaClient.product.findMany({
      include: {
        materials: {
          include: {
            rawMaterial: true,
          },
        },
      },
    });

    const avaliableProducts = products.map((product) => {
      if (product.materials.length === 0) {
        return {
          ...product,
          max_production: 0,
        };
      }

      const possibleAmounts = product.materials.map((item) => {
        const stock = Number(item.rawMaterial.stockyQuantity);
        const required = Number(item.requiredQuantity);

        if (required === 0) return Infinity;

        return Math.floor(stock / required);
      });

      const maxProduction = Math.min(...possibleAmounts);

      return {
        id: product.id,
        code: product.code,
        name: product.name,
        price: product.price,
        max_production: maxProduction,
        possible_revenue: maxProduction * Number(product.price),
      };
    });

    const producableProducts = avaliableProducts.filter(
      (p) => p.max_production > 0,
    );

    producableProducts.sort((a, b) => Number(b.price) - Number(a.price));

    return producableProducts;
  }
}

export { ListAvaliableProductService };
