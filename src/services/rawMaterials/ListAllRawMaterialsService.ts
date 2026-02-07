import prismaClient from "../../prisma/index";

class ListAllRawMaterialsService {
  async execute() {
    const rawMaterials = await prismaClient.rawMaterial.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return { rawMaterials };
  }
}

export { ListAllRawMaterialsService };
