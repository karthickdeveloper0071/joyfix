'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Code,
  Server,
  Database,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Java Developer',
      type: 'Full-time',
      location: 'Pallavaram, Chennai, Tamil Nadu, India (Remote Available)',
      experience: '2-4 years',
      salary: '₹4-8 LPA',
      icon: Code,
      description: 'Join our growing team to build robust backend systems and enterprise applications using Java and Spring Boot.',
      requirements: [
        'Strong proficiency in Java 8+ and Spring Boot',
        'Experience with RESTful APIs and microservices',
        'Knowledge of SQL databases (MySQL, PostgreSQL)',
        'Understanding of Git version control',
        'Experience with Maven/Gradle build tools'
      ],
      responsibilities: [
        'Develop and maintain Java-based applications',
        'Design and implement RESTful web services',
        'Work with databases and optimize queries',
        'Collaborate with frontend developers',
        'Write clean, maintainable code with proper testing'
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git', 'Maven']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Pallavaram, Chennai, Tamil Nadu, India (Remote Available)',
      experience: '1-3 years',
      salary: '₹3-7 LPA',
      icon: Database,
      description: 'Build end-to-end web applications using modern technologies like React, Node.js, and cloud services.',
      requirements: [
        'Proficiency in React.js and Next.js',
        'Strong knowledge of Node.js and Express',
        'Experience with MongoDB or SQL databases',
        'Understanding of HTML5, CSS3, and JavaScript ES6+',
        'Familiarity with cloud platforms (AWS preferred)'
      ],
      responsibilities: [
        'Develop responsive web applications using React/Next.js',
        'Build backend APIs using Node.js and Express',
        'Integrate third-party services and APIs',
        'Implement user authentication and authorization',
        'Deploy applications to cloud platforms'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'JavaScript']
    },
    {
      id: 3,
      title: 'DevOps Developer',
      type: 'Full-time',
      location: 'Pallavaram, Chennai, Tamil Nadu, India (Remote Available)',
      experience: '2-5 years',
      salary: '₹5-10 LPA',
      icon: Server,
      description: 'Help us build and maintain scalable infrastructure, automate deployments, and ensure system reliability.',
      requirements: [
        'Experience with AWS cloud services (EC2, S3, RDS, Lambda)',
        'Proficiency in Docker and container orchestration',
        'Knowledge of CI/CD pipelines (Jenkins, GitHub Actions)',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Understanding of monitoring and logging tools'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure on AWS',
        'Implement CI/CD pipelines for automated deployments',
        'Monitor system performance and troubleshoot issues',
        'Manage containerized applications with Docker',
        'Ensure security best practices and compliance'
      ],
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux']
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Flexible working hours and remote work options',
    'Learning and development opportunities',
    'Health insurance coverage',
    'Startup equity participation',
    'Modern tech stack and tools',
    'Collaborative and innovative work environment',
    'Career growth opportunities in a growing startup'
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growing Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Be part of Joy Fix's journey as we build innovative software solutions. 
              We're looking for passionate developers to help us grow and make an impact in the tech industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Growing Team</div>
                <div className="text-gray-600">Join our expanding startup</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">3 Positions</div>
                <div className="text-gray-600">Open opportunities</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Remote OK</div>
                <div className="text-gray-600">Flexible work options</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Header */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          <p className="text-gray-600">{job.type}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.experience} experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-sm font-semibold text-green-600">{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply for this position
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Joy Fix?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer competitive benefits and a great work environment for our team members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4"></div>
                <p className="text-gray-700 font-medium">{benefit}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see a perfect match? We're always looking for talented individuals. 
              Send us your resume and let's talk about opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
              </Link>
              <a
                href="tel:+918825537674"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 8825537674
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}