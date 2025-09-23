'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, Award, Zap } from 'lucide-react';
import Logo from '../components/ui/Logo';

export default function Home() {
  const stats = [
    { label: 'Countries Served', value: '4+', icon: Globe },
    { label: 'Custom Systems Built', value: '150+', icon: Award },
    { label: 'Happy Clients', value: '100+', icon: Users },
    { label: 'Years Experience', value: '8+', icon: Zap },
  ];

  const features = [
    'Fully Customized CRM Development',
    'Complete ERP Solutions',
    'E-commerce Website Development',
    'Invoice Management Systems',
    'Shipment Tracking Software',
    'Shop Management Solutions'
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
                Custom CRM, ERP & E-commerce Development for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Import Export Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Joy Fix develops fully customized CRM systems, ERP solutions, e-commerce websites, invoice management 
                and shipment tracking software using React, Java Spring, Node.js, AWS & .NET technologies for 
                import-export businesses in Malaysia, Singapore, UK & USA.
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
                <h3 className="text-2xl font-bold mb-6">Trusted by 100+ Import-Export Businesses</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Join 100+ import-export businesses who have transformed their operations with our custom software solutions.
              Let&apos;s discuss how we can build the perfect system for your business needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
