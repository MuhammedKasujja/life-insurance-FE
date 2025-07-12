import { z } from "zod";

export const RecommendationSchema = z.object({
  age: z.coerce.number().min(15).max(90),
  income: z.coerce.number().min(500).max(1_000_000),
  numOfDependants: z.coerce.number().max(10, "Dependants must not exceed 10"),
  riskTolerance: z.enum(["low", "medium", "high"]),
});

export type RecommendationSchemaDto = z.infer<typeof RecommendationSchema>
