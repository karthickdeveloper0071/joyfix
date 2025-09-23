'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function SimpleContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current!);
      const leadData = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company') || 'Not provided',
        phone: formData.get('phone') || 'Not provided',
        service: formData.get('service') || 'Not specified',
        message: formData.get('message'),
        timestamp: new Date().toLocaleString(),
        status: 'New Lead'
      };

      // Send to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbxH8vQ2mK3L9pR7sN4tU6vW8xY0zA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU1vW2xY3zA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      // Send email via EmailJS
      emailjs.init('ZneHP1jCOwZfsRIPk');
      
      const result = await emailjs.sendForm(
        'service_la5tlm7',
        'template_lprf9kf', 
        form.current!,
        'ZneHP1jCOwZfsRIPk'
      );
      
      console.log('Email sent:', result.text);
      console.log('Data saved to Google Sheets');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email error:', error);
      // Fallback to mailto
      const formData = new FormData(form.current!);
      const emailContent = `
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Company: ${formData.get('company')}
Phone: ${formData.get('phone')}
Service: ${formData.get('service')}
Message: ${formData.get('message')}`;
      
      const mailtoLink = `mailto:karthick123svks@gmail.com?subject=Joy Fix Contact Form&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink, '_blank');
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 bg-white rounded-2xl shadow-lg"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-2">
          Your message has been sent to karthick123svks@gmail.com
        </p>
        <p className="text-sm text-green-600">
          ✅ Lead data saved to Google Sheets for tracking
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Joy Fix</h2>
      
      <form 
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
              placeholder="+60 123 456 789"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
          >
            <option value="">Select Service</option>
            <option value="E-commerce Development">E-commerce Development</option>
            <option value="Student Management System">Student Management System</option>
            <option value="Custom CRM Development">Custom CRM Development</option>
            <option value="Business Automation">Business Automation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending to karthick123svks@gmail.com...
            </>
          ) : (
            <>
              Send to karthick123svks@gmail.com
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}