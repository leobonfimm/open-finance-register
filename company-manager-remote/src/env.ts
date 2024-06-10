import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_BASE_API_URL: z.string(),
  VITE_PAGINATION_PER_PAGE: z.string().transform((value) => Number(value)),
})

export const env = envSchema.parse(import.meta.env)
