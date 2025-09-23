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
      content: 'info@joyfix.com',
      subContent: 'sales@joyfix.com',
      action: 'mailto:info@joyfix.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subContent: '+44 (0) 20 1234 5678',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Global Offices',
      content: 'USA • UK • Canada • Australia',
      subContent: 'Remote-first with local presence',
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
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: MessageSquare, label: 'Support Tickets Resolved', value: '10K+' },
    { icon: Globe, label: 'Countries Served', value: '4' },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with our innovative software solutions? 
              We&apos;d love to hear from you. Let&apos;s discuss your project requirements and
              how Joy Fix can help you achieve your goals.
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
                  <p className="text-lg text-gray-600">
                    We&apos;re here to help you succeed. Whether you have questions about our services,
                    need technical support, or want to discuss a new project, our team is ready to assist.
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
                      <span>Proven track record with 500+ satisfied clients</span>
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
                answer: "Project timelines vary depending on complexity and scope. Simple CRM implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support and maintenance packages. Our 24/7 support team ensures your systems run smoothly, and we provide regular updates, security patches, and performance optimizations."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We specialize in system integration and can work with your existing infrastructure. Our team will assess your current systems and develop a seamless integration plan."
              },
              {
                question: "What makes Joy Fix different from other development companies?",
                answer: "Our focus on CRM solutions, multi-country expertise, and comprehensive approach sets us apart. We combine deep technical knowledge with business understanding to deliver solutions that truly transform operations."
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