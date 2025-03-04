import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Home, Building, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const Canada = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "Study Permit", description: "For international students at designated learning institutions" },
        { name: "Post-Graduation Work Permit (PGWP)", description: "Work permit for graduates of Canadian institutions" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "Temporary Foreign Worker Program (TFWP)", description: "For workers with a job offer and LMIA" },
        { name: "International Mobility Program (IMP)", description: "Work permits without LMIA, e.g., intra-company transfers" },
        { name: "Express Entry Work Permit", description: "Temporary work permit for Express Entry candidates" }
      ]
    },
    {
      icon: Home,
      title: "Family Visas",
      types: [
        { name: "Spousal Sponsorship", description: "For spouses or common-law partners of Canadian citizens/PRs" },
        { name: "Parent and Grandparent Sponsorship", description: "For parents and grandparents of Canadian citizens/PRs" },
        { name: "Super Visa", description: "Long-term visitor visa for parents and grandparents" }
      ]
    },
    {
      icon: Building,
      title: "Permanent Residence",
      types: [
        { name: "Express Entry", description: "Points-based system including FSWP, FSTP, and CEC" },
        { name: "Provincial Nominee Program (PNP)", description: "Province-specific nomination for PR" },
        { name: "Business Immigration", description: "For entrepreneurs and investors (e.g., Start-Up Visa)" }
      ]
    }
  ];

  const canadaStats = [
    { number: 130, suffix: '+', text: 'Universities & Colleges' },
    { number: 640000, suffix: '+', text: 'International Students' },
    { number: 300000, suffix: '+', text: 'PR Invitations Annually' },
    { number: 2, suffix: 'nd', text: 'Largest Country by Area' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile and eligibility for Canadian visa options.",
      details: [
        "Comprehensive profile evaluation",
        "CRS score calculation (if applicable)",
        "Visa or PR pathway identification",
        "Timeline and cost estimation"
      ]
    },
    {
      title: "Eligibility Assessment",
      description: "We determine your best immigration pathway based on Canadian requirements.",
      details: [
        "Language test planning (IELTS/CLB)",
        "Education credential assessment (ECA)",
        "Work experience verification",
        "Provincial nomination options"
      ]
    },
    {
      title: "Express Entry Profile",
      description: "For PR candidates, we create and optimize your Express Entry profile.",
      details: [
        "Profile creation in the Express Entry pool",
        "CRS score maximization strategies",
        "Job Bank registration (if applicable)",
        "Invitation to Apply (ITA) monitoring"
      ]
    },
    {
      title: "Application Preparation",
      description: "We compile and submit your visa or PR application.",
      details: [
        "Application form completion",
        "Supporting document preparation",
        "Biometrics and medical exam coordination",
        "Application submission"
      ]
    },
    {
      title: "Post-Submission Support",
      description: "We assist you through the review process until approval.",
      details: [
        "Application status tracking",
        "Response to additional document requests",
        "Interview preparation (if required)",
        "Landing and settlement guidance"
      ]
    },
    {
      title: "Settlement Services",
      description: "We provide support for your transition to life in Canada.",
      details: [
        "Pre-arrival orientation",
        "SIN and healthcare registration",
        "Housing and employment assistance",
        "Community integration resources"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is Express Entry and how does it work?",
      answer: "Express Entry is Canada’s points-based system for managing applications for permanent residence under three programs: Federal Skilled Worker Program (FSWP), Federal Skilled Trades Program (FSTP), and Canadian Experience Class (CEC). Candidates create a profile with factors like age, education, work experience, and language skills to receive a Comprehensive Ranking System (CRS) score. The highest-scoring candidates receive an Invitation to Apply (ITA) during regular draws, typically every two weeks."
    },
    {
      question: "What are the language requirements for Canadian immigration?",
      answer: "Most programs require a minimum Canadian Language Benchmark (CLB) level. For Express Entry, CLB 7 (IELTS 6.0 in each band) is typically needed for FSWP and CEC, while FSTP may require CLB 5 for reading/writing and CLB 4 for listening/speaking. Study permits require proof of language proficiency (e.g., IELTS 6.0+), depending on the institution. Higher scores can boost your CRS points significantly."
    },
    {
      question: "How long does it take to process a Canadian visa or PR application?",
      answer: "Processing times vary: Study permits take 10-12 weeks, work permits (TFWP) 10-20 weeks, Express Entry PR applications 6-12 months, and family sponsorships 12-24 months. Times depend on application completeness, program demand, and biometrics/medical exam scheduling."
    },
    {
      question: "What is the Provincial Nominee Program (PNP)?",
      answer: "The PNP allows Canadian provinces and territories to nominate candidates for PR based on local labor market needs. Each province has streams (e.g., skilled workers, entrepreneurs) with specific criteria. A nomination adds 600 CRS points in Express Entry, virtually guaranteeing an ITA, or you can apply directly through a province."
    },
    {
      question: "How can international students transition to permanent residence?",
      answer: "International students can apply for a Post-Graduation Work Permit (PGWP) after completing their studies, valid for up to 3 years based on program length. Gaining Canadian work experience through the PGWP can qualify them for the Canadian Experience Class (CEC) under Express Entry or a PNP stream. High language scores and a Canadian degree further boost CRS points."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Canada Immigration Services" 
        subtitle="Your pathway to opportunities in the True North"
        backgroundImage="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in Canada</h2>
            <p className="text-gray-600 mb-6">
              Canada offers a high quality of life, top-tier education, and vast opportunities in a welcoming, multicultural society. Our comprehensive Canadian immigration services guide you through the process with expert support tailored to your goals.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you’re pursuing study, work, or permanent residency, we help you navigate Canada’s immigration system, including Express Entry and Provincial Nominee Programs, with end-to-end assistance from consultation to settlement.
            </p>
            <p className="text-gray-600">
              Our experienced consultants have successfully assisted thousands of clients in achieving their Canadian dreams, leveraging our deep understanding of Canada’s points-based system and evolving policies.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  95%
                </div>
                <p className="text-gray-700">
                  Of our Canadian visa and PR applications are approved on the first attempt, compared to the national average of 68%.
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
              src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80" 
              alt="Toronto skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 4,000 clients who have successfully relocated to Canada with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">Canada Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {canadaStats.map((stat, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-6">Canadian Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major Canadian visa and PR categories to suit your needs and goals.
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
        
        {/* Why Choose Canada Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Canada?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Canada offers numerous advantages for immigrants seeking education, career growth, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Education",
                description: "Globally recognized universities and colleges with affordable tuition for residents.",
                image: "https://images.unsplash.com/photo-1580582932707-520aed4ade87?auto=format&fit=crop&q=80"
              },
              {
                title: "Robust Economy",
                description: "Strong job market with opportunities in tech, healthcare, and skilled trades.",
                image: "https://images.unsplash.com/photo-1486325212027-6ea03e2b8039?auto=format&fit=crop&q=80"
              },
              {
                title: "Universal Healthcare",
                description: "Free healthcare for residents through a publicly funded system.",
                image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
              },
              {
                title: "Multicultural Society",
                description: "One of the most diverse nations, welcoming immigrants from all backgrounds.",
                image: "https://images.unsplash.com/photo-1517487881594-2787fef0ebf6?auto=format&fit=crop&q=80"
              },
              {
                title: "Natural Beauty",
                description: "Vast landscapes, from mountains and forests to lakes and coastlines.",
                image: "https://images.unsplash.com/photo-1505831891887-2c7f8207bb88?auto=format&fit=crop&q=80"
              },
              {
                title: "Pathway to Citizenship",
                description: "Clear PR and citizenship routes after 3-5 years of residence.",
                image: "https://images.unsplash.com/photo-1561336313-0bd5b5f2272e?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold text-center mb-6">Our Canadian Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from consultation to successful visa or PR approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Canadian Immigration FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Canadian Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our Canadian immigration experts today for a free consultation. We’ll assess your profile and provide tailored guidance for your visa or PR application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our Canadian Immigration Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced Canadian immigration consultants",
                  "End-to-end support from CRS assessment to settlement",
                  "95% success rate for Canadian visa and PR applications",
                  "Expertise in Express Entry and PNP systems",
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

export default Canada;