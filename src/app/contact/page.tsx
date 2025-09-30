'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  MessageSquare,
  Users,
  Globe
} from 'lucide-react';
import Logo from '../../components/ui/Logo';
import SimpleContactForm from '../../components/ui/SimpleContactForm';
import LeadManagementInfo from '../../components/ui/LeadManagementInfo';

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'karthick123svks@gmail.com',
      subContent: 'Get a response within 24 hours',
      action: 'mailto:karthick123svks@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+91 8825537674',
      subContent: 'Available 24/7 for urgent queries',
      action: 'https://wa.me/918825537674'
    },
    {
      icon: MapPin,
      title: 'Serving Globally',
      content: 'India, Malaysia • Singapore • UK • USA',
      subContent: 'Local expertise, global reach',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24/7 Support Available',
      subContent: 'Mon-Fri: 9AM-6PM (All Timezones)',
      action: null
    }
  ];



  const stats = [
    { icon: Users, label: 'Ready to Serve', value: '∞' },
    { icon: MessageSquare, label: 'Response Time', value: '<24h' },
    { icon: Globe, label: 'Global Remote', value: '100%' },
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
            className="text-center mb-16"
          >
            {/* Logo Display */}
            <div className="mb-8 flex justify-center">
              <Logo size="lg" showText={true} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to create something beautiful? Karthick and the Joy Fix team are excited 
              to work with you on your next project. Let's build stunning software solutions 
              that combine modern design with powerful functionality!
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
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

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SimpleContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded by Karthick, Joy Fix creates beautiful web applications, mobile apps, and 
                    custom business solutions. Whether you need a modern website, mobile app, or 
                    custom software platform, we're here to bring your vision to life with stunning design.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-blue-600 hover:text-blue-700 font-medium block"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-700 font-medium">{info.content}</p>
                          )}
                          <p className="text-gray-500 text-sm">{info.subContent}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Joy Fix?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Free initial consultation and project assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Transparent pricing with no hidden costs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>24/7 support and maintenance services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Passionate startup energy and dedication</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Management Info */}
      <LeadManagementInfo />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions? We have answers. Here are some of the most common questions we receive.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and requirements. Simple CRM systems take 2-4 weeks, while comprehensive ERP solutions may take 3-6 months. We provide detailed timelines and milestones during our initial consultation to ensure transparency."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Absolutely! We provide comprehensive support and maintenance packages including 24/7 technical support, regular system updates, security patches, performance monitoring, and feature enhancements to ensure your systems operate at peak efficiency."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Yes, we excel at system integration and can seamlessly connect with your existing infrastructure including accounting software, payment gateways, shipping providers, and third-party APIs. We ensure smooth data migration and minimal disruption to your operations."
              },
              {
                question: "What makes Joy Fix different from other development companies?",
                answer: "Our specialization in import-export business solutions, 8+ years of industry experience, and deep understanding of international trade workflows set us apart. We use cutting-edge technologies like React, Java Spring, and AWS to deliver scalable, secure solutions tailored specifically for your business needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}