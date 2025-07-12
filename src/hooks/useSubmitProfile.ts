import { ProfileSchemaDto } from "@/lib/schemas/profile";
import { useSubmit } from "./useSubmit";
import { RecommendationResponseDto } from "@/lib/schemas/recommendation";

export function useSubmitProfile() {
  return useSubmit<ProfileSchemaDto, RecommendationResponseDto>(
    "api/recommendation"
  );
}
