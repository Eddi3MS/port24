import { Modal } from '@/components'
import React, { ComponentProps, useCallback, useState } from 'react'

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = useCallback(() => setModalIsOpen(true), [])
  const closeModal = useCallback(() => setModalIsOpen(false), [])

  return {
    openModal,
    closeModal,
    Modal: (
      props: Omit<ComponentProps<typeof Modal>, 'closeModal' | 'isOpen'>
    ) => <Modal {...props} closeModal={closeModal} isOpen={modalIsOpen} />,
  }
}

export default useModal
