import { ProfileSchemaDto } from "@/lib/schemas/profile";
import { useSubmit } from "./useSubmit";

export function useSubmitProfile() {
  return useSubmit<ProfileSchemaDto>("api/recommendation");
}
