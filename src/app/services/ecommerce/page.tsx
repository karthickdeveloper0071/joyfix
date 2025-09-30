'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShoppingCart, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Brain, 
  Zap,
  Search,
  ArrowRight,
  Bot,
  TrendingUp,
  Shield,
  Clock,
  Package
} from 'lucide-react';

export default function EcommercePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Custom E-commerce Platform',
      description: 'Fully customized online stores with advanced product catalogs and inventory management'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with multiple gateways and multi-currency support'
    },
    {
      icon: Globe,
      title: 'Multi-Language & Currency',
      description: 'Global reach with localized content, currencies, and international shipping'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive design optimized for mobile devices and progressive web app features'
    },
    {
      icon: Brain,
      title: 'AI Product Recommendations',
      description: 'Machine learning algorithms suggest products based on customer behavior and preferences'
    },
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'AI-powered search with auto-complete, filters, and personalized results'
    }
  ];

  const aiFeatures = [
    {
      title: 'Smart Product Recommendations',
      description: 'AI analyzes customer behavior, purchase history, and browsing patterns to suggest relevant products and increase sales'
    },
    {
      title: 'Dynamic Pricing Optimization',
      description: 'Machine learning adjusts prices based on demand, competition, and market conditions to maximize profitability'
    },
    {
      title: 'Intelligent Inventory Management',
      description: 'AI predicts demand patterns and automatically manages stock levels to prevent overselling and stockouts'
    },
    {
      title: 'Personalized Customer Experience',
      description: 'AI creates personalized shopping experiences with customized content, offers, and product displays'
    }
  ];

  const ecommerceFeatures = [
    { name: 'Product Catalog Management', description: 'Advanced product organization and categorization' },
    { name: 'Shopping Cart & Checkout', description: 'Streamlined purchasing process with guest checkout' },
    { name: 'Order Management System', description: 'Complete order processing and fulfillment tracking' },
    { name: 'Customer Account Portal', description: 'User accounts with order history and preferences' },
    { name: 'Inventory Synchronization', description: 'Real-time stock updates across all channels' },
    { name: 'SEO Optimization', description: 'Built-in SEO tools for better search rankings' },
    { name: 'Analytics & Reporting', description: 'Comprehensive sales and customer analytics' },
    { name: 'Marketing Tools', description: 'Email campaigns, discounts, and promotional features' }
  ];

  const benefits = [
    { icon: TrendingUp, title: '200% Sales Increase', description: 'Average online sales growth' },
    { icon: Globe, title: '24/7 Global Reach', description: 'Sell worldwide around the clock' },
    { icon: Smartphone, title: '80% Mobile Traffic', description: 'Optimized for mobile shoppers' },
    { icon: Shield, title: 'PCI Compliant', description: 'Secure payment processing' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Website Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Build powerful, AI-driven e-commerce platforms for your import-export business. Create stunning online stores 
              with intelligent product recommendations, multi-currency support, and global shipping integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-200"
              >
                View Portfolio
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
              Advanced E-commerce Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a successful online store that converts visitors into customers.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
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
              AI-Powered E-commerce Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to boost sales, improve customer experience, and optimize operations.
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

      {/* E-commerce Features Grid */}
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
              Complete E-commerce Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our e-commerce platforms include all essential features to run a successful online business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecommerceFeatures.map((feature, index) => (
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
              E-commerce Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our e-commerce solutions deliver exceptional results for import-export businesses.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
              Get a custom e-commerce platform that drives sales and grows your import-export business globally.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your E-commerce Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}