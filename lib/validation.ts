import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
  phoneNumber: z.string().trim().min(1, "Cannot be empty"),
  shippingAddress: z.string().trim().min(1, "Cannot be empty"),
  shippingCity: z.string().min(1, "Shipping city is required"),
  shippingPostal: z.string().min(1, "Shipping postal code is required"),
  billingAddress: z.string().trim().min(1, "Cannot be empty"),
  billingCity: z.string().min(1, "Billing city address is required"),
  billingPostal: z.string().min(1, "Billing postal code address is required"),
  company: z.string().optional(),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
