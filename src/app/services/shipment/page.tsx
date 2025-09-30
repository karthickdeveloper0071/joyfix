'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Globe, 
  Brain, 
  Zap,
  Package,
  ArrowRight,
  Bot,
  TrendingUp,
  Shield,
  Smartphone,

} from 'lucide-react';

export default function ShipmentPage() {
  const features = [
    {
      icon: MapPin,
      title: 'Real-Time GPS Tracking',
      description: 'Live location tracking with detailed route information and delivery status updates'
    },
    {
      icon: Package,
      title: 'Shipment Management',
      description: 'Complete shipment lifecycle management from pickup to final delivery'
    },
    {
      icon: Globe,
      title: 'International Logistics',
      description: 'Global shipping support with customs documentation and compliance management'
    },
    {
      icon: Clock,
      title: 'Delivery Optimization',
      description: 'Route optimization and delivery scheduling for maximum efficiency'
    },
    {
      icon: Brain,
      title: 'AI Route Planning',
      description: 'Machine learning algorithms optimize delivery routes and predict arrival times'
    },
    {
      icon: Bot,
      title: 'Smart Notifications',
      description: 'Automated customer notifications with intelligent delivery updates'
    }
  ];

  const aiFeatures = [
    {
      title: 'Intelligent Route Optimization',
      description: 'AI analyzes traffic patterns, weather conditions, and delivery constraints to find the most efficient routes and reduce delivery times'
    },
    {
      title: 'Predictive Delivery Analytics',
      description: 'Machine learning predicts potential delays, suggests alternative routes, and provides accurate delivery time estimates'
    },
    {
      title: 'Smart Warehouse Management',
      description: 'AI optimizes warehouse operations, inventory placement, and picking routes to improve fulfillment efficiency'
    },
    {
      title: 'Automated Exception Handling',
      description: 'AI detects shipment issues, automatically triggers corrective actions, and notifies relevant stakeholders'
    }
  ];

  const trackingFeatures = [
    { name: 'GPS Real-Time Tracking', description: 'Live location updates and route monitoring' },
    { name: 'Delivery Confirmation', description: 'Photo proof and digital signatures' },
    { name: 'Customer Notifications', description: 'SMS and email delivery updates' },
    { name: 'Multi-Carrier Support', description: 'Integration with major shipping providers' },
    { name: 'Customs Documentation', description: 'International shipping compliance' },
    { name: 'Analytics Dashboard', description: 'Performance metrics and reporting' },
    { name: 'Mobile Driver App', description: 'Driver interface for route management' },
    { name: 'API Integration', description: 'Connect with existing business systems' }
  ];

  const benefits = [
    { icon: Clock, title: '30% Faster Delivery', description: 'Optimized routes and scheduling' },
    { icon: TrendingUp, title: '95% On-Time Rate', description: 'Improved delivery performance' },
    { icon: Smartphone, title: '100% Visibility', description: 'Complete shipment transparency' },
    { icon: Shield, title: '99% Accuracy', description: 'Precise tracking and documentation' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Truck className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Shipment <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Tracking Software</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your logistics operations with AI-powered shipment tracking and management systems. 
              Provide real-time visibility, optimize delivery routes, and enhance customer satisfaction for your import-export business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-600 hover:text-orange-600 transition-all duration-200"
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
              Advanced Shipment Tracking Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage logistics operations and provide exceptional delivery experiences.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
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
              AI-Powered Logistics Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to optimize routes, predict delays, and improve delivery performance.
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

      {/* Tracking Features Grid */}
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
              Complete Tracking Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our shipment tracking systems include all essential features for comprehensive logistics management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map((feature, index) => (
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
              Logistics Performance Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our shipment tracking solutions deliver significant improvements to your logistics operations.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
              Get an intelligent shipment tracking system that provides complete visibility and improves delivery performance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your Tracking Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}