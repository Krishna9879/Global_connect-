import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Home, Building, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const Germany = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "Student Visa", description: "For studies at German universities and colleges" },
        { name: "Language Course Visa", description: "For intensive German language courses" },
        { name: "Student Applicant Visa", description: "For those seeking university admission while in Germany" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "EU Blue Card", description: "For highly qualified professionals with a job offer" },
        { name: "Skilled Workers Visa", description: "For qualified professionals with vocational training" },
        { name: "Job Seeker Visa", description: "For qualified professionals to search for employment in Germany" },
        { name: "Self-Employment Visa", description: "For entrepreneurs and freelancers" }
      ]
    },
    {
      icon: Home,
      title: "Family Visas",
      types: [
        { name: "Family Reunion Visa", description: "For spouses and minor children of German residents" },
        { name: "Family Reunion with German Citizen", description: "For family members of German citizens" }
      ]
    },
    {
      icon: Building,
      title: "Settlement & Citizenship",
      types: [
        { name: "Settlement Permit", description: "Permanent residence after qualifying period" },
        { name: "German Citizenship", description: "Naturalization after 6-8 years of legal residence" }
      ]
    }
  ];

  const germanyStats = [
    { number: 400, suffix: '+', text: 'Universities & Colleges' },
    { number: 320000, suffix: '+', text: 'International Students' },
    { number: 400000, suffix: '+', text: 'Job Vacancies' },
    { number: 4, suffix: 'th', text: 'Largest Economy' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, goals, and eligibility for various German visa options.",
      details: [
        "Comprehensive profile evaluation",
        "Visa category identification",
        "Timeline and cost estimation",
        "Documentation strategy"
      ]
    },
    {
      title: "Document Preparation",
      description: "We help you prepare and organize all required documents for your visa application.",
      details: [
        "Document checklist preparation",
        "Qualification recognition guidance",
        "Translation and legalization assistance",
        "Document review and verification"
      ]
    },
    {
      title: "Language Preparation",
      description: "We provide guidance on German language requirements and test preparation.",
      details: [
        "Language level assessment",
        "Test preparation resources",
        "Course recommendations",
        "Certificate verification"
      ]
    },
    {
      title: "Application Preparation",
      description: "We prepare your visa application with meticulous attention to detail.",
      details: [
        "Application form completion",
        "Supporting document compilation",
        "Cover letter drafting",
        "Application review"
      ]
    },
    {
      title: "Visa Submission",
      description: "We guide you through the visa submission process at the German embassy or consulate.",
      details: [
        "Appointment scheduling",
        "Submission guidance",
        "Fee payment assistance",
        "Interview preparation"
      ]
    },
    {
      title: "Post-Approval Support",
      description: "We provide guidance on next steps after visa approval.",
      details: [
        "Pre-departure preparation",
        "Registration process in Germany",
        "Residence permit application",
        "Integration course information"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the EU Blue Card and who is eligible?",
      answer: "The EU Blue Card is a residence permit for highly qualified non-EU professionals. Eligibility requirements include: 1) A university degree (at least 3 years of study); 2) A job offer or employment contract with a minimum annual gross salary of €58,400 (2023), or €45,552 for shortage occupations like STEM fields and doctors; 3) The job must match your qualifications. The Blue Card offers advantages like faster path to permanent residence (after 21-33 months) and simplified family reunification."
    },
    {
      question: "How does the Skilled Workers Immigration Act benefit non-EU professionals?",
      answer: "The Skilled Workers Immigration Act, implemented in 2020, expanded immigration opportunities for qualified professionals from non-EU countries. Key benefits include: 1) Qualified professionals with vocational training (not just university graduates) can now work in Germany; 2) The labor market test was abolished for qualified professionals; 3) Job seekers with qualifications can stay in Germany for 6 months to find employment; 4) Simplified procedures for qualification recognition; 5) Opportunities to complete qualification measures in Germany if foreign qualifications are partially recognized."
    },
    {
      question: "What are the German language requirements for different visa types?",
      answer: "Requirements vary by visa type: 1) Student Visa: Usually B1-B2 level for German-taught programs, or proof of English proficiency for English-taught programs; 2) Work Visas: Generally no language requirements for EU Blue Card holders in English-speaking workplaces, but basic German (A1-A2) is recommended for daily life; 3) Skilled Worker Visa: B1 level for healthcare professionals, A2 for most other professions; 4) Settlement Permit: B1 level required; 5) Citizenship: B1 level required. Language certificates from recognized institutes like Goethe-Institut or TestDaF are typically accepted."
    },
    {
      question: "How long does it take to process German visa applications?",
      answer: "Processing times vary by visa type and country of application. Student visas typically take 4-6 weeks, work visas 1-3 months, and family reunion visas 2-3 months. Factors affecting processing time include application completeness, verification of documents, and embassy workload. The German authorities recommend applying at least 3 months before your planned travel. For work visas, the fast-track procedure for skilled workers can reduce processing time to about 3-4 weeks."
    },
    {
      question: "What is the pathway to permanent residence and citizenship in Germany?",
      answer: "For permanent residence (Settlement Permit): 1) EU Blue Card holders can apply after 21 months with B1 German skills or 33 months without; 2) Other skilled workers typically after 4 years; 3) Family members usually after 5 years. Requirements include sufficient income, basic German skills (A1-B1), integration course (if required), and pension contributions. For citizenship: Generally possible after 8 years of legal residence, reduced to 6-7 years with successful integration. Requirements include B1 German skills, financial self-sufficiency, no serious criminal record, passing the naturalization test, and usually renouncing previous citizenship (with exceptions)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Germany Immigration Services" 
        subtitle="Your pathway to opportunities in Europe's largest economy"
        backgroundImage="https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80"
        overlayColor="from-blue-900/80 to-yellow-900/80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in Germany</h2>
            <p className="text-gray-600 mb-6">
              Germany offers exceptional opportunities for education, career advancement, and quality of life in the heart of Europe. Our comprehensive German immigration services are designed to help you navigate the complex visa system with confidence.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll identify the most suitable visa pathways based on your profile and goals. We provide end-to-end support, from initial consultation and document preparation to application submission and post-approval assistance.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of individuals and families achieve their German dreams. We understand the nuances of German immigration law and stay updated on policy changes, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-yellow-600 flex items-center justify-center text-white text-2xl font-bold">
                  93%
                </div>
                <p className="text-gray-700">
                  Of our German visa applications are approved on the first attempt, compared to the national average of 65%.
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
              src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80" 
              alt="Berlin skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 3,000 clients who have successfully relocated to Germany with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">Germany Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {germanyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
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
          <h2 className="text-3xl font-bold text-center mb-6">German Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major German visa categories to suit your specific needs and goals.
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
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-yellow-600 rounded-full">
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
        
        {/* Why Choose Germany Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Germany?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Germany offers numerous advantages for immigrants seeking education, career opportunities, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Free Education",
                description: "Most public universities offer tuition-free education, even for international students.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
              },
              {
                title: "Strong Economy",
                description: "Europe's largest economy with low unemployment and high demand for skilled workers.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare System",
                description: "Excellent universal healthcare system with comprehensive coverage.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
              },
              {
                title: "Work-Life Balance",
                description: "Strong labor laws, generous vacation time, and emphasis on quality of life.",
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
              },
              {
                title: "Central European Location",
                description: "Ideal base for exploring Europe with excellent transportation infrastructure.",
                image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80"
              },
              {
                title: "Pathway to Permanent Residence",
                description: "Clear pathway to permanent residence and citizenship for qualified immigrants.",
                image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold text-center mb-6">Our German Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="German Immigration FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your German Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our German immigration experts today for a free consultation. We'll assess your profile and provide personalized guidance for your visa application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our German Immigration Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced German immigration consultants",
                  "End-to-end support from document preparation to visa approval",
                  "93% success rate for German visa applications",
                  "Up-to-date knowledge of German immigration policies",
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

export default Germany;