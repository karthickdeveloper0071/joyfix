'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowUpDown, 
  Package, 
  DollarSign, 
  Users, 
  Brain, 
  Zap,
  BarChart3,
  ArrowRight,
  Bot,
  TrendingUp,
  Shield,
  Clock,
  Factory
} from 'lucide-react';

export default function ERPPage() {
  const features = [
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Complete accounting, budgeting, and financial reporting with multi-currency support'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Real-time inventory tracking, warehouse management, and automated reorder points'
    },
    {
      icon: Users,
      title: 'Supplier Management',
      description: 'Comprehensive supplier database with performance tracking and automated procurement'
    },
    {
      icon: Factory,
      title: 'Production Planning',
      description: 'Manufacturing resource planning with capacity optimization and scheduling'
    },
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Machine learning algorithms predict demand patterns and optimize inventory levels'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered workflow automation for routine tasks and business processes'
    }
  ];

  const aiFeatures = [
    {
      title: 'Smart Inventory Optimization',
      description: 'AI analyzes sales patterns, seasonality, and market trends to optimize inventory levels and reduce carrying costs'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Machine learning predicts equipment failures and schedules maintenance to minimize downtime'
    },
    {
      title: 'Intelligent Financial Insights',
      description: 'AI provides real-time financial analysis, cash flow predictions, and profitability recommendations'
    },
    {
      title: 'Automated Compliance Monitoring',
      description: 'AI ensures regulatory compliance across multiple countries and automatically updates for new regulations'
    }
  ];

  const modules = [
    { name: 'Financial Management', description: 'Accounting, budgeting, cash flow' },
    { name: 'Inventory Management', description: 'Stock control, warehouse operations' },
    { name: 'Procurement', description: 'Purchase orders, supplier management' },
    { name: 'Sales Management', description: 'Order processing, customer management' },
    { name: 'Production Planning', description: 'Manufacturing, resource planning' },
    { name: 'Human Resources', description: 'Employee management, payroll' },
    { name: 'Quality Control', description: 'Quality assurance, compliance' },
    { name: 'Reporting & Analytics', description: 'Business intelligence, dashboards' }
  ];

  const benefits = [
    { icon: TrendingUp, title: '50% Efficiency Gain', description: 'Streamlined business processes' },
    { icon: Clock, title: '70% Faster Reporting', description: 'Real-time business insights' },
    { icon: DollarSign, title: '30% Cost Reduction', description: 'Optimized resource utilization' },
    { icon: Shield, title: '100% Compliance', description: 'Automated regulatory adherence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ArrowUpDown className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Streamline your entire import-export business with AI-powered ERP systems. Integrate financial management, 
              inventory control, procurement, and operations into one intelligent platform designed for international trade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-200"
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
              Comprehensive ERP Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your entire business operations from a single, integrated platform.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
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
              AI-Powered Business Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to optimize operations, predict trends, and make data-driven decisions.
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

      {/* Modules Section */}
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
              Integrated Business Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ERP system includes all essential modules to run your import-export business efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
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
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ERP solutions deliver measurable improvements across all business operations.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Get a comprehensive ERP solution that integrates all aspects of your import-export business.
            </p>
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your ERP Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}