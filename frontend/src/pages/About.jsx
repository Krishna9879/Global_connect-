import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Clock, Heart, Globe, BookOpen, Briefcase, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import user1 from '../assets/UserImage1.jpg';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'We put our clients first, ensuring personalized solutions for their unique needs.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Timeliness',
      description: 'We respect your time and ensure prompt, efficient service.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about helping people achieve their global dreams.',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Jitendra Patel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A retired teacher with 28 years of experience in high school education, a global traveler, and a participant in world-renowned business summits. Jitendra Patel is here to guide you through your educational, business, and visa needs.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
           <img
  src={user1}
  alt="Jitendra Patel"
  className="rounded-2xl shadow-lg w-full h-[550px] object-cover transform scale-90"
/>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Jitendra's Journey</h2>
            <p className="text-gray-600 mb-4">
              Jitendra Patel holds a degree in Engineering and a graduation in Science. For 28 years, he served as a high school teacher, shaping the minds of future generations. After retiring, he embarked on a journey to explore the world and its diverse cultures.
            </p>
            <p className="text-gray-600 mb-4">
              Jitendra has visited numerous Asian countries, gaining insights into their educational systems, cultural activities, and development models. His participation in the World Economic Forum at Davos, Switzerland, and the Business Summit at the UK Parliament in London has allowed him to connect with global leaders and investors.
            </p>
            <p className="text-gray-600">
              He has facilitated the participation of investors in business summits across Davos, Singapore, London, and the USA, helping them identify opportunities for growth and investment. Additionally, Jitendra assists with tourist, visitor, and business visitor visas.
            </p>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Jitendra's Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Globe,
              title: 'Global Networking',
              description: 'Connecting investors and businesses at international summits like Davos and London.',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              icon: BookOpen,
              title: 'Educational Guidance',
              description: 'Helping students secure admissions in universities across the UK, Germany, and the USA.',
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              icon: Briefcase,
              title: 'Business Visas',
              description: 'Assisting with business visitor visas for global opportunities.',
              gradient: 'from-green-500 to-emerald-500',
            },
            {
              icon: MapPin,
              title: 'Cultural Insights',
              description: 'Sharing knowledge about Asian cultures and educational systems.',
              gradient: 'from-orange-500 to-yellow-500',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 min-h-[300px]">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-5 rounded-full mb-6 bg-gradient-to-br ${value.gradient} group-hover:shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-center flex-1 flex flex-col justify-between">
                  <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-base line-clamp-3">{value.description}</p>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl transition-all duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};