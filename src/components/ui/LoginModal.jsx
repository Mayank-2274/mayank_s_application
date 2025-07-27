'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The form's `required` attributes handle the browser-level validation.
    // This check is an extra layer of validation before submitting.
    if (name.trim() && phone.trim()) {
      onSubmit({ name, phone });
    }
  };

  const modalContent = (
    // Modal Overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60">
      {/* Modal Content */}
      <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required // Added the required attribute
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-4 py-2 font-bold text-white transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-dark focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  if (isBrowser && isOpen) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default LoginModal;
