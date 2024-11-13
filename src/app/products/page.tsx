'use client';

import React from 'react';

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">Products</h1>

      <div className="max-w-5xl mx-auto bg-gray-800 border-t-4 border-red-600 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
        <p className="text-lg text-gray-300">
          Our exciting range of products will be available soon! Stay tuned for updates.
        </p>
      </div>
    </div>
  );
}

