import { z } from "zod";

export const TransactioneSchema = z.object({
  nomeCliente: z.string().min(1, "Nome obrigatório"),
  valor: z.number({ invalid_type_error: "Valor deve ser numérico" }),
  contaCliente: z.string().min(1, "Conta obrigatória"),
});