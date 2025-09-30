'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Globe, 
  Brain, 
  Zap,
  BarChart3,
  ArrowRight,
  Bot,
  TrendingUp,
  Shield,
  Clock,
  Receipt
} from 'lucide-react';

export default function InvoicePage() {
  const features = [
    {
      icon: FileText,
      title: 'Automated Invoice Generation',
      description: 'Create professional invoices automatically with customizable templates and branding'
    },
    {
      icon: Calculator,
      title: 'Multi-Currency Billing',
      description: 'Handle international transactions with automatic currency conversion and tax calculations'
    },
    {
      icon: CreditCard,
      title: 'Payment Tracking',
      description: 'Monitor payment status, send reminders, and track outstanding receivables'
    },
    {
      icon: Globe,
      title: 'Tax Compliance',
      description: 'Automated tax calculations for multiple countries with regulatory compliance'
    },
    {
      icon: Brain,
      title: 'AI Payment Predictions',
      description: 'Machine learning predicts payment delays and suggests optimal collection strategies'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Comprehensive reporting and analytics for cash flow and financial performance'
    }
  ];

  const aiFeatures = [
    {
      title: 'Smart Payment Forecasting',
      description: 'AI analyzes customer payment patterns to predict cash flow and identify potential late payments before they occur'
    },
    {
      title: 'Intelligent Credit Risk Assessment',
      description: 'Machine learning evaluates customer creditworthiness and recommends appropriate payment terms and credit limits'
    },
    {
      title: 'Automated Dunning Management',
      description: 'AI optimizes collection processes by determining the best timing and messaging for payment reminders'
    },
    {
      title: 'Dynamic Pricing Recommendations',
      description: 'AI suggests optimal pricing strategies based on market conditions, customer behavior, and profitability goals'
    }
  ];

  const invoiceFeatures = [
    { name: 'Custom Invoice Templates', description: 'Professional, branded invoice designs' },
    { name: 'Recurring Billing', description: 'Automated subscription and recurring invoices' },
    { name: 'Payment Gateway Integration', description: 'Multiple payment options for customers' },
    { name: 'Expense Management', description: 'Track and categorize business expenses' },
    { name: 'Financial Reporting', description: 'Comprehensive financial statements and reports' },
    { name: 'Client Portal', description: 'Customer access to invoices and payment history' },
    { name: 'Mobile App', description: 'Manage invoices on-the-go with mobile access' },
    { name: 'API Integration', description: 'Connect with accounting and ERP systems' }
  ];

  const benefits = [
    { icon: Clock, title: '80% Time Savings', description: 'Automated invoice processing' },
    { icon: TrendingUp, title: '40% Faster Payments', description: 'Improved collection efficiency' },
    { icon: Calculator, title: '99% Accuracy', description: 'Error-free calculations and compliance' },
    { icon: Shield, title: '100% Secure', description: 'Bank-level security and encryption' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Invoice <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Management Systems</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Streamline your billing and financial operations with AI-powered invoice management systems. 
              Automate invoice generation, track payments, and optimize cash flow for your import-export business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Invoice Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage billing, payments, and financial operations efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Financial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to optimize cash flow, predict payments, and improve financial decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invoice Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Billing Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our invoice management systems include all essential features for efficient financial operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {invoiceFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Performance Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our invoice management solutions deliver significant improvements to your financial operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Billing?
            </h2>
            <p className="text-pink-100 text-xl mb-8 max-w-2xl mx-auto">
              Get an intelligent invoice management system that automates billing and improves cash flow.
            </p>
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your Invoice Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}