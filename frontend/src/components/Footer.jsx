import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Student Visa', path: '/services/student-visa' },
        { name: 'Work Visa', path: '/services/work-visa' },
        { name: 'PR Visa', path: '/services/pr-visa' },
        { name: 'Business Visa', path: '/services/business-visa' },
        { name: 'Tourist Visa', path: '/services/tourist-visa' }
      ]
    },
    {
      title: 'Countries',
      links: [
        { name: 'USA', path: '/countries/usa' },
        { name: 'Canada', path: '/countries/canada' },
        { name: 'UK', path: '/countries/uk' },
        { name: 'Australia', path: '/countries/australia' },
        { name: 'New Zealand', path: '/countries/new-zealand' },
        { name: 'Germany', path: '/countries/germany' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resources', path: '/resources' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold">Global Connect</span>
              </div>
            </Link>
            <p className="text-blue-100 mb-6 max-w-md">
              Your trusted partner in immigration services, helping individuals and families achieve their international dreams since 2010.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">globalconnect2812@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+91 97234 47541 (Jitendra Patel)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">208, Sahitya Arcade, Haridarshan Char Rasta, Naroda</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 mb-4 md:mb-0">
            © {currentYear} Global Connect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};