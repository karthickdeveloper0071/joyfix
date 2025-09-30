'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, Award, Zap } from 'lucide-react';
import { lazy, Suspense } from 'react';
import Logo from '../components/ui/Logo';

export default function Home() {
  const stats = [
    { label: 'Technologies Ready', value: '5+', icon: Globe },
    { label: 'Ideas to Reality', value: '∞', icon: Award },
    { label: 'Startup Energy', value: '100%', icon: Users },
    { label: 'Years Learning', value: '3+', icon: Zap },
  ];

  const features = [
    'Custom CRM Development',
    'E-commerce Platforms',
    'Student Management Systems',
    'Business Automation Tools',
    'Modern Web Applications',
    'Mobile-Friendly Solutions'
  ];

  const technologies = [
    { name: 'React & Next.js', color: 'bg-blue-100 text-blue-800' },
    { name: 'Java Spring Boot', color: 'bg-green-100 text-green-800' },
    { name: 'Node.js & Express', color: 'bg-purple-100 text-purple-800' },
    { name: 'AWS Cloud Services', color: 'bg-orange-100 text-orange-800' },
    { name: '.NET Framework', color: 'bg-pink-100 text-pink-800' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Display */}
              <div className="mb-8">
                <Logo size="xl" showText={true} className="justify-start" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Software Development for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Joy Fix is a passionate startup ready to build custom CRM systems, e-commerce platforms, 
                and student management systems using React, Node.js, and modern technologies. 
                Let's bring your business ideas to life!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Ready to Build Amazing Solutions</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                        className="text-center"
                      >
                        <Icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Cutting-Edge Technologies
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We develop fully customized software solutions using modern technologies like 
              React, Java Spring, Node.js, AWS, and .NET to deliver scalable, secure, and high-performance systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`px-6 py-3 rounded-full font-semibold ${tech.color} hover:scale-105 transition-transform cursor-default`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Complete Software Solutions for Import-Export Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From CRM systems to e-commerce platforms, we build everything your import-export business needs to scale globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom CRM Systems',
                description: 'Manage customers, leads, orders, and relationships with fully customized CRM solutions built for import-export workflows.',
                features: ['Lead Management', 'Order Tracking', 'Customer Portal', 'Sales Analytics']
              },
              {
                title: 'ERP Solutions',
                description: 'Complete business management with inventory, accounting, procurement, and supply chain integration.',
                features: ['Inventory Control', 'Financial Management', 'Supplier Portal', 'Reporting Dashboard']
              },
              {
                title: 'E-commerce Platforms',
                description: 'Multi-currency, multi-language online stores with international shipping and payment gateway integration.',
                features: ['Global Payments', 'Multi-Currency', 'Shipping Integration', 'Mobile Responsive']
              },
              {
                title: 'Invoice Management',
                description: 'Automated invoicing, payment tracking, and financial reporting with multi-currency support.',
                features: ['Auto Invoicing', 'Payment Tracking', 'Tax Compliance', 'Financial Reports']
              },
              {
                title: 'Shipment Tracking',
                description: 'Real-time tracking, logistics management, and automated notifications for international shipments.',
                features: ['Real-time Tracking', 'Logistics Management', 'Automated Alerts', 'Delivery Confirmation']
              },
              {
                title: 'Shop Management',
                description: 'Complete retail management with POS integration, inventory sync, and multi-location support.',
                features: ['POS Integration', 'Multi-location', 'Staff Management', 'Sales Analytics']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Joy Fix
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Founded by Karthick, Joy Fix combines technical expertise with innovative design 
                to create stunning, functional software solutions that drive business growth.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Founder-Led Innovation',
                    description: 'Karthick personally oversees every project, ensuring attention to detail and innovative solutions tailored to your vision.'
                  },
                  {
                    title: 'Modern Design Focus',
                    description: 'Beautiful, user-friendly interfaces combined with powerful functionality to create exceptional user experiences.'
                  },
                  {
                    title: 'Full-Stack Expertise',
                    description: 'Complete end-to-end development from stunning frontend designs to robust backend systems and cloud deployment.'
                  },
                  {
                    title: 'Startup Agility',
                    description: 'Fast turnaround times, flexible approach, and direct communication with the founder for rapid iteration and feedback.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Technologies Ready', value: '5+', desc: 'React, Java, Node.js, AWS, .NET' },
                  { label: 'Ideas to Reality', value: '∞', desc: 'Custom solutions for your needs' },
                  { label: 'Startup Energy', value: '100%', desc: 'Passionate about innovation' },
                  { label: 'Years Learning', value: '3+', desc: 'Continuous skill development' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to deployment, we follow a proven process to deliver custom software solutions on time and within budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business processes, requirements, and goals to design the perfect solution.'
              },
              {
                step: '02',
                title: 'Custom Development',
                description: 'Our team builds your system using modern technologies, following best practices and security standards.'
              },
              {
                step: '03',
                title: 'Testing & Quality Assurance',
                description: 'Comprehensive testing ensures your system works flawlessly across all devices and scenarios.'
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'We deploy your system and provide ongoing support to ensure smooth operations and growth.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center relative"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join Karthick and the Joy Fix team in creating beautiful, powerful software solutions. 
              Let's turn your ideas into reality with modern technology and stunning design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Meet Karthick
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
