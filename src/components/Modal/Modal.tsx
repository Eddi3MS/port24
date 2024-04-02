'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Modal = ({
  closeModal,
  children,
  title,
}: {
  closeModal: VoidFunction
  children: React.ReactNode
  title: string
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeModal}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        className="bg-white rounded shadow-lg z-50 relative w-[min(240px,90%)] flex flex-col"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <header className="flex justify-between items-center px-2 py-2 text-xl border-b-[2px] border-zinc-200">
          <span>{title}</span>
          <button
            className="text-zinc-900 hover:text-red-700 cursor-pointer"
            onClick={closeModal}
            aria-label="close modal"
          >
            &times;
          </button>
        </header>

        {children}
      </motion.div>
    </div>
  )
}

export default Modal
