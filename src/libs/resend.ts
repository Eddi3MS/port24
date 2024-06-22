'use server'
import { Resend } from 'resend'
import { contactSchema, type ContactSchema } from '@/schemas/contactSchema'

const resend = new Resend(process.env.RESEND_API_KEY)

type SendMessageReturn =
  | {
      message: string
      error: true
    }
  | {
      message: string
      success: true
    }

export const sendMessage = async (
  data: ContactSchema
): Promise<SendMessageReturn> => {
  let parse = contactSchema.safeParse(data)

  if (!parse.success) {
    return {
      message: 'Formato dos dados inválidos. Tente novamente!',
      error: true,
    }
  }

  try {
    await resend.emails.send({
      from: 'portfolio@edsonmarcelo.com.br',
      to: process.env.EMAIL_TO!,
      subject: `Portfolio Message: `,
      html: `<h1 style="text-align: 'center';">Mensagem de: ${parse.data.name}</h1>
    <p style="text-align: 'center';">${parse.data.message}</p>
    <p style="text-align: 'center';">${parse.data.contact}</p>`,
    })

    return { message: 'Mensagem enviada com sucesso!!', success: true }
  } catch (e) {
    return {
      message: 'Falha ao enviar a mensagem. Tente novamente mais tarde!',
      error: true,
    }
  }
}
