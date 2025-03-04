import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe2, GraduationCap, Briefcase, Users, Building2, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

// Countries Data
const countries = [
  {
    name: "USA",
    flag: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80",
    description: "The land of opportunities offering world-class education and diverse career prospects.",
    stats: {
      universities: "4,000+",
      avgSalary: "$65,000",
      jobGrowth: "3.8%",
      prTime: "12-18 months"
    },
    features: [
      "Top-ranked universities",
      "Optional Practical Training (OPT)",
      "Diverse job market",
      "Rich cultural experience"
    ],
    path: "/countries/usa"
  },
  {
    name: "Canada",
    flag: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80", // New Canada image (Banff National Park)
    description: "A welcoming nation with excellent quality of life and immigration-friendly policies.",
    stats: {
      universities: "100+",
      avgSalary: "CAD 55,000",
      jobGrowth: "4.2%",
      prTime: "6-8 months"
    },
    features: [
      "Post-Graduate Work Permit",
      "Easy PR pathway",
      "Universal healthcare",
      "Multicultural society"
    ],
    path: "/countries/canada"
  },
  {
    name: "UK",
    flag: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    description: "Rich academic heritage combined with modern innovation and global opportunities.",
    stats: {
      universities: "150+",
      avgSalary: "£35,000",
      jobGrowth: "3.5%",
      prTime: "5 years"
    },
    features: [
      "Graduate Route visa",
      "Historic universities",
      "Global financial hub",
      "Rich cultural heritage"
    ],
    path: "/countries/uk"
  },
  {
    name: "Australia",
    flag: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
    description: "High quality of life with excellent education and work opportunities in a beautiful setting.",
    stats: {
      universities: "43",
      avgSalary: "AUD 72,000",
      jobGrowth: "4.0%",
      prTime: "8-12 months"
    },
    features: [
      "Post-Study Work visa",
      "High living standards",
      "Skills shortage opportunities",
      "Work-life balance"
    ],
    path: "/countries/australia"
  },
  {
    name: "New Zealand",
    flag: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80",
    description: "Perfect blend of quality education, work opportunities, and stunning natural beauty.",
    stats: {
      universities: "8",
      avgSalary: "NZD 55,000",
      jobGrowth: "3.9%",
      prTime: "6-8 months"
    },
    features: [
      "Post-Study work rights",
      "Quality education",
      "Safe environment",
      "Beautiful landscapes"
    ],
    path: "/countries/new-zealand"
  },
  {
    name: "Germany",
    flag: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80",
    description: "Strong economy with excellent education opportunities and high-quality living standards.",
    stats: {
      universities: "400+",
      avgSalary: "€45,000",
      jobGrowth: "3.7%",
      prTime: "21-33 months"
    },
    features: [
      "Free education",
      "Job Seeker visa",
      "Strong economy",
      "Rich history"
    ],
    path: "/countries/germany"
  }
];

// CountryCard Component
const CountryCard = ({ country, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const icons = {
    universities: Building2,
    avgSalary: Briefcase,
    jobGrowth: Users,
    prTime: Sun
  };

  const handleExploreOpportunities = () => {
    navigate(country.path); // Redirect to the respective path
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={country.flag}
          alt={`${country.name} landscape`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-3xl font-bold text-white">{country.name}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{country.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(country.stats).map(([key, value], i) => {
            const Icon = icons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <Icon className="w-6 h-6 text-blue-600 mb-2" />
                <div className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-lg font-semibold text-gray-900">{value}</div>
              </motion.div>
            );
          })}
        </div>

        <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
        <ul className="space-y-3">
          {country.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExploreOpportunities}
          className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Explore Opportunities
        </motion.button>
      </div>
    </motion.div>
  );
};

// Countries Component
export const Countries = () => {
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
            Study & Work Abroad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore opportunities in top destinations worldwide. Our expert guidance helps you choose the perfect country for your academic and career goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Country to Choose?</h2>
          <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
  >
    Get Expert Guidance
  </motion.button>
</Link>
        </motion.div>
      </div>
    </div>
  );
};