'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, BarChart3, Globe } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: [
        'Session management',
        'Security tokens',
        'Form submissions',
        'User preferences'
      ],
      required: true
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: [
        'Page views and traffic',
        'User behavior patterns',
        'Performance metrics',
        'Error tracking'
      ],
      required: false
    },
    {
      icon: Globe,
      title: 'Functional Cookies',
      description: 'Enhance website functionality and personalization',
      examples: [
        'Language preferences',
        'Theme settings',
        'Contact form data',
        'Chat functionality'
      ],
      required: false
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Vercel Analytics',
      purpose: 'Website performance monitoring',
      dataCollected: 'Page views, load times, user interactions',
      retention: '30 days'
    },
    {
      name: 'EmailJS',
      purpose: 'Contact form functionality',
      dataCollected: 'Form submission data',
      retention: 'As per EmailJS policy'
    },
    {
      name: 'Google Fonts',
      purpose: 'Typography and design',
      dataCollected: 'IP address, browser information',
      retention: 'As per Google policy'
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
            <Cookie className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how Joy Fix uses cookies and similar technologies to improve 
              your browsing experience and website functionality.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your 
                preferences and improving website functionality.
              </p>
              <p>
                We use cookies responsibly and transparently, ensuring your privacy is protected 
                while enhancing your experience with our services.
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Types of Cookies We Use
            </h2>
            
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      type.required 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {type.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Third Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              We use trusted third-party services that may set their own cookies:
            </p>
            
            <div className="space-y-6">
              {thirdPartyServices.map((service, index) => (
                <div key={service.name} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.purpose}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">Data Collected</h5>
                      <p className="text-sm text-gray-600">{service.dataCollected}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">Retention</h5>
                      <p className="text-sm text-gray-600">{service.retention}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        External Service
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>You have control over cookies on our website:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Block all cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set cookie preferences</li>
                    <li>• Receive cookie notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Impact of Disabling</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Some features may not work</li>
                    <li>• Preferences won&apos;t be saved</li>
                    <li>• Contact forms may not function</li>
                    <li>• Analytics won&apos;t track visits</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="mb-6">
              If you have questions about our cookie policy or need help managing your preferences, 
              we&apos;re here to help.
            </p>
            <div className="space-y-2">
              <p>📧 karthick123svks@gmail.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}