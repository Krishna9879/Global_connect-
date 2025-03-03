import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, Globe, Users, Clock, X } from "lucide-react";

// Features Data
const features = [
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description: "Professional support throughout your immigration journey with personalized solutions.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    detailedInfo:
      "Our certified immigration consultants offer comprehensive assistance tailored to your unique situation. From initial consultation to final visa approval, we guide you through each step, ensuring all documentation meets specific country requirements. Our experts stay updated with the latest immigration policies and have successfully helped thousands of students secure their study permits.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to immigration opportunities in multiple countries worldwide.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    detailedInfo:
      "We’ve established partnerships with top universities and colleges across 25+ countries, including the USA, Canada, UK, Australia, and Europe. Our extensive network allows us to recommend programs that align with your academic goals and career aspirations. Whether you’re aiming for a bachelor’s, master’s, or short-term exchange program, we’ve got you covered globally.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced immigration specialists committed to your success.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    detailedInfo:
      "Our team consists of seasoned professionals with over a decade of experience in international education and visa processing. Each member is trained to handle complex cases, offering personalized support from profile assessment to post-arrival assistance. We pride ourselves on a 98% visa success rate, reflecting our commitment to your educational dreams.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient handling of your application with minimal processing time.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    detailedInfo:
      "Time is critical, and we ensure your application moves quickly. Our streamlined system allows document review within 48 hours, followed by swift submission to the relevant authorities. We provide regular updates on your application status and expedite processes where possible, helping you meet university deadlines without stress.",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "International Student",
    content:
      "Thanks to GlobalMove, my dream of studying abroad became a reality! The team guided me through every step, from choosing a university to getting my visa approved.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Graduate Student",
    content:
      "Professional service that made my university application process smooth. Their expertise saved me time and effort, and I got accepted into my dream program!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Brown",
    role: "Exchange Student",
    content:
      "Incredible support throughout my student visa application process. They were always available to answer my questions and made the entire experience stress-free.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

// FeatureCard Component
const FeatureCard = ({ feature, index, onCardClick }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative group cursor-pointer"
      onClick={() => onCardClick(index)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
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

// Modal Component
const Modal = ({ isOpen, onClose, selectedFeature, onNext, onPrev }) => {
  if (!selectedFeature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-lg w-full m-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">{selectedFeature.title}</h3>
            <p className="text-gray-600 mb-4">{selectedFeature.description}</p>
            <p className="text-gray-700 mb-6">{selectedFeature.detailedInfo}</p>

            <div className="flex justify-between">
              <button
                onClick={onPrev}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={onNext}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Features Component
export const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedFeatureIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedFeatureIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedFeatureIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

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
            We transform your dream of studying abroad into reality with expert support and
            personalized solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedFeature={features[selectedFeatureIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
        />

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
              animate={{ x: [0, -2000] }}
              transition={{
                x: { repeat: Infinity, duration: 30, ease: "linear" },
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