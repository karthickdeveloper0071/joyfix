'use client';

import { motion } from 'framer-motion';
import { FileSpreadsheet, Mail, Clock, CheckCircle, BarChart3, Users } from 'lucide-react';

export default function LeadManagementInfo() {
  const features = [
    {
      icon: FileSpreadsheet,
      title: 'Google Sheets Integration',
      description: 'All contact form submissions automatically saved to Google Sheets for easy tracking and management.'
    },
    {
      icon: Mail,
      title: 'Email Notifications',
      description: 'Receive instant email notifications while data is simultaneously stored in your lead management system.'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Track submission time, lead status, and follow-up progress all in one organized spreadsheet.'
    },
    {
      icon: BarChart3,
      title: 'Lead Analytics',
      description: 'Analyze lead sources, conversion rates, and service interests to optimize your business strategy.'
    }
  ];

  const sheetColumns = [
    'Date/Time', 'Name', 'Email', 'Company', 'Phone', 'Service', 'Message', 'Status'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Lead Management System
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every contact form submission is automatically saved to Google Sheets and sent to your email, 
            giving you a complete lead management solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Lead Data Structure
              </h3>
              <p className="text-gray-600 mb-6">
                Each contact form submission creates a new row in your Google Sheet with all the essential information:
              </p>
              
              <div className="space-y-3">
                {sheetColumns.map((column, index) => (
                  <motion.div
                    key={column}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{column}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <Users className="h-12 w-12 text-blue-200 mb-4" />
              <h4 className="text-xl font-bold mb-3">Lead Management Benefits</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Track all inquiries in one place</li>
                <li>• Monitor lead conversion rates</li>
                <li>• Analyze service demand patterns</li>
                <li>• Follow up with prospects efficiently</li>
                <li>• Export data for CRM integration</li>
                <li>• Generate business insights</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 inline-block">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div className="text-left">
                <h4 className="font-semibold text-green-900">System Status: Active</h4>
                <p className="text-green-700 text-sm">
                  Contact form is connected to Google Sheets and email notifications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}