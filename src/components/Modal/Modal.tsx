import React from 'react'

const Modal = ({
  closeModal,
  isOpen,
  children,
  title,
}: {
  closeModal: VoidFunction
  isOpen: boolean
  children: React.ReactNode
  title: string
}) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded shadow-lg z-50 relative max-w-[min(320px,90%)] flex flex-col">
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
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
