import { z } from "zod";

export const createRawMaterialSchema = z.object({
  body: z.object({
    code: z
      .string({ message: "O código precisa ser um texto" })
      .min(4, { message: "O código precisa ter no mínimo 4 caractéres." }),
    name: z
      .string({ message: "O nome precisa ser um texto" })
      .min(3, { message: "O nome precisa ter no mínimo 3 letras" }),
    stockyQuantity: z.number({ message: "A quantitade precisa ser um número" }),
  }),
});
