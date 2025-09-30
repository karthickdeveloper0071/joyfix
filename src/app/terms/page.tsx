'use client';

import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        'By accessing Joy Fix website and services, you agree to these terms',
        'These terms apply to all users, visitors, and customers',
        'We reserve the right to update terms with notice',
        'Continued use constitutes acceptance of updated terms'
      ]
    },
    {
      icon: FileText,
      title: 'Services Description',
      content: [
        'Custom CRM and ERP software development',
        'E-commerce website development',
        'Student management system development',
        'Business process automation solutions',
        'Technical support and maintenance services'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Provide accurate project requirements and information',
        'Cooperate during development and testing phases',
        'Make timely payments as per agreed terms',
        'Use services in compliance with applicable laws',
        'Maintain confidentiality of login credentials'
      ]
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      content: [
        'Custom software developed becomes client property upon full payment',
        'Joy Fix retains rights to general methodologies and frameworks',
        'Third-party licenses and components remain with original owners',
        'Client must respect all software licenses and copyrights'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations of Liability',
      content: [
        'Services provided "as is" without warranties',
        'Liability limited to project contract value',
        'Not liable for indirect or consequential damages',
        'Client responsible for data backup and security',
        'Force majeure events exclude liability'
      ]
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      content: [
        'Good faith negotiation as first step',
        'Mediation through agreed neutral party',
        'Arbitration under applicable commercial rules',
        'Governing law based on client jurisdiction',
        'Legal proceedings in appropriate courts'
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
            <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These terms govern your use of Joy Fix services and establish the 
              framework for our professional relationship.
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

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Project payments as per signed contract terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Late payment fees may apply after 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Refunds subject to project completion status</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>All prices exclude applicable taxes unless stated</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate services with written notice. Upon termination:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Payment due for completed work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Delivery of completed project components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Return of confidential information</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="mb-4">
                Contact us for clarification or to discuss specific project terms.
              </p>
              <div className="space-y-2">
                <p>📧 karthick123svks@gmail.com</p>
                <p>📞 +1 (555) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}