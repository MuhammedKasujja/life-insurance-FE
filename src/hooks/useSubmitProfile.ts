import { useSubmit } from "./useSubmit";

export function useSubmitProfile() {
  return useSubmit("api/recommendation");
}
