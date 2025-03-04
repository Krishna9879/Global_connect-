import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Home, Mountain, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const NewZealand = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "Fee Paying Student Visa", description: "For international students enrolled in NZ educational institutions" },
        { name: "Exchange Student Visa", description: "For students participating in approved exchange programs" },
        { name: "Pathway Student Visa", description: "For students undertaking multiple courses in a pathway" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "Accredited Employer Work Visa", description: "For skilled workers with job offers from accredited employers" },
        { name: "Skilled Migrant Category", description: "Points-based residence visa for skilled workers" },
        { name: "Working Holiday Visa", description: "For young people from eligible countries to work and travel in NZ" },
        { name: "Specific Purpose Work Visa", description: "For specialized roles or projects" }
      ]
    },
    {
      icon: Home,
      title: "Family Visas",
      types: [
        { name: "Partner of a New Zealander", description: "For partners of NZ citizens or residents" },
        { name: "Parent Resident Visa", description: "For parents of NZ citizens or residents" },
        { name: "Dependent Child Resident Visa", description: "For dependent children of NZ citizens or residents" }
      ]
    },
    {
      icon: Mountain,
      title: "Business & Investment",
      types: [
        { name: "Investor Visa", description: "For those investing NZ$3 million over 4 years" },
        { name: "Investor Plus Visa", description: "For those investing NZ$10 million over 3 years" },
        { name: "Entrepreneur Work Visa", description: "For those establishing or purchasing a business in NZ" }
      ]
    }
  ];

  const nzStats = [
    { number: 8, suffix: '', text: 'Universities' },
    { number: 100000, suffix: '+', text: 'International Students' },
    { number: 50000, suffix: '+', text: 'Skilled Migrants Annually' },
    { number: 1, suffix: 'st', text: 'In Ease of Doing Business' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, goals, and eligibility for various New Zealand visa options.",
      details: [
        "Comprehensive profile evaluation",
        "Points test assessment (if applicable)",
        "Visa category identification",
        "Timeline and cost estimation"
      ]
    },
    {
      title: "Visa Strategy Development",
      description: "We create a customized immigration strategy based on your specific situation.",
      details: [
        "Visa category selection",
        "Job search strategy (if applicable)",
        "Skills assessment planning",
        "English test preparation guidance"
      ]
    },
    {
      title: "Expression of Interest (EOI)",
      description: "For Skilled Migrant Category, we help you submit a competitive EOI.",
      details: [
        "Points maximization strategy",
        "EOI preparation and submission",
        "Profile updates as needed",
        "Selection monitoring"
      ]
    },
    {
      title: "Job Search Support",
      description: "For work visas, we provide guidance on finding suitable employment in New Zealand.",
      details: [
        "Resume and cover letter optimization",
        "Job market analysis",
        "Interview preparation",
        "Employer accreditation guidance"
      ]
    },
    {
      title: "Visa Application",
      description: "We prepare and submit your visa application with all supporting documents.",
      details: [
        "Application form completion",
        "Supporting document compilation",
        "Health and character requirements",
        "Application submission and fee payment"
      ]
    },
    {
      title: "Post-Lodgment Support",
      description: "We provide ongoing support until your visa is granted.",
      details: [
        "Application status tracking",
        "Additional information requests handling",
        "Interview preparation (if required)",
        "Grant notification and next steps"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the points system work for New Zealand's Skilled Migrant Category?",
      answer: "The Skilled Migrant Category uses a points-based system to assess eligibility. Points are awarded for factors like age, work experience, qualifications, and job offers. You need at least 160 points to be selected from the Expression of Interest pool. Key point allocations include: age 20-39 (30 points), bachelor's degree (50 points), job offer in NZ (50 points), and 2-5 years of skilled work experience (20-30 points). Additional points are available for employment in areas of skill shortage or outside Auckland."
    },
    {
      question: "What is the Accredited Employer Work Visa (AEWV) and how does it work?",
      answer: "The AEWV replaced several work visa categories in 2022. It's a three-step process: 1) Employer accreditation - employers must be accredited to hire migrants; 2) Job check - the role must meet minimum pay requirements and pass a labor market test; 3) Migrant application - the worker applies for the visa. The visa is typically granted for up to 3 years, with a pathway to residence after 24 months for roles paying above the median wage. The minimum pay requirement is NZD $29.66 per hour (as of 2023) for most roles."
    },
    {
      question: "How long does it take to process New Zealand visas?",
      answer: "Processing times vary by visa type. Student visas typically take 4-8 weeks, Accredited Employer Work Visas 4-8 weeks after employer accreditation and job check, Working Holiday visas 2-4 weeks, and Skilled Migrant Category residence visas 18-24 months from EOI to decision. Processing times can fluctuate based on application volumes, complexity, and Immigration New Zealand's priorities."
    },
    {
      question: "What are the English language requirements for New Zealand visas?",
      answer: "Requirements vary by visa type. Skilled Migrant Category applicants must have an IELTS overall score of 6.5 or equivalent. Work visa applicants generally need to demonstrate English proficiency through previous education in English, work experience in an English-speaking environment, or a minimum IELTS score of 5.0. Student visa applicants need to meet the English requirements of their educational institution, typically IELTS 5.5-6.0 for undergraduate and 6.5 for postgraduate studies."
    },
    {
      question: "What is the pathway from temporary to permanent residence in New Zealand?",
      answer: "Several pathways exist: 1) Skilled Migrant Category - accumulate 160+ points and apply through the EOI system; 2) Work to Residence - work for an accredited employer in a role paying above the median wage for 24 months; 3) Residence from Work - for those who have held specific work visas for a required period; 4) Partner of a New Zealander - after living together in a genuine relationship for 12+ months. Each pathway has specific requirements regarding duration of stay, type of visa held, and other criteria."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="New Zealand Immigration Services" 
        subtitle="Your pathway to opportunities in the land of the long white cloud"
        backgroundImage="https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80"
        overlayColor="from-blue-900/80 to-green-900/80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in New Zealand</h2>
            <p className="text-gray-600 mb-6">
              New Zealand offers an exceptional quality of life, stunning natural beauty, and a stable economy with abundant opportunities. Our comprehensive New Zealand immigration services are designed to help you navigate the visa system with confidence.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll identify the most suitable visa pathways based on your profile and goals. We provide end-to-end support, from initial consultation and points assessment to application preparation and post-approval assistance.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of individuals and families achieve their New Zealand dreams. We understand the nuances of New Zealand's immigration system and stay updated on policy changes, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                  95%
                </div>
                <p className="text-gray-700">
                  Of our New Zealand visa applications are approved on the first attempt, compared to the national average of 68%.
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
              src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80" 
              alt="New Zealand landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 2,000 clients who have successfully relocated to New Zealand with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">New Zealand Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nzStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
          <h2 className="text-3xl font-bold text-center mb-6">New Zealand Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major New Zealand visa categories to suit your specific needs and goals.
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
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full">
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
        
        {/* Why Choose New Zealand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose New Zealand?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            New Zealand offers numerous advantages for immigrants seeking education, career opportunities, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality of Life",
                description: "Consistently ranked among the top countries for quality of life, work-life balance, and happiness.",
                image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
              },
              {
                title: "Stunning Nature",
                description: "Breathtaking landscapes, from pristine beaches to majestic mountains and lush forests.",
                image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&q=80"
              },
              {
                title: "Strong Economy",
                description: "Stable economy with low unemployment and opportunities across various sectors.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Quality Education",
                description: "World-class education system with all universities ranked in the top 3% globally.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare System",
                description: "Excellent public healthcare system accessible to residents and certain visa holders.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
              },
              {
                title: "Safe & Welcoming",
                description: "One of the world's safest countries with a friendly, multicultural society.",
                image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold text-center mb-6">Our New Zealand Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="New Zealand Immigration FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your New Zealand Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our New Zealand immigration experts today for a free consultation. We'll assess your profile and provide personalized guidance for your visa application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our New Zealand Immigration Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced New Zealand immigration consultants",
                  "End-to-end support from points assessment to visa approval",
                  "95% success rate for New Zealand visa applications",
                  "Up-to-date knowledge of New Zealand's immigration policies",
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

export default NewZealand;