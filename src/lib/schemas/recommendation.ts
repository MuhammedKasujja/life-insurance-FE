import { z } from "zod";

export const recommendationSchema = z.object({
  age: z.coerce.number(),
  income: z.coerce.number(),
  numOfDependants: z.coerce.number(),
  riskTolerance: z.enum(["low", "medium", "high"]),
});
