import { z } from "zod";

export const createProductRawMaterialSchema = z.object({
  body: z.object({
    codeProduct: z
      .string({ message: "O código precisa ser um texto" })
      .min(4, { message: "O código precisa ter no mínimo 4 caractéres." }),

    materials: z
      .array(
        z.object({
          codeRawMaterial: z
            .string({ message: "O código precisa ser um texto" })
            .min(4, {
              message: "O código precisa ter no mínimo 4 caractéres.",
            }),
          requiredQuantity: z
            .number({ message: " A quantidade é obrigatótia" })
            .positive({ message: "A quantidade precisa ser maior que zero" }),
        }),
      )
      .min(1, { message: "Você precisa enviar pelo menos uma matéria-prima." }),
  }),
});
