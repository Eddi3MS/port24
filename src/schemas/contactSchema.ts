import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório.'),
  contact: z
    .string()
    .min(1, 'Campo obrigatório.')
    .refine((value) => {
      let numValue = value.replace(/\D/g, '')
      if (numValue.length === 10 || numValue.length === 11) return true

      return false
    }, 'formatos de telefone inválido.'),
  message: z.string().min(1, 'Campo obrigatório.'),
})

export type ContactSchema = z.infer<typeof contactSchema>
