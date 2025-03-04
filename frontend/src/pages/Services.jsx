import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Globe2, Users, Plane, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
  }
];

// ServiceCard Component
const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(service.path); // Redirect to the respective path
  };

  return (
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
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