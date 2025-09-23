'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

export default function LogoShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Introducing Joy Fix
          </h2>
          
          {/* Logo Display */}
          <div className="mb-12">
            <Logo size="xl" showText={true} className="justify-center" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="mb-4">
                <Logo size="md" showText={false} className="justify-center" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Animated Design</h3>
              <p className="text-gray-600 text-sm">
                Our logo features smooth animations and modern gradients that represent innovation and reliability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Joy
                  </span>
                  <span className="text-gray-800 ml-1">Fix</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Typography</h3>
              <p className="text-gray-600 text-sm">
                Clean, modern typography with gradient effects that convey professionalism and creativity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="mb-4 flex justify-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Palette</h3>
              <p className="text-gray-600 text-sm">
                Vibrant gradients from blue to purple and pink, representing innovation and growth.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">What Our Logo Represents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🎯 Joy</h4>
                <p className="text-blue-100 text-sm">
                  Represents the satisfaction and happiness our clients experience when their business processes are streamlined and optimized.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔧 Fix</h4>
                <p className="text-blue-100 text-sm">
                  Symbolizes our expertise in solving complex business challenges and fixing operational inefficiencies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚙️ Gear Symbol</h4>
                <p className="text-blue-100 text-sm">
                  The rotating gear represents continuous improvement, automation, and the mechanical precision of our solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✨ Sparkles</h4>
                <p className="text-blue-100 text-sm">
                  The sparkle effects symbolize innovation, excellence, and the transformative impact of our software solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}