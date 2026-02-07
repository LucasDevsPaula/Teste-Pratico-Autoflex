import prismaClient from "../../prisma/index";

interface CreateRawMaterialsProps {
  code: string;
  name: string;
  stockyQuantity: number;
}

class CreateRawMaterialService {
  async execute({ code, name, stockyQuantity }: CreateRawMaterialsProps) {
    console.log(code, name, stockyQuantity);

    const rawMaterialAlreadyExists = await prismaClient.rawMaterial.findUnique({
      where: {
        code: code,
      },
    });

    if (rawMaterialAlreadyExists) {
      throw new Error("Raw Material already exists");
    }

    const rawMaterial = await prismaClient.rawMaterial.create({
      data: {
        code: code,
        name: name,
        stockyQuantity: stockyQuantity,
      },
    });

    return { rawMaterial };
  }
}

export { CreateRawMaterialService };
