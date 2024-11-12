'use client';

import React from 'react';

const solutionCategories = [
  {
    category: 'Offensive Security',
    solutions: [
      {
        name: 'Penetration Testing',
        description:
          'Identify and exploit vulnerabilities in your systems to improve your security posture.',
      },
      {
        name: 'Red Team Assessments',
        description:
          'Simulate real-world attacks to test your defenses and response capabilities.',
      },
      {
        name: 'Social Engineering Testing',
        description:
          'Assess the human element of security through phishing, pretexting, and other tactics.',
      },
      {
        name: 'Vulnerability Assessments',
        description:
          'Systematically identify and prioritize vulnerabilities in your infrastructure.',
      },
      {
        name: 'Application Security Testing',
        description:
          'Analyze applications for security weaknesses using automated and manual methods.',
      },
      {
        name: 'Physical Security Assessments',
        description:
          'Evaluate the physical security controls of your facilities to prevent unauthorized access.',
      },
    ],
  },
  {
    category: 'Defensive Security',
    solutions: [
      {
        name: 'Endpoint Detection and Response (EDR)',
        description:
          'Protect endpoints with advanced detection and response capabilities.',
      },
      {
        name: 'Virtual CISO',
        description:
          'Provide strategic security leadership without the full-time cost.',
      },
      {
        name: 'Incident Response and Management',
        description:
          'Rapidly contain and mitigate security incidents to minimize impact.',
      },
      {
        name: 'Zero Trust Network Architecture',
        description:
          'Enhance security through continuous verification and least privilege access.',
      },
      {
        name: 'Security Awareness Training',
        description:
          'Educate employees to recognize and respond to security threats effectively.',
      },
      {
        name: 'Security Operations Center (SOC) Services',
        description:
          'Continuous monitoring and analysis of security events to detect and respond to threats.',
      },
    ],
  },
  {
    category: 'AI Solutions',
    solutions: [
      {
        name: 'AI-Powered Predictive Maintenance',
        description:
          'Leverage AI to predict and manage maintenance for industrial applications.',
      },
      {
        name: 'AI-Based Risk Assessment',
        description:
          'Automate and enhance risk assessments using artificial intelligence.',
      },
      {
        name: 'Data Visualization with AI Integration',
        description:
          'Develop AI-powered data visualization tools for actionable insights.',
      },
      {
        name: 'Natural Language Processing (NLP) Solutions',
        description:
          'Harness NLP to analyze customer feedback and improve engagement.',
      },
      {
        name: 'Machine Learning Model Training',
        description:
          'Custom train machine learning models specific to your business needs.',
      },
      {
        name: 'AI Chatbots and Virtual Assistants',
        description:
          'Develop AI-driven chatbots and virtual assistants for customer service.',
      },
    ],
  },
  {
    category: 'Development',
    solutions: [
      {
        name: 'Custom Mobile Application Development',
        description:
          'Design and deploy user-focused mobile apps for Android and iOS.',
      },
      {
        name: 'Cross-Platform Mobile Development',
        description:
          'Create cross-platform apps with consistent performance and features.',
      },
      {
        name: 'Web Application Development',
        description:
          'Build web applications optimized for security, scalability, and performance.',
      },
      {
        name: 'NetSuite CRM Development',
        description:
          'Customize NetSuite CRM to streamline customer relationship management.',
      },
      {
        name: 'Salesforce CRM Development',
        description:
          'Develop customized Salesforce CRM solutions aligned with your workflows.',
      },
      {
        name: 'Blockchain Integration for Business Applications',
        description:
          'Implement blockchain technology to improve data transparency and security.',
      },
    ],
  },
  {
    category: 'OpenStack Solutions',
    solutions: [
      {
        name: 'OpenStack Deployment',
        description:
          'Deploy and manage your cloud infrastructure efficiently with OpenStack.',
      },
      {
        name: 'OpenStack Management',
        description:
          'Comprehensive management services for your OpenStack environments.',
      },
      {
        name: 'OpenStack Customization',
        description:
          'Customize OpenStack to meet your specific business requirements.',
      },
      {
        name: 'OpenStack Training and Support',
        description:
          'Provide training and ongoing support for your OpenStack environment.',
      },
      {
        name: 'OpenStack Upgrade Services',
        description:
          'Ensure your OpenStack deployment stays up-to-date with the latest features.',
      },
      {
        name: 'OpenStack Integration',
        description:
          'Integrate OpenStack with your existing systems and workflows.',
      },
    ],
  },
  {
    category: 'XCP-ng/Xen Solutions',
    solutions: [
      {
        name: 'XCP-ng Deployment',
        description:
          'Deploy XCP-ng for efficient virtualization solutions.',
      },
      {
        name: 'Xen Hypervisor Integration',
        description:
          'Integrate Xen hypervisor into your infrastructure.',
      },
      {
        name: 'XCP-ng Management',
        description:
          'Manage and monitor your XCP-ng environment effectively.',
      },
      {
        name: 'XCP-ng Customization',
        description:
          'Tailor XCP-ng to fit your specific data center needs.',
      },
      {
        name: 'XCP-ng Migration Services',
        description:
          'Migrate existing workloads to XCP-ng with minimal downtime.',
      },
      {
        name: 'XCP-ng Support and Training',
        description:
          'Provide comprehensive support and training for your team.',
      },
    ],
  },
  {
    category: 'Citrix Solutions',
    solutions: [
      {
        name: 'Citrix Virtualization',
        description:
          'Optimize your virtualization infrastructure with Citrix solutions.',
      },
      {
        name: 'Citrix Cloud Services',
        description:
          'Leverage Citrix Cloud for scalable and flexible IT environments.',
      },
      {
        name: 'Citrix Networking',
        description:
          'Enhance network performance with Citrix ADC and SD-WAN.',
      },
      {
        name: 'Citrix Workspace',
        description:
          'Implement Citrix Workspace for unified access to apps and data.',
      },
      {
        name: 'Citrix Support and Maintenance',
        description:
          'Provide ongoing support and maintenance for your Citrix environment.',
      },
      {
        name: 'Citrix Migration Services',
        description:
          'Seamlessly migrate to Citrix solutions with expert assistance.',
      },
    ],
  },
  {
    category: 'RISC-V Solutions',
    solutions: [
      {
        name: 'Custom RISC-V Hardware Development',
        description:
          'Design and develop customized RISC-V-based hardware solutions.',
      },
      {
        name: 'RISC-V Firmware Optimization',
        description:
          'Optimize firmware for RISC-V processors for enhanced performance.',
      },
      {
        name: 'RISC-V Core IP Customization',
        description:
          'Customize RISC-V core IP for unique configurations and capabilities.',
      },
      {
        name: 'RISC-V System-on-Chip (SoC) Development',
        description:
          'Develop RISC-V-based SoCs with integrated peripherals and security.',
      },
      {
        name: 'RISC-V Virtualization Solutions',
        description:
          'Leverage RISC-V virtualization for improved resource management.',
      },
      {
        name: 'RISC-V Open-Source Software Stack',
        description:
          'Develop open-source software stacks optimized for RISC-V architecture.',
      },
    ],
  },
  {
    category: 'PCB Development Solutions',
    solutions: [
      {
        name: 'Custom PCB Design',
        description:
          'Design custom PCBs tailored to specific application requirements.',
      },
      {
        name: 'Multi-Layer PCB Design',
        description:
          'Develop multi-layer PCBs for compact, high-density applications.',
      },
      {
        name: 'High-Frequency PCB Design',
        description:
          'Create PCBs for high-frequency applications with minimal interference.',
      },
      {
        name: 'IoT Hardware and PCB Prototyping',
        description:
          'Design and prototype PCBs specifically for IoT devices.',
      },
      {
        name: 'PCB Assembly and Testing',
        description:
          'Provide full assembly and testing services for your PCBs.',
      },
      {
        name: 'Rapid PCB Prototyping',
        description:
          'Utilize rapid prototyping to accelerate time-to-market.',
      },
    ],
  },
  {
    category: 'Yocto and seL4 Solutions',
    solutions: [
      {
        name: 'Custom Embedded Linux Development with Yocto',
        description:
          'Develop custom embedded Linux distributions using the Yocto Project.',
      },
      {
        name: 'seL4 Microkernel Integration',
        description:
          'Integrate seL4 microkernel for high-assurance security in embedded systems.',
      },
      {
        name: 'Real-Time Operating Systems (RTOS) Development',
        description:
          'Implement RTOS solutions for time-critical embedded applications.',
      },
      {
        name: 'Device Driver Development',
        description:
          'Develop and optimize device drivers for custom hardware.',
      },
      {
        name: 'Board Support Package (BSP) Development',
        description:
          'Create BSPs to enable hardware-specific support in embedded systems.',
      },
      {
        name: 'Embedded System Security Audits',
        description:
          'Perform security audits on embedded systems to identify vulnerabilities.',
      },
    ],
  },
  {
    category: 'Embedded Security',
    solutions: [
      {
        name: 'Secure Boot Implementation',
        description:
          'Ensure only trusted software runs on your embedded devices.',
      },
      {
        name: 'Hardware Security Module (HSM) Integration',
        description:
          'Integrate HSMs for secure key storage and cryptographic operations.',
      },
      {
        name: 'Firmware Security Analysis',
        description:
          'Analyze firmware for vulnerabilities and enhance security.',
      },
      {
        name: 'Secure Communication Protocols',
        description:
          'Implement secure communication protocols in embedded devices.',
      },
      {
        name: 'Tamper Detection and Response',
        description:
          'Design systems that detect and respond to physical tampering attempts.',
      },
      {
        name: 'Security Testing for Embedded Systems',
        description:
          'Perform comprehensive security testing on embedded devices.',
      },
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      {/* Main Title */}
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">
        Our Solutions
      </h1>

      {/* Content Wrapper */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Render Solutions by Category */}
        {solutionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Title */}
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
              {category.category}
            </h2>

            {/* Solutions Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {category.solutions.map((solution, solutionIndex) => (
                <div
                  key={solutionIndex}
                  className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
