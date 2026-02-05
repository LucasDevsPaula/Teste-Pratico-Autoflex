import { z } from "zod";

export const createProductsSchema = z.object({
  body: z.object({
    name: z
      .string({ message: "O nome precisa ser um texto" })
      .min(3, { message: "O nome precisa ter no mínimo 3 letras" }),
    price: z.number({ message: "O preço precisa ser um número" }),
  }),
});
