'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Contact information (name, email, phone number)',
        'Company details and business requirements',
        'Project specifications and technical requirements',
        'Communication records and support interactions',
        'Website usage data and analytics'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide software development services',
        'Communicate about projects and support',
        'Improve our services and website',
        'Send important updates and notifications',
        'Comply with legal obligations'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security updates',
        'Limited access to authorized personnel only',
        'Regular security audits and monitoring',
        'Compliance with international data protection laws'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access your personal data',
        'Correct inaccurate information',
        'Request data deletion',
        'Data portability',
        'Withdraw consent at any time'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how Joy Fix collects, 
              uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use trusted third-party services to enhance our website functionality:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>EmailJS:</strong> For contact form submissions</li>
                  <li>• <strong>Google Sheets:</strong> For lead management (optional)</li>
                  <li>• <strong>Vercel:</strong> For website hosting and analytics</li>
                </ul>
                <p>
                  These services have their own privacy policies and data handling practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have questions about this Privacy Policy or your personal data, contact us:
                </p>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>karthick123svks@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}