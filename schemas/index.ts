import {z} from 'zod'

export const registerSchema = z.object({
      email: z.string().email(),
      name: z.string().min(3, {
            message: "Name is required"
      }).max(255),
      password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
      confirmPassword: z.string().min(1, 'Password confirmation is required'),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Password do not match',
})

export const loginSchema = z.object({
      email: z.string().email(),
      password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
})

export const addToCartSchema = z.object({
      quantity: z.number(),
      packageId: z.string(),
      packageDuration: z.number(),
})

export const checkoutSchema = z.object({
      name: z.string().min(1, "First name is required"),
      phoneNumber: z.string().min(1, "Phone number is required"),
      email: z.string().email("Invalid email").min(1, "Email is required"),
      price: z.number(),
      packageIds: z.array(z.string()).nonempty("At least one package ID is required"),
      billingAddress: z.string().min(1, "Billing address is required"),
      shippingAddress: z.string().min(1, "Shipping address is required"),
    });

export const contactSchema = z.object({
      name: z.string().min(1, "First name is required"),
      phoneNumber: z.string().min(1, "Phone number is required"),
      email: z.string().email("Invalid email").min(1, "Email is required"),
      service: z.string().min(1, "Service is required"),
      description: z.string().optional(),
      company: z.string().optional(),
})