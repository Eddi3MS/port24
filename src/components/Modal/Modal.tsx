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
    <div className="fixed inset-0 flex items-center justify-center animate-[fadeIn_200ms_linear_forwards]">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white rounded shadow-lg z-50 relative w-[min(240px,90%)] flex flex-col animate-[dropDown_300ms_linear_forwards]">
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
  )
}

export default Modal
