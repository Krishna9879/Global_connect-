import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Home, Building, CheckCircle, Landmark } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const USA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "F-1 Visa", description: "For academic studies at accredited US colleges and universities" },
        { name: "M-1 Visa", description: "For vocational or non-academic studies" },
        { name: "J-1 Visa", description: "For exchange visitors in approved programs" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "H-1B Visa", description: "For specialty occupations requiring specialized knowledge" },
        { name: "L-1 Visa", description: "For intracompany transferees" },
        { name: "O-1 Visa", description: "For individuals with extraordinary ability" },
        { name: "E-2 Visa", description: "For investors from treaty countries" }
      ]
    },
    {
      icon: Home,
      title: "Family Visas",
      types: [
        { name: "IR/CR Visas", description: "For immediate relatives of US citizens" },
        { name: "F-Category Visas", description: "Family preference categories" },
        { name: "K-1 Visa", description: "For fiancé(e)s of US citizens" }
      ]
    },
    {
      icon: Building,
      title: "Permanent Residence",
      types: [
        { name: "EB-1 to EB-5", description: "Employment-based green cards" },
        { name: "Family-Sponsored", description: "Through US citizen or permanent resident relatives" },
        { name: "Diversity Visa", description: "Green card lottery for eligible countries" }
      ]
    }
  ];

  const usaStats = [
    { number: 4500, suffix: '+', text: 'Universities & Colleges' },
    { number: 1, suffix: 'M+', text: 'International Students' },
    { number: 85000, suffix: '', text: 'H-1B Visas Annually' },
    { number: 140000, suffix: '', text: 'Employment Green Cards' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, goals, and eligibility for various US visa options.",
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
      description: "We prepare and file your application with USCIS or the appropriate US consulate.",
      details: [
        "Application package preparation",
        "Fee payment guidance",
        "Submission and tracking",
        "Receipt confirmation"
      ]
    },
    {
      title: "Interview Preparation",
      description: "We thoroughly prepare you for your visa interview at the US consulate.",
      details: [
        "Mock interview sessions",
        "Common questions review",
        "Documentation organization",
        "Presentation guidance"
      ]
    },
    {
      title: "Post-Approval Support",
      description: "We provide guidance on next steps after visa approval.",
      details: [
        "Pre-departure preparation",
        "Port of entry guidance",
        "Status maintenance advice",
        "Extension/renewal planning"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the difference between a US visa and status?",
      answer: "A visa is an entry document issued by a US consulate abroad that allows you to travel to a US port of entry. Status refers to your legal category while in the US and the permissions it grants (e.g., to study or work). You can maintain status even after a visa expires, as long as you remain in the US legally."
    },
    {
      question: "How long does it take to get a US visa?",
      answer: "Processing times vary significantly by visa type and application location. Student visas (F/M) typically take 2-8 weeks, work visas like H-1B can take 3-6 months (or 15 days with premium processing), and family-based green cards can take 1-2 years for immediate relatives and 2-20+ years for family preference categories."
    },
    {
      question: "Can I work in the US on a student visa?",
      answer: "F-1 students can work on-campus up to 20 hours per week during the academic year and full-time during breaks. After the first academic year, F-1 students may qualify for Curricular Practical Training (CPT) or Optional Practical Training (OPT), allowing off-campus employment related to their field of study. STEM graduates can extend OPT for up to 36 months total."
    },
    {
      question: "What are the pathways to permanent residence in the US?",
      answer: "Common pathways include family sponsorship by US citizens or permanent residents, employment-based sponsorship by US employers, investment (EB-5 program), asylum/refugee status, and the Diversity Visa lottery. Each pathway has specific eligibility requirements and processing times."
    },
    {
      question: "How does the H-1B visa lottery work?",
      answer: "The H-1B visa has an annual cap of 85,000 visas (65,000 regular cap + 20,000 for US master's degree holders). When USCIS receives more petitions than available visas, they conduct a random selection process (lottery). Registrations are submitted in March, selections are announced in April, and selected petitions can be filed starting in April for an October 1 start date."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="USA Immigration Services" 
        subtitle="Your pathway to the land of opportunity"
        backgroundImage="https://images.unsplash.com/photo-1508433957232-3107f5fd5955?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in the United States</h2>
            <p className="text-gray-600 mb-6">
              The United States offers unparalleled opportunities for education, career advancement, business growth, and quality of life. Our comprehensive US immigration services are designed to help you navigate the complex visa and immigration system with confidence.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll identify the most suitable visa pathways based on your profile and goals. We provide end-to-end support, from initial consultation and strategy development to application preparation and interview coaching.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of individuals and families achieve their American dreams. We understand the nuances of US immigration law and stay updated on policy changes, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  93%
                </div>
                <p className="text-gray-700">
                  Of our US visa applications are approved on the first attempt, compared to the national average of 68%.
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
              src="https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&q=80" // Statue of Liberty image
              alt="Statue of Liberty" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 5,000 clients who have successfully relocated to the United States with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">USA Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usaStats.map((stat, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-6">US Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major US visa categories to suit your specific needs and goals.
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

            {/* Gold Card (EB-5 Visa) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg col-span-1 md:col-span-2"
            >
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80" // Gold-themed image for EB-5
                  alt="Gold Card (EB-5 Visa)"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full">
                        <Landmark className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">EB-5 Immigrant Investor Program (Gold Card)</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  The EB-5 Immigrant Investor Program, often referred to as the "Gold Card," provides a pathway to permanent residency in the United States for foreign investors. By investing in a new commercial enterprise that creates jobs for US workers, you and your family can obtain green cards.
                </p>
                <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {[
                    "Permanent residency for you, your spouse, and children under 21",
                    "No sponsorship or labor certification required",
                    "Freedom to live, work, or study anywhere in the US",
                    "Pathway to US citizenship after 5 years",
                    "Investment options starting at $800,000 (Targeted Employment Areas)"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Why Choose USA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose the United States?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The US offers numerous advantages for immigrants seeking education, career opportunities, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Education",
                description: "Home to many of the world's top universities and research institutions, offering unparalleled educational opportunities.",
                image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
              },
              {
                title: "Innovation & Technology",
                description: "Leading global innovation in technology, healthcare, finance, and entertainment, with abundant opportunities for skilled professionals.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              },
              {
                title: "Career Growth",
                description: "Competitive salaries, professional development opportunities, and a merit-based work culture that rewards talent and hard work.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              },
              {
                title: "Entrepreneurship",
                description: "A supportive ecosystem for startups and entrepreneurs, with access to venture capital and a large consumer market.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              },
              {
                title: "Cultural Diversity",
                description: "A melting pot of cultures, cuisines, and traditions, offering a welcoming environment for immigrants from all backgrounds.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" // Updated to a multicultural image
              },
              {
                title: "Quality of Life",
                description: "High standard of living, excellent healthcare, diverse housing options, and abundant recreational opportunities.",
                image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold text-center mb-6">Our US Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="US Immigration FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your American Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our US immigration experts today for a free consultation. We'll assess your profile and provide personalized guidance for your visa application.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our US Immigration Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced US immigration consultants",
                  "End-to-end support from strategy development to visa approval",
                  "93% success rate for US visa applications",
                  "Up-to-date knowledge of US immigration policies and procedures",
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

export default USA;