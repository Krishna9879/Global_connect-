import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, Globe, Users, Clock, X } from "lucide-react";
import globalReachImage from '../assets/global_reach.jpg';
import fastprocess from '../assets/fastProcsess.avif';
import dedicatedTeam from '../assets/DedicatedTeam.avif';
import student1 from '../assets/student1.webp';
import student2 from '../assets/student2.webp';
import student5 from '../assets/student5.avif';
import student4 from '../assets/student4.avif';
import student3 from '../assets/student3.avif';

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
    description: "Access to immigration opportunities in 72 countries worldwide.",
    image: globalReachImage,
    detailedInfo:
      "We’ve established partnerships with top universities and colleges across 72 countries, including the USA, Canada, UK, Australia, and Europe. Our extensive network allows us to recommend programs that align with your academic goals and career aspirations. Whether you’re aiming for a bachelor’s, master’s, or short-term exchange program, we’ve got you covered globally.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced immigration specialists committed to your success.",
    image: dedicatedTeam,
    detailedInfo:
      "Our team consists of seasoned professionals with over a decade of experience in international education and visa processing. Each member is trained to handle complex cases, offering personalized support from profile assessment to post-arrival assistance. We pride ourselves on a 97% visa success rate, reflecting our commitment to your educational dreams.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient handling of your application with minimal processing time.",
    image: fastprocess,
    detailedInfo:
      "Time is critical, and we ensure your application moves quickly. Our streamlined system allows document review within 48 hours, followed by swift submission to the relevant authorities. We provide regular updates on your application status and expedite processes where possible, helping you meet university deadlines without stress.",
  },
];

// Testimonials Data (Updated with new student names and tailored descriptions)
const testimonials = [
  {
    name: "Fenil Patel",
    role: "MBA Student",
    content:
      "GlobalConnect made my MBA journey abroad seamless! From selecting top business schools to securing my visa, their expertise in management education was invaluable.",
    image: student2,
  },
  {
    name: "Ashish Patel",
    role: "IT Student",
    content:
      "Thanks to GlobalConnect, I’m now studying IT at a leading university. Their team streamlined my application and visa process, ensuring I could focus on my tech career.",
    image: student1,
  },
  {
    name: "Kripa Joshi",
    role: "Graduate Student",
    content:
      "The support from GlobalConnect was exceptional for my graduate studies. They guided me through university applications and visa approvals with ease and confidence.",
    image: student4,
  },
  {
    name: "Neha Prajapati",
    role: "Nursing Student",
    content:
      "GlobalConnect helped me secure my nursing program abroad. Their knowledge of healthcare education and visa requirements made the entire process stress-free!",
    image: student5,
  },
  {
    name: "Kenil Patel",
    role: "M Pharm Student",
    content:
      "With GlobalConnect’s guidance, I got into a top pharmacy program. Their expertise in pharmaceutical education and fast visa processing were key to my success.",
    image: student3,
  },
  {
    name: "Vishva Joshi",
    role: "Graduate Student",
    content:
      "GlobalConnect turned my graduate study dreams into reality. Their personalized support for my application and visa process was outstanding from start to finish.",
    image: student2,
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
            personalized solutions across 72 countries, boasting a 97% success rate.
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