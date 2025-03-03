import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const navbarOpacity = useTransform(scrollY, [0, 200], [1, 0.9]);
  const navbarBlur = useTransform(scrollY, [0, 200], [0, 8]);

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'Services',
      path: '/services',
      submenu: [
        { name: 'Student Visa', path: '/services/student-visa' },
        { name: 'Work Visa', path: '/services/work-visa' },
        { name: 'PR Visa', path: '/services/pr-visa' },
        { name: 'Business Visa', path: '/services/business-visa' },
        { name: 'Family Visa', path: '/services/family-visa' },
        { name: 'Tourist Visa', path: '/services/tourist-visa' }
      ]
    },
    {
      title: 'Countries',
      path: '/countries',
      submenu: [
        { name: 'USA', path: '/countries/usa' },
        { name: 'Canada', path: '/countries/canada' },
        { name: 'UK', path: '/countries/uk' },
        { name: 'Australia', path: '/countries/australia' },
        { name: 'New Zealand', path: '/countries/new-zealand' },
        { name: 'Germany', path: '/countries/germany' }
      ]
    },
    {
      title: 'Resources',
      path: '/resources',
      submenu: [
        { name: 'Visa Guide', path: '/resources#visa-guide' },
        { name: 'Documentation', path: '/resources#documentation' },
        { name: 'Success Stories', path: '/resources#success-stories' },
        { name: 'FAQ', path: '/resources#faq' }
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.nav
      style={{ 
        opacity: navbarOpacity,
        backdropFilter: `blur(${navbarBlur}px)`
      }}
      className="fixed w-full z-50 px-4 py-2"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-white/80 rounded-full shadow-lg backdrop-blur-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center justify-between h-16 px-8">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <Globe className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Global Connect
                </span>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path}>
                    <motion.button
                      className={`flex items-center space-x-1 transition-colors ${
                        location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{item.title}</span>
                      {item.submenu && <ChevronDown className="h-4 w-4" />}
                    </motion.button>
                  </Link>

                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <motion.div
                              className={`block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 ${
                                location.pathname === subItem.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                              }`}
                              whileHover={{ x: 10 }}
                            >
                              {subItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow"
              >
                Free Consultation
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-2 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <Link to={item.path}>
                      <button
                        onClick={() => {
                          setActiveDropdown(activeDropdown === item.title ? null : item.title);
                          if (!item.submenu) setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 ${
                          location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <span>{item.title}</span>
                        {item.submenu && (
                          <ChevronDown
                            className={`h-4 w-4 transform transition-transform ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                    </Link>
                    {item.submenu && activeDropdown === item.title && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="ml-4 space-y-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className={`block p-2 hover:text-blue-600 ${
                              location.pathname === subItem.path ? 'text-blue-600' : 'text-gray-600'
                            }`}>
                              {subItem.name}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};