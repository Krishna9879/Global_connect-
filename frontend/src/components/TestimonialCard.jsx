import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={
              testimonial.avatar ||
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            }
            alt={`${testimonial.name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location || testimonial.country}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array(5)
          .fill(null)
          .map((_, starIdx) => (
            <Star
              key={starIdx}
              className={`w-4 h-4 ${
                starIdx < (testimonial.rating || 0)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
      </div>

      <p className="text-gray-700 italic mb-4">"{testimonial.feedback || testimonial.text}"</p>

      <div className="flex items-center text-sm text-gray-500">
        <span>{testimonial.service || "Visa Service"}</span>
        <span className="mx-2">•</span>
        <span>{testimonial.date || "Recent"}</span>
      </div>
    </motion.div>
  );
};