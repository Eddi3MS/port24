'use client'

import { Button, Input, Modal, Section, Socials, Textarea } from '@/components'
import { sendMessage } from '@/libs/resend'
import { contactSchema, type ContactSchema } from '@/schemas/contactSchema'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence } from 'framer-motion'
import { ChangeEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const initFeedback = {
  title: '',
  message: '',
}

const Contact = () => {
  const [feedback, setFeedback] = useState(initFeedback)

  const clearFeedback = () => {
    setFeedback(initFeedback)
  }

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    register,
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      contact: '',
      message: '',
    },
  })

  const submitMessage = async (data: ContactSchema) => {
    try {
      const response = await sendMessage(data)

      const isSuccess = 'success' in response
      setFeedback({
        title: isSuccess ? 'Sucesso!!' : 'Algo deu errado!',
        message: response.message,
      })

      if (isSuccess) {
        reset()
      }
    } catch (error) {
      setFeedback({
        title: 'Algo deu errado!',
        message:
          'Não foi possível se conectar ao servidor. Verifique sua internet e tente novamente.',
      })
    }
  }

  return (
    <Section id="contact-me" title="Contato">
      <form onSubmit={handleSubmit(submitMessage)} className="grid gap-5">
        <Input
          label="Nome:"
          type="text"
          id="name"
          {...register('name')}
          error={errors.name?.message}
        />

        <Controller
          name="contact"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Telefone:"
              id="contact"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const onlyNumbers = formatPhoneNumber(e.target.value)
                onChange(onlyNumbers)
              }}
              error={errors.contact?.message}
            />
          )}
        />

        <Textarea
          label="Mensagem:"
          id="message"
          rows={3}
          {...register('message')}
          error={errors.message?.message}
        />

        <Button className="mt-5" disabled={isSubmitting}>
          {isSubmitting ? 'enviando..' : 'enviar'}
        </Button>
      </form>

      <Socials className="justify-center py-5" />
      <AnimatePresence>
        {!!feedback.title && (
          <Modal title={feedback.title} closeModal={clearFeedback}>
            <div className="px-2 py-2 flex flex-col justify-between flex-1">
              <div className="flex-1 flex p-8 items-center justify-center">
                <span className="max-w-xs text-center">{feedback.message}</span>
              </div>
              <Button onClick={clearFeedback}>OK</Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  )
}

export default Contact
