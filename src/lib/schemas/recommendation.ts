import { z } from "zod";

export const recommendationSchema = z.object({
  age: z.number(),
  income: z.number(),
  numDependents: z.number(),
  riskTolerance: z.enum(["low", "medium", "high"]),
});
