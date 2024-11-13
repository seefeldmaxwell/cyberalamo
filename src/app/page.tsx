// src/app/page.tsx
/* eslint-disable */

'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[50vh]">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Welcome to the Future
        </h1>
      </section>

      {/* Our Focus Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Our Focus
        </h2>
        <div className="max-w-screen-xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Embedded Cyber Security',
              description: `Our Embedded Cyber Security solutions are designed to protect the critical infrastructure of embedded systems that are increasingly becoming targets of sophisticated cyber threats. We implement advanced security measures that safeguard embedded devices at every layer, from hardware to software, ensuring the integrity, confidentiality, and availability of your systems. Our expertise includes real-time monitoring, intrusion detection, and secure firmware updates, providing comprehensive protection against current and emerging threats.`,
            },
            {
              title: 'Artificial Intelligence',
              description: `We harness the power of Artificial Intelligence to revolutionize your security posture. By integrating AI and machine learning algorithms, we develop intelligent systems capable of detecting anomalies, predicting potential threats, and automating responses in real-time. Our AI-driven solutions enhance operational efficiency, reduce false positives, and empower your organization with proactive defense mechanisms that adapt and learn from new cyber attack patterns.`,
            },
            {
              title: 'Web Security',
              description: `Our Web Security services focus on protecting your online presence from a wide range of cyber threats. We provide comprehensive solutions that include vulnerability assessments, penetration testing, and the implementation of robust security protocols. By securing your web applications, APIs, and websites, we help prevent data breaches, unauthorized access, and other malicious activities, ensuring that your digital assets remain safe and your customers' trust is maintained.`,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">About Us</h2>
            <p className="text-lg leading-8 text-gray-300">
              {/* Expanded About Us content */}
              Cyber Alamo is a leading technology company specializing in embedded cyber security, AI, and web security solutions. Our mission is to revolutionize the field of cyber security by providing innovative and robust solutions that secure the digital landscape of embedded systems and web applications.
              <br /><br />
              With a team of seasoned professionals, we bring together a wealth of knowledge in embedded systems, artificial intelligence, and web security protocols. Our expertise allows us to develop cutting-edge solutions that protect against the ever-evolving threats in today's digital world.
              <br /><br />
              At Cyber Alamo, we understand the unique challenges faced by organizations in securing their embedded devices and web applications. We are committed to delivering customized solutions that meet the specific needs of our clients, ensuring the highest levels of protection without compromising performance.
              <br /><br />
              Our approach is centered around innovation, integrity, and customer focus. We strive to build lasting partnerships with our clients by delivering exceptional value and exceeding expectations. Through collaboration and a deep understanding of our clients' needs, we develop solutions that drive success and inspire confidence in their digital operations.
              <br /><br />
              As pioneers in the industry, we continuously invest in research and development to stay ahead of emerging threats and technological advancements. Our commitment to excellence ensures that we not only protect your assets but also empower your organization to explore new possibilities securely.
            </p>
          </div>
        </div>
      </section>

      {/* Blog and Products Section */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Explore More</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {/* Blog Section */}
            <div className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Blog</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with the latest news, insights, and trends in cyber security and AI.
              </p>
              <Link href="/solutions" className="text-red-600 hover:text-red-400">
                Visit our Blog &rarr;
              </Link>
            </div>
            {/* Products Section */}
            <div className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Products</h3>
              <p className="text-gray-300 mb-4">
                Discover our range of products designed to enhance your security infrastructure.
              </p>
              <Link href="/solutions" className="text-red-600 hover:text-red-400">
                Browse Products &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
