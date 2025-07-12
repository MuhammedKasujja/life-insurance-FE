import { z } from "zod";

export const ProfileSchema = z.object({
  age: z.coerce
    .number({ required_error: "Age is required", message: "Age is required" })
    .min(15, "Only 15 and above are eligible")
    .max(90, "Not eligible"),
  income: z.coerce
    .number({
      required_error: "Monthly income is required",
      message: "Monthly income is required",
    })
    .min(500)
    .max(1_000_000),
  numOfDependants: z.coerce
    .number()
    .max(10, "Dependants must not exceed 10")
    .optional(),
  riskTolerance: z.enum(["low", "medium", "high"], {
    required_error: "Field is required",
    message: "Field is required",
  }),
});

export type ProfileSchemaDto = z.infer<typeof ProfileSchema>;
