import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProcessSteps } from "../../components/ProcessSteps"; // Named import
import { TestimonialCard } from "../../components/TestimonialCard"; // Named import
import { FAQSection } from "../../components/FAQSection"; // Named import
import ContactForm from "../../components/ContactForm"; // Default import (consistent with previous fixes)
import { CheckCircle } from "react-feather";

const PRVisa = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const prSteps = [
    { title: "Eligibility Assessment", description: "We evaluate your PR potential." },
    { title: "Document Collection", description: "We gather all required files." },
    { title: "Application Filing", description: "We submit your PR request." },
    { title: "Residency Approval", description: "You obtain PR confirmation." },
  ];

  const prTestimonials = [
    {
      name: "John Doe",
      feedback: "Fantastic guidance, smooth PR journey!",
      country: "Canada",
    },
    {
      name: "Jane Smith",
      feedback: "Expert team simplified my PR approval.",
      country: "Australia",
    },
  ];

  const prFAQs = [
    {
      question: "How long does PR take?",
      answer: "Ranges from 6 to 18 months, depending on the country.",
    },
    {
      question: "What paths lead to PR?",
      answer: "Skilled migration, family ties, or business investment.",
    },
  ];

  const residencyCountries = [
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80",
      programs: ["Skilled Migrant Path", "Work to PR", "Family Sponsorship"],
      timeframe: "8-18 months",
      points: "Points-based, favoring skilled talent",
    },
    {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
      programs: ["Skilled Worker PR", "Family Residency", "Innovator Route"],
      timeframe: "5 years + processing",
      points: "Requires consistent residency status",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Country Listings */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {residencyCountries.map((country, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={`${country.name} scenery`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{country.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Residency Routes:</h4>
                  <ul className="space-y-1">
                    {country.programs.map((route, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-gray-700">{route}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Timeline:</span>
                    <span className="text-sm font-medium">{country.timeframe}</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="text-gray-500">System: </span>
                    {country.points}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PR Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Steps to PR Success</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our structured approach to achieving your residency goal.
          </p>
          <ProcessSteps steps={prSteps} />
        </div>

        {/* Client Experiences */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Client Triumphs</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from those who secured PR with our assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} index={idx} />
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <FAQSection faqs={prFAQs} title="PR Inquiry Corner" />

        {/* Contact Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Start Your Residency Path</h2>
            <p className="text-gray-600 mb-6">
              Get in touch for a complimentary PR consultation.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Partner With Us?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized PR guidance",
                  "End-to-end process support",
                  "94% success record",
                  "Tailored application tactics",
                  "Ongoing status updates",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            title="Expert PR Support"
            subtitle="Submit your info for a response within 24 hours."
          />
        </div>
      </div>
    </div>
  );
};

export default PRVisa;