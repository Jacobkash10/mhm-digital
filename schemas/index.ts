import {z} from 'zod'

export const registerSchema = z.object({
      email: z.string().email(),
      name: z.string().min(3, {
            message: "Veuillez renseigner le nom"
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