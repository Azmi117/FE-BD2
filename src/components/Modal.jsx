// Modal.jsx
import React from 'react';

const Modal = ({ message, onClose, show }) => {
  if (!show) return null; // Jika show adalah false, jangan render modal

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-5 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl mb-4">Congratulations!</h2>
        <p className='w-5/6 flex flex-wrap'>{message}</p>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
