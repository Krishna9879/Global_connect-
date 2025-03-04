import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; 

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients first, ensuring personalized solutions for their unique needs.",
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery.",
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: "Timeliness",
      description: "We respect your time and ensure prompt, efficient service.",
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about helping people achieve their global dreams.",
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Global Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in immigration services, helping individuals and families achieve their international dreams since 2010.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team meeting"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Global Connect was founded with a vision to simplify the complex world of immigration. We understand that moving to a new country is a life-changing decision, and we're here to make that journey smoother.
            </p>
            <p className="text-gray-600 mb-4">
              With over a decade of experience, we've helped thousands of individuals and families achieve their dreams of studying, working, and living abroad. Our team of expert consultants brings deep knowledge and personal understanding to every case.
            </p>
            <p className="text-gray-600">
              We pride ourselves on our high success rate and the lasting relationships we build with our clients. Your success is our success, and we're committed to being there every step of the way.
            </p>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
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