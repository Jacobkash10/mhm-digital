import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
  phoneNumber: z.string().trim().min(1, "Cannot be empty"),
  shippingAddress: z.string().trim().min(1, "Cannot be empty"),
  billingAddress: z.string().trim().min(1, "Cannot be empty"),
  company: z.string().optional(),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
