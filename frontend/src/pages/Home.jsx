import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { GraduationCap, Briefcase, Globe2, Trophy } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import Faq from '../components/Faqs';

const words = [
  "Global Dreams",
  "Brighter Future",
  "New Horizons",
  "Success Stories"
];

const stats = [
  {
    icon: Briefcase,
    number: 12,
    suffix: '+',
    text: 'Years of Experience',
    description: 'Trusted expertise in immigration services',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: GraduationCap,
    number: 7000,
    suffix: '+',
    text: 'Satisfied Students',
    description: 'Successfully helped students achieve their dreams',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe2,
    number: 50,
    suffix: '+',
    text: 'Countries Covered',
    description: 'Global reach for diverse opportunities',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Trophy,
    number: 95,
    suffix: '%',
    text: 'Success Rate',
    description: 'Proven track record of successful cases',
    gradient: 'from-orange-500 to-yellow-500'
  }
];

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white"
      >
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.to(trans)
          }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your
            <div className="h-20 md:h-24 overflow-hidden my-2">
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.div>
            </div>
            Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-12"
          >
            Your journey to global opportunities begins here. Expert guidance for a seamless immigration process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-full text-lg font-semibold hover:bg-blue-400/10 transition-colors"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </animated.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        
      </motion.div>
    </div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={ref} className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-5 rounded-full mb-6 bg-gradient-to-br ${stat.gradient} group-hover:shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center text-4xl font-bold mb-3">
                    <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {inView ? (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          separator=","
                        />
                      ) : '0'}
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.text}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl transition-all duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <Features />
      <Services />
      <Faq />
    </>
  );
};