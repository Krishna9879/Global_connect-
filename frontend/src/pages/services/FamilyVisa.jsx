import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Home, Landmark, Shield, CheckCircle } from 'lucide-react'; // Added missing imports
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import { TestimonialCard } from '../../components/TestimonialCard';

const FamilyVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: Heart,
      title: "Emotional Well-being",
      description: "Improve quality of life by maintaining close family connections and support systems."
    },
    {
      icon: Home,
      title: "Stable Environment",
      description: "Create a stable and supportive environment for your family's growth and development."
    },
    {
      icon: Landmark,
      title: "Access to Services",
      description: "Family members gain access to education, healthcare, and social services."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Provide legal status and protection for your family members in your country of residence."
    }
  ];

  const processSteps = [
    {
      title: "Eligibility Assessment",
      description: "We evaluate your family situation to determine eligibility for family visa options.",
      details: [
        "Relationship verification",
        "Sponsor eligibility assessment",
        "Dependent eligibility assessment",
        "Financial requirement analysis"
      ]
    },
    {
      title: "Visa Strategy Development",
      description: "We create a customized family visa strategy based on your specific situation.",
      details: [
        "Visa category identification",
        "Timeline planning",
        "Documentation strategy",
        "Contingency planning"
      ]
    },
    {
      title: "Documentation Preparation",
      description: "We help you prepare and organize all required documents for your family visa application.",
      details: [
        "Relationship evidence compilation",
        "Financial documentation preparation",
        "Accommodation evidence",
        "Character and medical requirements"
      ]
    },
    {
      title: "Application Submission",
      description: "We prepare and submit your family visa application with meticulous attention to detail.",
      details: [
        "Application form completion",
        "Supporting document organization",
        "Fee payment guidance",
        "Submission and receipt confirmation"
      ]
    },
    {
      title: "Post-Submission Support",
      description: "We provide ongoing support throughout the processing period until visa approval.",
      details: [
        "Application status tracking",
        "Additional document requests handling",
        "Interview preparation (if required)",
        "Arrival and settlement guidance"
      ]
    }
  ];

  const faqs = [
    {
      question: "Who can I sponsor for a family visa?",
      answer: "Eligible family members typically include spouses/partners, dependent children, parents (in some cases), and other dependent relatives. Eligibility criteria vary by country, with some having more restrictive definitions of family than others."
    },
    {
      question: "What are the financial requirements for sponsoring family members?",
      answer: "Most countries require sponsors to demonstrate sufficient income or savings to support family members without relying on public funds. Specific requirements vary by country, family size, and visa type, ranging from minimum income thresholds to savings requirements."
    },
    {
      question: "How long does the family visa process take?",
      answer: "Processing times vary significantly by country and visa category, ranging from a few months to several years. Spouse/partner visas typically take 3-12 months, child visas 3-12 months, and parent visas 12-36+ months depending on the country and quotas."
    },
    {
      question: "Can my family members work or study on a family visa?",
      answer: "Work and study rights vary by country and visa type. Spouses/partners typically receive full work rights in most countries. Dependent children usually have full study rights and may have work restrictions until they reach adulthood. Other dependents may have limited or no work rights."
    },
    {
      question: "What happens if my relationship status changes after visa approval?",
      answer: "Changes in relationship status (separation, divorce, death of sponsor) can affect visa status. Many countries have provisions for victims of domestic violence or relationship breakdown. Reporting requirements and implications vary by country and circumstances."
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "USA",
      rating: 5,
      text: "Global Connect helped me reunite with my husband in the US after a year apart. Their expertise with the spouse visa process made a complex journey much smoother.",
      service: "Family Visa",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Ahmed Hassan",
      location: "Canada",
      rating: 5,
      text: "I was struggling to bring my parents to Canada until I found Global Connect. Their knowledge of the Parent and Grandparent Program was invaluable in our successful application.",
      service: "Family Visa",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Australia",
      rating: 5,
      text: "The team at Global Connect provided exceptional guidance throughout our Partner Visa application. Their attention to detail in documenting our relationship was crucial to our approval.",
      service: "Family Visa",
      date: "April 2023",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Family Visa Services" 
        subtitle="Reuniting families across borders with expert immigration guidance"
        backgroundImage="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Bringing Families Together</h2>
            <p className="text-gray-600 mb-6">
              Family separation due to immigration can be emotionally challenging. Our comprehensive family visa services are designed to reunite families across borders, allowing you to build a life together in your new country.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll navigate the complex family visa application process with confidence. We provide end-to-end support, from eligibility assessment and strategy development to documentation preparation and application submission.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of families reunite in countries around the world. We understand the unique requirements of each country and family visa category, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  96%
                </div>
                <p className="text-gray-700">
                  Of our family visa applications are approved, compared to the industry average of 65%.
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
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80" 
              alt="Family reunion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 2,500 families who have successfully reunited with our help.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Family Reunification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Family Visa Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Family Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for various types of family visas to suit your specific situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Spouse/Partner Visas", 
                description: "For legally married spouses or de facto/common-law partners of citizens or permanent residents.",
                requirements: [
                  "Proof of genuine and continuing relationship",
                  "Financial requirements",
                  "Character and health requirements",
                  "Sponsor eligibility"
                ],
                processing: "3-12 months depending on country"
              },
              { 
                name: "Child Visas", 
                description: "For dependent children of citizens or permanent residents.",
                requirements: [
                  "Proof of parent-child relationship",
                  "Age requirements (typically under 18-25 depending on country)",
                  "Dependency evidence for adult children",
                  "Custody arrangements (if applicable)"
                ],
                processing: "3-12 months depending on country"
              },
              { 
                name: "Parent Visas", 
                description: "For parents of adult citizens or permanent residents.",
                requirements: [
                  "Proof of parent-child relationship",
                  "Balance of family test (in some countries)",
                  "Financial requirements/bonds",
                  "Health insurance requirements"
                ],
                processing: "12-36+ months depending on country and quotas"
              },
              { 
                name: "Fiancé(e) Visas", 
                description: "For those intending to marry citizens or permanent residents after arrival.",
                requirements: [
                  "Proof of intention to marry",
                  "Evidence of having met in person",
                  "Genuine relationship evidence",
                  "Marriage plans within visa validity period"
                ],
                processing: "6-9 months depending on country"
              },
              { 
                name: "Other Family Visas", 
                description: "For siblings, grandparents, and other family members (limited availability).",
                requirements: [
                  "Proof of family relationship",
                  "Dependency evidence (in most cases)",
                  "Financial support evidence",
                  "Sponsor eligibility"
                ],
                processing: "12-36+ months depending on country and category"
              },
              { 
                name: "Carer Visas", 
                description: "For those providing care to family members with medical conditions.",
                requirements: [
                  "Medical evidence of need for care",
                  "Proof of ability to provide care",
                  "Family relationship evidence",
                  "No alternative care arrangements available"
                ],
                processing: "6-12 months depending on country"
              }
            ].map((visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">{visa.name}</h3>
                  <p className="text-gray-600">{visa.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2 mb-4">
                    {visa.requirements.map((requirement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                        <span className="text-gray-700 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Processing Time:</span>
                    <span className="text-sm font-medium">{visa.processing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Family Visa Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial assessment to successful family reunification.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from our satisfied clients who have successfully reunited with their families.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Family Visa FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Reunite with Your Family?</h2>
            <p className="text-gray-600 mb-6">
              Contact our family visa experts today for a free consultation. We'll assess your situation and provide personalized guidance for your family reunification journey.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our Family Visa Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced family immigration consultants",
                  "End-to-end support from assessment to visa approval",
                  "96% success rate for family visa applications",
                  "Expertise in complex family situations",
                  "Compassionate approach to family reunification"
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

export default FamilyVisa;