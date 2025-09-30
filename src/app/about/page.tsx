'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  Heart, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Logo from '../../components/ui/Logo';
import LogoShowcase from '../../components/ui/LogoShowcase';

export default function About() {
  const stats = [
    { label: 'Years Learning', value: '3+', icon: Award },
    { label: 'Projects Ready', value: '∞', icon: Users },
    { label: 'Technologies', value: '5+', icon: Globe },
    { label: 'Passion Level', value: '100%', icon: Target },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
        description: 'We prioritize our clients&apos; success and work as an extension of their team to achieve their goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Excellence',
      description: 'We leverage cutting-edge technologies and best practices to deliver exceptional solutions.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We believe in building long-term relationships based on trust, transparency, and mutual success.'
    }
  ];

  const technologies = [
    'React & Next.js',
    'Java Spring Boot',
    'Node.js & Express',
    'AWS Cloud Services',
    '.NET Framework',
    'Custom CRM Development',
    'ERP Solutions',
    'E-commerce Platforms',
    'Multi-currency Systems',
    'API Integration',
    'Database Design',
    'Mobile Applications',
    'Business Automation',
    'Payment Gateways',
    'Shipment Tracking'
  ];

  const team = [
    {
      name: 'Karthick',
      role: 'Founder & Lead Developer',
      experience: '2+ years',
      specialties: ['Full-Stack Development', 'UI/UX Design',  'Business Strategy']
    },
    {
      name: 'Join Our Team',
      role: 'We\'re Growing',
      experience: 'Multiple Positions',
      specialties: ['Java Developer', 'Full-Stack Developer', 'DevOps Engineer']
    }
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
            {/* Logo Display */}
            <div className="mb-8 flex justify-center">
              <Logo size="lg" showText={true} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Joy Fix</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Founded by Karthick, Joy Fix is a modern software development company that combines 
              beautiful design with powerful technology. We create stunning web applications, 
              mobile apps, and custom software solutions that help businesses grow and succeed.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To create beautiful, powerful software solutions that help businesses thrive in the digital age. 
                We believe every company deserves custom-built technology that reflects their unique vision and 
                drives real results. Our mission is to make cutting-edge software development accessible to 
                businesses of all sizes through innovative design and modern technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Deliver Excellence</h4>
                    <p className="text-gray-600">Providing high-quality solutions that exceed expectations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Foster Innovation</h4>
                    <p className="text-gray-600">Continuously exploring new technologies and methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Partnerships</h4>
                    <p className="text-gray-600">Creating lasting relationships with clients and stakeholders</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  To become the go-to software development partner for businesses seeking beautiful, 
                  functional, and innovative digital solutions. We envision a future where every company 
                  has access to custom software that perfectly fits their needs and accelerates their success.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-blue-100">Projects Goal 2025</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm text-blue-100">Creative Solutions</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and modern frameworks to build scalable, 
              secure, and high-performance solutions that meet the unique demands of international trade businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="text-center p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of expertise in software 
              development, business strategy, and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded mr-1 mb-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
    

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
              Ready to Work Together?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Let&apos;s discuss how Joy Fix can help transform your business with our
              innovative software solutions and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center group"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}