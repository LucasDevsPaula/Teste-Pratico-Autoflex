import prismaClient from "../../prisma/index";

class DeleteRawMaterialsService {
  async execute(rawMaterialsId: string) {
    const rawMaterial = await prismaClient.rawMaterial.findUnique({
      where: {
        id: rawMaterialsId,
      },
    });

    if (!rawMaterial) {
      throw new Error("Raw materials not found!");
    }

    const deleterawMaterial = await prismaClient.rawMaterial.delete({
      where: {
        id: rawMaterialsId,
      },
    });

    return { deleterawMaterial };
  }
}

export { DeleteRawMaterialsService };
