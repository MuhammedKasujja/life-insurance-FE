import z from "zod";

export const RecommendationResponseSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type RecommendationResponseDto = z.infer<
  typeof RecommendationResponseSchema
>;
