import prismaClient from "../../prisma/index";

interface EditRawMaterialsProps {
  name: string;
  stockyQuantity: number;
}

class EditRawMaterialsService {
  async execute(
    { name, stockyQuantity }: EditRawMaterialsProps,
    rawMaterialsId: string,
  ) {
    const rawMaterial = await prismaClient.rawMaterial.findUnique({
      where: {
        id: rawMaterialsId,
      },
    });

    if (!rawMaterial) {
      throw new Error("Raw materials not found!");
    }

    const updateRawMaterials = await prismaClient.rawMaterial.update({
      where: {
        id: rawMaterialsId,
      },
      data: {
        name: name ?? rawMaterial.name,
        stockyQuantity: stockyQuantity ?? rawMaterial.stockyQuantity,
      },
    });

    return { updateRawMaterials };
  }
}

export { EditRawMaterialsService };
