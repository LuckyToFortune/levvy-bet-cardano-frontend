import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="relative bg-stone-900 p-6 rounded-3xl w-[90%] max-w-lg">
        <div className="top-4 right-4 absolute bg-stone-800 rounded-md text-stone-600 hover:text-gray-500 size-10">
          <button
            className="flex justify-center items-center mx-auto text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
