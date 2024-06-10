import { z } from 'zod'

const envSchema = z.object({
  VITE_PASSWORD_SECRET_KEY: z.string(),
  VITE_EXPIRATION_TIME_COOKIE: z.string().transform((value) => Number(value)),
})

export const env = envSchema.parse(import.meta.env)
