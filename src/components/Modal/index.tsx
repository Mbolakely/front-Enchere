import React from 'react';

interface ModalProps {
 isOpen: boolean;
 onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
 if (!isOpen) {
    return null;
 }

 return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Contenu du Modal</h2>
        <p>Ceci est le contenu du modal.</p>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Fermer le Modal
        </button>
      </div>
    </div>
 );
};

export default Modal;