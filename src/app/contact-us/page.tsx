'use client';

import React, { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [attachments, setAttachments] = useState<FileList | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('company', company);
    formData.append('phone', phone);

    if (attachments) {
      Array.from(attachments).forEach((file, index) =>
        formData.append(`attachment-${index}`, file)
      );
    }

    fetch('https://www.formbackend.com/f/d29d0301d194b1c0', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error('Validation error');
        } else if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage('Form submitted successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">
        Contact Us
      </h1>
      {successMessage.length === 0 && (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="attachments" className="block text-sm font-medium mb-2">
              Attachments
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              onChange={(e) => setAttachments(e.target.files)}
            />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">
            Send
          </button>
        </form>
      )}
      {successMessage.length > 0 && <p className="text-center text-green-500">{successMessage}</p>}
    </div>
  );
}
