import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import studentvisa from '../assets/student_visa.avif';
import studyabroad from '../assets/study_abroad.webp';
import universityadmission from '../assets/university_addmission.avif';

// Services Data with Expanded Content
const services = [
  {
    title: "Study Abroad Programs",
    description: "Expert guidance for international education opportunities.",
    image: studyabroad,
    detailedInfo: {
      overview: "Our Study Abroad Programs offer personalized guidance to help you choose the best universities and courses worldwide. From selecting the right program to preparing your application, we ensure you have the best chance of success.",
      features: [
        "Personalized university and course selection",
        "Application preparation and submission support",
        "Scholarship and financial aid assistance",
        "Pre-departure orientation and briefings",
        "Ongoing support during your study abroad journey"
      ],
      benefits: "With our expert team, you’ll gain access to a global network of educational opportunities, tailored to your academic and career goals."
    },
  },
  {
    title: "Student Visas",
    description: "Comprehensive support for student visa applications.",
    image: studentvisa,
    detailedInfo: {
      overview: "Navigating the visa process can be complex, but we make it simple. Our experts assist with every step to ensure a smooth and successful application.",
      features: [
        "Detailed document checklist and preparation",
        "Visa application form filling and submission",
        "Interview preparation and mock sessions",
        "Updates on latest visa regulations",
        "Post-approval guidance"
      ],
      benefits: "Our meticulous approach minimizes delays and increases approval chances, letting you focus on your education."
    },
  },
  {
    title: "University Admissions",
    description: "Strategic guidance for university applications worldwide.",
    image: universityadmission,
    detailedInfo: {
      overview: "Our University Admissions service helps you craft a compelling application that stands out. We guide you through every step to secure your spot.",
      features: [
        "Personal statement and essay writing support",
        "Recommendation letter guidance",
        "Application strategy for top universities",
        "Insights into university rankings and programs",
        "Follow-up with universities on your behalf"
      ],
      benefits: "Maximize your admission chances with a standout application tailored to your dream university."
    },
  },
];

// ServiceCard Component (Unchanged)
const ServiceCard = ({ service, index, onCardClick }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * (index + 1), -50 * (index + 1)]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-[400px] flex flex-col"
      onClick={() => onCardClick(index)}
    >
      <div className="h-2/3 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="h-1/3 bg-white p-5 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
    </motion.div>
  );
};

// Enhanced Modal Component
const Modal = ({ isOpen, onClose, selectedService, onNext, onPrev }) => {
  if (!selectedService) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-xl flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Image */}
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />

              {/* Overview */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Overview</h4>
                <p className="text-gray-600 leading-relaxed">{selectedService.detailedInfo.overview}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {selectedService.detailedInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h4>
                <p className="text-gray-600 leading-relaxed">{selectedService.detailedInfo.benefits}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrev}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Services Component (Updated)
export const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const handleCardClick = (index) => {
    setSelectedServiceIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">How We Help You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your pathway to international education success starts here with our expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedService={services[selectedServiceIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl py-16 px-8 text-center text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-lines.png')]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Success Stories</h2>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="relative z-10"
          >
            <p className="text-3xl md:text-4xl font-semibold mb-4">Coming Soon</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We're gathering inspiring stories from students who've successfully embarked on their
              international education journeys with us. Stay tuned for amazing testimonials and
              real success stories!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};