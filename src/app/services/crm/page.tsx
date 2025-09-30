'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Database, 
  Users, 
  BarChart3, 
  Globe, 
  Brain, 
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

export default function CRMPage() {
  const features = [
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Complete customer profiles with interaction history, preferences, and communication logs'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Real-time dashboards with sales performance, conversion rates, and revenue tracking'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Handle international transactions with automatic currency conversion and compliance'
    },
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Machine learning algorithms to identify high-value prospects and optimize sales efforts'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Integration',
      description: 'Intelligent customer support with automated responses and lead qualification'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting for sales trends, customer behavior, and market opportunities'
    }
  ];

  const aiFeatures = [
    {
      title: 'Smart Lead Qualification',
      description: 'AI analyzes customer interactions to automatically score and prioritize leads based on conversion probability'
    },
    {
      title: 'Intelligent Customer Insights',
      description: 'Machine learning provides deep customer behavior analysis and personalized recommendations'
    },
    {
      title: 'Automated Follow-up Suggestions',
      description: 'AI recommends optimal timing and messaging for customer follow-ups to maximize engagement'
    },
    {
      title: 'Predictive Sales Forecasting',
      description: 'Advanced algorithms predict sales trends and identify potential revenue opportunities'
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: '40% Increase in Sales', description: 'Average improvement in sales performance' },
    { icon: Clock, title: '60% Time Savings', description: 'Reduced manual data entry and admin tasks' },
    { icon: Users, title: '90% Customer Satisfaction', description: 'Improved customer relationship management' },
    { icon: Shield, title: '99.9% Data Security', description: 'Enterprise-grade security and compliance' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Database className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CRM Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your import-export business with AI-powered CRM systems designed specifically for international trade. 
              Manage customers, suppliers, orders, and relationships with intelligent automation and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
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
              Comprehensive CRM Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage customer relationships and drive sales growth in your import-export business.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to automate processes, gain insights, and make data-driven decisions.
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
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Benefits Section */}
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CRM solutions deliver measurable improvements to your business performance.
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
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Management?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Get a custom CRM solution built specifically for your import-export business needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your CRM Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}