'use client';

import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      {/* Main Title */}
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">
        About Cyber Alamo
      </h1>

      {/* About Cyber Alamo Section */}
      <section className="max-w-5xl mx-auto mb-16 bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-8 shadow-lg">
        <p className="text-lg leading-8 text-gray-300">
          {/* Expanded content */}
          Cyber Alamo is a leading technology company specializing in **embedded cyber security**, **artificial intelligence**, and **web security** solutions. Our expertise lies in developing innovative and robust solutions that secure the digital landscape of embedded systems, leverage AI for enhanced security, and protect web applications from evolving threats.
          <br /><br />
          Founded with a vision to revolutionize the field of cyber security, we have consistently pushed the boundaries of technology to provide our clients with state-of-the-art solutions. Our team of seasoned professionals brings together a wealth of knowledge in embedded systems, AI development, and web security protocols, ensuring that we stay ahead of the curve in an ever-changing digital environment.
          <br /><br />
          At Cyber Alamo, we understand the unique challenges posed by embedded devices and the critical need for security at the hardware level. Our embedded cyber security solutions are designed to safeguard devices from the ground up, integrating seamlessly with existing systems without compromising performance.
          <br /><br />
          Our commitment to AI-driven security allows us to develop intelligent systems capable of detecting and responding to threats in real-time. By harnessing machine learning and advanced analytics, we empower organizations to anticipate and mitigate risks before they impact operations.
          <br /><br />
          Web security remains a cornerstone of our services, where we implement comprehensive strategies to protect applications from vulnerabilities and cyber attacks. Our holistic approach ensures that from code development to deployment, every aspect of your web presence is fortified against potential threats.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-16 max-w-5xl mx-auto bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Our Mission
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-8 text-gray-300 text-center">
            Our mission is to be at the forefront of innovation in embedded cyber security, AI, and web security. We aim to provide unparalleled solutions that not only protect but also empower businesses to thrive in a secure digital world. By combining our expertise in embedded systems with cutting-edge AI technologies, we strive to create intelligent security solutions that adapt to the ever-evolving threat landscape.
            <br /><br />
            We are dedicated to fostering a culture of excellence, integrity, and continuous improvement. Our goal is to build lasting partnerships with our clients by delivering exceptional value and consistently exceeding expectations. Through collaboration and a deep understanding of our clients' needs, we endeavor to develop customized solutions that drive success and inspire confidence in their digital operations.
            <br /><br />
            At Cyber Alamo, we believe that security is not just about defense but also about enabling growth and innovation. Our mission extends beyond safeguarding assets; it's about empowering organizations to explore new possibilities without fear, knowing that their systems are protected by the best in the industry.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Our Values
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Innovation',
              description: 'We embrace creativity and strive to bring cutting-edge solutions to our clients.',
            },
            {
              title: 'Integrity',
              description: 'We uphold the highest ethical standards in all our actions.',
            },
            {
              title: 'Customer Focus',
              description: 'Our clients are at the heart of everything we do.',
            },
            {
              title: 'Excellence',
              description: 'We are committed to delivering quality in every project.',
            },
            {
              title: 'Collaboration',
              description: 'We believe in the power of teamwork and open communication.',
            },
            {
              title: 'Continuous Learning',
              description: 'We foster a culture of growth and knowledge sharing.',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Expertise',
              description: 'Our team has extensive experience across embedded systems, AI, and web security.',
            },
            {
              title: 'Customized Solutions',
              description: 'We tailor our services to meet your specific business needs.',
            },
            {
              title: 'Proven Track Record',
              description: 'We have a history of delivering successful projects on time and within budget.',
            },
            {
              title: 'Innovative Approach',
              description: 'We leverage the latest technologies to give you a competitive edge.',
            },
            {
              title: 'Comprehensive Services',
              description: 'We offer a wide range of services, from embedded security to AI solutions.',
            },
            {
              title: 'Dedicated Support',
              description: 'Our team is committed to providing exceptional customer service.',
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="mb-16 max-w-5xl mx-auto bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Our Approach
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-8 text-gray-300 text-center">
            Our approach is centered around understanding the unique challenges and goals of each client. We begin by conducting a thorough analysis of your current systems and identifying potential vulnerabilities and opportunities for improvement. This allows us to develop a customized strategy that aligns with your business objectives and addresses your specific needs in embedded cyber security, AI integration, and web security.
            <br /><br />
            Collaboration is key to our process. We work closely with your team throughout the project lifecycle, ensuring clear communication and transparency at every stage. Our experts employ agile methodologies to adapt to changing requirements and deliver solutions that are both flexible and scalable.
            <br /><br />
            We prioritize innovation and leverage the latest technologies to stay ahead of emerging threats. By integrating advanced AI algorithms and machine learning models, we enhance the effectiveness of our security solutions, providing proactive defense mechanisms that evolve with the threat landscape.
            <br /><br />
            Our commitment to excellence means we don't just deliver a product; we provide ongoing support and continuous improvement to ensure that your systems remain secure and efficient over time. We believe in building long-term partnerships based on trust, reliability, and mutual success.
          </p>
        </div>
      </section>
    </div>
  );
}
