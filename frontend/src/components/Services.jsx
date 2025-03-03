import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Services Data
const services = [
  {
    title: "Study Abroad Programs",
    description: "Expert guidance for international education opportunities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    detailedInfo:
      "Our Study Abroad Programs offer personalized guidance to help you choose the best universities and courses worldwide. From selecting the right program to preparing your application, we ensure you have the best chance of success. Our team provides end-to-end support, including scholarship assistance and pre-departure briefings.",
  },
  {
    title: "Student Visas",
    description: "Comprehensive support for student visa applications.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    detailedInfo:
      "Navigating the visa process can be complex, but we make it simple. Our experts assist with document preparation, application submission, and interview preparation. We stay updated with the latest visa regulations to ensure a smooth and successful application process.",
  },
  {
    title: "University Admissions",
    description: "Strategic guidance for university applications worldwide.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    detailedInfo:
      "Our University Admissions service helps you craft a compelling application that stands out. From writing a strong personal statement to securing recommendation letters, we guide you through every step. We also provide insights into university rankings and program suitability to help you make informed decisions.",
  },
];

// Education Images (Success Stories)
const educationImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80",
];

// ServiceCard Component
const ServiceCard = ({ service, index, onCardClick }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * (index + 1), -100 * (index + 1)]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => onCardClick(index)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/90">{service.description}</p>
      </div>
    </motion.div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, selectedService, onNext, onPrev }) => {
  if (!selectedService) return null;

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
            className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">{selectedService.title}</h3>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            <p className="text-gray-700 mb-6">{selectedService.detailedInfo}</p>

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

// Services Component
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
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">How We Help You</h2>
          <p className="text-xl text-gray-600">Your pathway to international education success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          {educationImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Success Story ${index + 1}`}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};