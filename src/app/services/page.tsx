'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Database, 
  ArrowUpDown, 
  FileText, 
  Brain, 
  Code, 
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'crm',
      icon: Database,
      title: 'Custom CRM Development',
      description: 'Fully customized Customer Relationship Management systems built from scratch for your specific business needs.',
      features: [
        'Custom Database Design & Architecture',
        'Customer & Supplier Management',
        'Sales Pipeline & Lead Management',
        'Multi-currency & Multi-language Support',
        'Advanced Reporting & Analytics',
        'API Integration & Third-party Connections'
      ],
      technologies: ['React', 'Java Spring Boot', 'MySQL/PostgreSQL', 'AWS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'erp',
      icon: ArrowUpDown,
      title: 'Complete ERP Solutions',
      description: 'Full-scale Enterprise Resource Planning systems for comprehensive business management and operations.',
      features: [
        'Financial Management & Accounting',
        'Inventory & Warehouse Management',
        'Procurement & Supplier Management',
        'Production Planning & Control',
        'Human Resource Management',
        'Business Intelligence & Reporting'
      ],
      technologies: ['Java Spring Boot', '.NET Core', 'React', 'SQL Server', 'AWS'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ecommerce',
      icon: FileText,
      title: 'E-commerce Website Development',
      description: 'Fully customized e-commerce platforms with advanced features for online retail and wholesale businesses.',
      features: [
        'Custom E-commerce Website Design',
        'Product Catalog & Inventory Management',
        'Shopping Cart & Checkout System',
        'Payment Gateway Integration',
        'Order Management & Processing',
        'Customer Account & Loyalty Systems'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe/PayPal', 'MongoDB'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'invoice',
      icon: Brain,
      title: 'Invoice Management Systems',
      description: 'Comprehensive invoicing and billing systems with automated workflows and financial reporting.',
      features: [
        'Automated Invoice Generation',
        'Multi-currency Billing Support',
        'Payment Tracking & Reminders',
        'Tax Calculation & Compliance',
        'Financial Reporting & Analytics',
        'Integration with Accounting Systems'
      ],
      technologies: ['.NET Core', 'React', 'SQL Server', 'Payment APIs'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'shipment',
      icon: Code,
      title: 'Shipment Tracking Software',
      description: 'Advanced shipment and logistics management systems for real-time tracking and delivery management.',
      features: [
        'Real-time Shipment Tracking',
        'GPS & Route Optimization',
        'Delivery Status Updates',
        'Customs Documentation Management',
        'Carrier Integration & APIs',
        'Customer Notification Systems'
      ],
      technologies: ['Java Spring', 'React', 'GPS APIs', 'MySQL', 'AWS'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your sensitive business data.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support across all time zones we serve.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of industry experience.'
    }
  ];

  const countries = [
    { name: 'Malaysia', flag: '🇲🇾', timezone: 'MYT (GMT+8)' },
    { name: 'Singapore', flag: '🇸🇬', timezone: 'SGT (GMT+8)' },
    { name: 'United Kingdom', flag: '🇬🇧', timezone: 'GMT/BST' },
    { name: 'United States', flag: '🇺🇸', timezone: 'EST/PST' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Software <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We develop fully customized CRM systems, ERP solutions, e-commerce websites, invoice management, 
              and shipment tracking software using React, Java Spring, Node.js, AWS & .NET technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white shadow-2xl`}>
                      <div className="space-y-6">
                        <div className="text-center">
                          <Icon className="h-16 w-16 mx-auto mb-4 text-white/80" />
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-white/90">Enterprise-grade solution</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-white/10 rounded-lg">
                            <div className="text-2xl font-bold">99.9%</div>
                            <div className="text-sm text-white/80">Uptime</div>
                          </div>
                          <div className="text-center p-4 bg-white/10 rounded-lg">
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-sm text-white/80">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Joy Fix?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver more than just software – we provide comprehensive solutions 
              that grow with your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Operations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve clients across four major markets, providing localized support 
              and understanding of regional business requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{country.name}</h3>
                <p className="text-gray-600 text-sm">{country.timezone}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Let&apos;s discuss your project requirements and create a custom solution
              that perfectly fits your business needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}