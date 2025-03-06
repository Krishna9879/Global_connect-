import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Globe2, Users, Plane, Home, Building2, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Visa Types Data
const visaTypes = [
  {
    title: "Student Visa",
    icon: GraduationCap,
    description: "Pursue your academic dreams abroad with our comprehensive student visa services. We guide you through the entire process, from university selection to visa approval.",
    benefits: [
      "University application assistance",
      "Document preparation and verification",
      "Pre-departure guidance",
      "Visa interview preparation",
      "Financial documentation support"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    path: "/services/student-visa"
  },
  {
    title: "Work Visa",
    icon: Briefcase,
    description: "Take your career global with our expert work visa services. We help professionals and skilled workers secure employment opportunities worldwide.",
    benefits: [
      "Job market analysis",
      "Employment contract review",
      "Work permit processing",
      "Skills assessment assistance",
      "Employer sponsorship guidance"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    path: "/services/work-visa"
  },
  {
    title: "PR Visa",
    icon: Globe2,
    description: "Make your dream of permanent residency a reality. Our experienced team ensures a smooth transition to your new home country.",
    benefits: [
      "Eligibility assessment",
      "Points calculation",
      "Documentation assistance",
      "Application processing",
      "Settlement guidance"
    ],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
    path: "/services/pr-visa"
  },
  {
    title: "Business Visa",
    icon: Users,
    description: "Expand your business horizons with our specialized business visa services. We facilitate international trade and investment opportunities.",
    benefits: [
      "Business plan preparation",
      "Investment guidance",
      "Market entry strategy",
      "Legal compliance support",
      "Business registration assistance"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    path: "/services/business-visa"
  },
  {
    title: "Family Visa",
    icon: Home,
    description: "Reunite with your loved ones abroad with our family visa services. We ensure a smooth and hassle-free process for family reunification.",
    benefits: [
      "Family sponsorship guidance",
      "Document preparation",
      "Application processing",
      "Interview preparation",
      "Post-arrival support"
    ],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
    path: "/services/family-visa"
  },
  {
    title: "Tourist Visa",
    icon: Plane,
    description: "Experience the world with our hassle-free tourist visa services. We make your travel dreams accessible and enjoyable.",
    benefits: [
      "Travel itinerary planning",
      "Visa application processing",
      "Travel insurance guidance",
      "Accommodation documentation",
      "Emergency support"
    ],
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80",
    path: "/services/tourist-visa"
  },
  {
    title: "Visitor Visa",
    icon: Plane,
    description: "Travel effortlessly for short-term visits with our visitor visa services, perfect for tourism, family visits, or business meetings.",
    benefits: [
      "Visa application support",
      "Travel documentation assistance",
      "Itinerary planning",
      "Visa extension guidance",
      "Travel insurance advice"
    ],
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80"
  },
  {
    title: "Investor Visa",
    icon: DollarSign,
    description: "Unlock global investment opportunities with our investor visa services, designed for entrepreneurs and high-net-worth individuals.",
    benefits: [
      "Investment option analysis",
      "Financial planning support",
      "Visa application assistance",
      "Legal compliance guidance",
      "Residency pathway advice"
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
  }
];

// Popup Component
const VisaPopup = ({ visa, onClose }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaContent = {
    "Visitor Visa": {
      intro: "Enjoy seamless travel experiences with our expert visitor visa services. Whether for tourism, family visits, or short business trips, we ensure a hassle-free process.",
      benefits: [
        { icon: Plane, title: "Easy Travel", description: "Streamlined visa processes for short-term visits." },
        { icon: Home, title: "Family Visits", description: "Reunite with loved ones effortlessly." },
        { icon: DollarSign, title: "Cost-Effective", description: "Affordable travel solutions." },
        { icon: Globe2, title: "Multiple Entries", description: "Options for frequent travelers." }
      ],
      process: [
        { title: "Eligibility Check", description: "Assess your travel purpose and visa needs.", details: ["Purpose validation", "Duration planning"] },
        { title: "Document Prep", description: "Gather and verify all required documents.", details: ["Passport", "Financial proof", "Invitation letter"] },
        { title: "Application Filing", description: "Submit your application efficiently.", details: ["Form completion", "Fee payment"] },
        { title: "Approval Support", description: "Track and expedite your visa approval.", details: ["Status updates", "Query resolution"] }
      ],
      faqs: [
        { question: "How long is a visitor visa valid?", answer: "Typically 3-12 months, depending on the country." },
        { question: "Can I extend my visitor visa?", answer: "Yes, in many cases, with proper justification." }
      ]
    },
    "Investor Visa": {
      intro: "Secure your financial future with our investor visa services. We guide investors and entrepreneurs through the process of establishing a foothold in global markets.",
      benefits: [
        { icon: Building2, title: "Global Investment", description: "Access thriving international markets." },
        { icon: TrendingUp, title: "High Returns", description: "Maximize your investment potential." },
        { icon: DollarSign, title: "Tax Benefits", description: "Leverage favorable tax structures." },
        { icon: Users, title: "Family Inclusion", description: "Bring your family with residency options." }
      ],
      process: [
        { title: "Investment Assessment", description: "Evaluate your financial capacity and goals.", details: ["Net worth review", "Investment options"] },
        { title: "Visa Strategy", description: "Develop a tailored investment visa plan.", details: ["Country selection", "Program matching"] },
        { title: "Plan Development", description: "Create a compliant investment proposal.", details: ["Financial projections", "Legal review"] },
        { title: "Document Prep", description: "Compile all necessary materials.", details: ["Financial records", "Investment proof"] },
        { title: "Processing Support", description: "Handle submission and follow-ups.", details: ["Application filing", "Interview prep"] }
      ],
      faqs: [
        { question: "What’s the minimum investment?", answer: "Varies from $50,000 to millions, depending on the country." },
        { question: "Can I gain residency?", answer: "Yes, many investor visas offer PR pathways after 2-5 years." }
      ]
    }
  };

  const content = visaContent[visa.title];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-64">
          <img src={visa.image} alt={visa.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-white">{visa.title} Services</h2>
              <p className="text-white">{visa.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full">X</button>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4">Explore {visa.title} Opportunities</h3>
            <p className="text-gray-600 mb-6">{content.intro}</p>

            {/* Benefits */}
            <h4 className="text-xl font-semibold mb-4">Why Choose {visa.title}?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                    <h5 className="text-lg font-semibold">{benefit.title}</h5>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <h4 className="text-xl font-semibold mb-4">Our {visa.title} Process</h4>
            <div className="space-y-4 mb-8">
              {content.process.map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow">
                  <h5 className="text-lg font-semibold">{idx + 1}. {step.title}</h5>
                  <p className="text-gray-600">{step.description}</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <h4 className="text-xl font-semibold mb-4">Frequently Asked Questions</h4>
            <div className="space-y-4 mb-8">
              {content.faqs.map((faq, idx) => (
                <div key={idx}>
                  <h5 className="text-lg font-semibold">{faq.question}</h5>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="text-lg font-semibold mb-2">Ready to Apply for Your {visa.title}?</h3>
              <p className="text-gray-600 mb-4">
                Contact our experts for a free consultation and personalized guidance.
              </p>
              <Link to="/contact">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// ServiceCard Component
const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const hasDedicatedPage = service.path !== undefined;

  const handleClick = () => {
    if (!hasDedicatedPage) {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="relative h-64">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <service.icon className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{service.description}</p>
          <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
          <ul className="space-y-3">
            {service.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          {hasDedicatedPage ? (
            <Link to={service.path}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Learn More
              </motion.button>
            </Link>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Learn More
            </motion.button>
          )}
        </div>
      </motion.div>

      {isPopupOpen && <VisaPopup visa={service} onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

// Services Component
export const Services = () => {
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
            Our Immigration Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your needs. Our expert team ensures a smooth and successful visa application process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
              Get Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};