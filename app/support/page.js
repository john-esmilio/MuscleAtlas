"use client"
import React, { useState } from 'react';
import Head from 'next/head';

/**
 * 
 * @Author: Saffee
 * @Date: 2023-12-05
 * @Description: The support page is a form that allows users to send a message to the site administrator.
 */
const SupportPage = () => {
    // State hooks for storing user inputs for name, email, and message.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    // handleSubmit function will be called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

    // Render function for the SupportPage component.
  return (
    <div>
      <Head>
        <title>Support | MuscleAtlas</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Support Form</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-48" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SupportPage;
