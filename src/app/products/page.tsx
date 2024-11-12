'use client';

import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/get-stripe-products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">Products</h1>

      {loading ? (
        <p className="text-center text-gray-300">Loading products...</p>
      ) : (
        <ul className="max-w-5xl mx-auto space-y-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-gray-800 border-t-4 border-red-600 rounded-lg p-6 shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center space-x-6">
                <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="text-gray-300">{product.description}</p>
                  {product.prices && product.prices[0] && (
                    <p className="text-lg font-semibold mt-2">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: product.prices[0].currency,
                      }).format(product.prices[0].unit_amount / 100)}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleCheckout(product.prices[0].id)}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Buy Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
