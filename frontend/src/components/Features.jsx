import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Globe, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description: "Professional support throughout your immigration journey with personalized solutions.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to immigration opportunities in multiple countries worldwide.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced immigration specialists committed to your success.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient handling of your application with minimal processing time.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "International Student",
    content: "Thanks to GlobalMove, my dream of studying abroad became a reality!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Graduate Student",
    content: "Professional service that made my university application process smooth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Emily Brown",
    role: "Exchange Student",
    content: "Incredible support throughout my student visa application process.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

const FeatureCard = ({ feature, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make your educational journey abroad smooth and successful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-32 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Students Say
          </motion.h2>
          
          <div className="relative">
            <motion.div
              animate={{
                x: [0, -2000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }
              }}
              className="flex gap-8"
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[400px] bg-white p-8 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-3">{testimonial.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};