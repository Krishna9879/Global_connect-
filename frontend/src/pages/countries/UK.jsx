import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Building, Globe, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const UK = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "Student Visa", description: "For studies at UK universities and colleges" },
        { name: "Child Student Visa", description: "For students aged 4-17 at independent schools" },
        { name: "Graduate Visa", description: "For graduates to work or look for work after studies" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "Skilled Worker Visa", description: "For qualified workers with a job offer from a UK employer" },
        { name: "Health and Care Worker Visa", description: "For medical professionals with a job offer" },
        { name: "Global Talent Visa", description: "For leaders or potential leaders in academia, research, arts, or digital technology" },
        { name: "Innovator Founder Visa", description: "For experienced entrepreneurs with innovative, viable business ideas" }
      ]
    },
    {
      icon: Building,
      title: "Family Visas",
      types: [
        { name: "Family Visa", description: "For partners, children, and other family members of British citizens or settled persons" },
        { name: "UK Ancestry Visa", description: "For Commonwealth citizens with a UK-born grandparent" }
      ]
    },
    {
      icon: Globe,
      title: "Settlement & Citizenship",
      types: [
        { name: "Indefinite Leave to Remain", description: "Permanent residence after qualifying period" },
        { name: "British Citizenship", description: "Naturalization after holding ILR for 12 months" }
      ]
    }
  ];

  const ukStats = [
    { number: 140, suffix: '+', text: 'Universities & Colleges' },
    { number: 450000, suffix: '+', text: 'International Students' },
    { number: 30000, suffix: '+', text: 'Skilled Worker Visas Monthly' },
    { number: 5, suffix: ' Years', text: 'Path to Settlement' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, goals, and eligibility for various UK visa options.",
      details: [
        "Comprehensive profile evaluation",
        "Visa category identification",
        "Timeline and cost estimation",
        "Documentation strategy"
      ]
    },
    {
      title: "Visa Strategy Development",
      description: "We create a customized immigration strategy based on your specific situation.",
      details: [
        "Visa category selection",
        "Alternative pathways analysis",
        "Long-term immigration planning",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Documentation Preparation",
      description: "We help you prepare and organize all required documents for your visa application.",
      details: [
        "Document checklist preparation",
        "Form completion guidance",
        "Supporting evidence compilation",
        "Document review and verification"
      ]
    },
    {
      title: "Application Filing",
      description: "We prepare and file your application with UK Visas and Immigration.",
      details: [
        "Application package preparation",
        "Fee payment guidance",
        "Biometrics appointment scheduling",
        "Submission and tracking"
      ]
    },
    {
      title: "Post-Submission Support",
      description: "We provide ongoing support throughout the processing period until visa approval.",
      details: [
        "Application status tracking",
        "Additional document requests handling",
        "Interview preparation (if required)",
        "Approval and passport collection guidance"
      ]
    },
    {
      title: "Post-Approval Support",
      description: "We provide guidance on next steps after visa approval.",
      details: [
        "Pre-departure preparation",
        "Arrival and settlement guidance",
        "Status maintenance advice",
        "Extension/renewal planning"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the points-based immigration system in the UK?",
      answer: "The UK's points-based immigration system assigns points for specific skills, qualifications, salaries, and professions. Most work visas require you to score a minimum number of points to qualify. For example, the Skilled Worker visa requires 70 points, with mandatory points for job offers, English language skills, and appropriate salary levels."
    },
    {
      question: "How long does it take to process UK visa applications?",
      answer: "Processing times vary by visa type. Standard visitor visas typically take 3-4 weeks, student visas 3 weeks, and work visas 3-8 weeks. Priority and super-priority services are available for most visa categories at additional cost, reducing processing times to 5 working days or 24 hours respectively."
    },
    {
      question: "What are the English language requirements for UK visas?",
      answer: "Most UK visas require proof of English language proficiency. Accepted tests include IELTS, TOEFL, PTE Academic, and others. The required level varies by visa type, with CEFR B1 (intermediate) for most work visas and CEFR B2 (upper intermediate) for student visas. Some applicants may be exempt based on nationality or education history."
    },
    {
      question: "What is the Immigration Health Surcharge (IHS)?",
      answer: "The Immigration Health Surcharge is a fee that most visa applicants must pay to access the UK's National Health Service (NHS). As of 2023, it costs £624 per year for adults and £470 for students and those under 18. The full amount for your visa duration must be paid upfront with your application."
    },
    {
      question: "How can I apply for settlement (Indefinite Leave to Remain) in the UK?",
      answer: "Most work and family visa holders can apply for settlement after 5 years of continuous residence in the UK. Requirements include passing the Life in the UK test, meeting English language requirements, having no criminal record, and maintaining continuous residence (not being outside the UK for more than 180 days in any 12-month period)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="UK Immigration Services" 
        subtitle="Your pathway to opportunities in the United Kingdom"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"
        overlayColor="from-blue-900/80 to-red-900/80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in the United Kingdom</h2>
            <p className="text-gray-600 mb-6">
              The United Kingdom offers exceptional opportunities for education, career advancement, business growth, and quality of life. Our comprehensive UK immigration services are designed to help you navigate the complex points-based immigration system with confidence.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll identify the most suitable visa pathways based on your profile and goals. We provide end-to-end support, from initial consultation and strategy development to application preparation and post-approval assistance.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of individuals and families achieve their British dreams. We understand the nuances of UK immigration law and stay updated on policy changes, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  94%
                </div>
                <p className="text-gray-700">
                  Of our UK visa applications are approved on the first attempt, compared to the national average of 72%.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80" 
              alt="London skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 4,000 clients who have successfully relocated to the United Kingdom with our help.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">UK Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ukStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  {inView ? (
                    <>
                      <CountUp end={stat.number} duration={2.5} separator="," />
                      {stat.suffix}
                    </>
                  ) : '0'}
                </div>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Visa Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">UK Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major UK visa categories to suit your specific needs and goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-full">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.types.map((type, i) => (
                      <li key={i} className="flex flex-col">
                        <span className="font-medium text-gray-800">{type.name}</span>
                        <span className="text-gray-600 text-sm">{type.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Why Choose UK Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose the United Kingdom?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The UK offers numerous advantages for immigrants seeking education, career opportunities, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Education",
                description: "Home to prestigious universities like Oxford, Cambridge, and Imperial College, offering exceptional educational opportunities.",
                image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80"
              },
              {
                title: "Strong Economy",
                description: "One of the world's largest economies with opportunities in finance, technology, healthcare, creative industries, and more.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare System",
                description: "Access to the National Health Service (NHS), one of the world's best healthcare systems.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
              },
              {
                title: "Cultural Diversity",
                description: "A multicultural society with rich history, arts, and culture, welcoming people from all backgrounds.",
                image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80"
              },
              {
                title: "Innovation Hub",
                description: "Leading global innovation in technology, research, finance, and creative industries.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
              },
              {
                title: "Quality of Life",
                description: "High standard of living, excellent public transportation, diverse housing options, and abundant recreational opportunities.",
                image: "https://images.unsplash.com/photo-1520967824495-b529aeba26df?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our UK Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="UK Immigration FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your British Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our UK immigration experts today for a free consultation. We'll assess your profile and provide personalized guidance for your visa application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our UK Immigration Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced UK immigration consultants",
                  "End-to-end support from strategy development to visa approval",
                  "94% success rate for UK visa applications",
                  "Up-to-date knowledge of UK immigration policies and procedures",
                  "Transparent process with regular updates"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UK;