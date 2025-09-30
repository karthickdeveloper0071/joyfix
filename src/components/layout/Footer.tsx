import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Custom CRM Development', href: '/services#crm' },
    { name: 'Complete ERP Solutions', href: '/services#erp' },
    { name: 'E-commerce Development', href: '/services#ecommerce' },
    { name: 'Invoice Management', href: '/services#invoice' },
  ];

  const technologies = [
    { name: 'React & Next.js', href: '#' },
    { name: 'Java Spring Boot', href: '#' },
    { name: 'Node.js & Express', href: '#' },
    { name: '.NET Framework', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JF</span>
              </div>
              <span className="text-xl font-bold">Joy Fix</span>
            </div>
            <p className="text-gray-300 mb-4">
              Modern software development company founded by Karthick, specializing in beautiful web applications, 
              mobile apps, and custom business solutions. We combine stunning design with powerful technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  <Link 
                    href={tech.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">karthick123svks@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 8825537674</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">200 Feet Radial Rd, Iswarya Nagar, Raja Joseph Colony, Pallavaram, Chennai, Tamil Nadu 600043, India</span>
              </div>
            </div>

            {/* Countries */}
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Ready to serve:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded">India</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded">Global Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Joy Fix. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}