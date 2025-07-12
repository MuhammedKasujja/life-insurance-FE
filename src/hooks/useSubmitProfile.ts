import { RecommendationSchemaDto } from "@/lib/schemas/recommendation";
import { useSubmit } from "./useSubmit";

export function useSubmitProfile() {
  return useSubmit<RecommendationSchemaDto>("api/recommendation");
}
