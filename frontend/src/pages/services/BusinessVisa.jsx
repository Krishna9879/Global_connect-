import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, Globe, DollarSign, Users, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import { TestimonialCard } from '../../components/TestimonialCard';

const BusinessVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaBenefits = [
    {
      icon: Building2,
      title: "Global Expansion",
      description: "Grow your business in thriving international markets."
    },
    {
      icon: TrendingUp,
      title: "Profit Potential",
      description: "Tap into high-return investment opportunities."
    },
    {
      icon: Globe,
      title: "Borderless Travel",
      description: "Enjoy flexibility for international business operations."
    },
    {
      icon: DollarSign,
      title: "Tax Advantages",
      description: "Benefit from favorable tax regimes abroad."
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Bring your family with access to top-tier services."
    }
  ];

  const visaSteps = [
    {
      title: "Business Evaluation",
      description: "We assess your business profile and investment goals.",
      details: [
        "Experience review",
        "Financial capacity check",
        "Objective analysis",
        "Risk evaluation"
      ]
    },
    {
      title: "Visa Planning",
      description: "We tailor a visa strategy to your business needs.",
      details: [
        "Country selection",
        "Program matching",
        "Investment outline",
        "Timeline setup"
      ]
    },
    {
      title: "Plan Creation",
      description: "We craft a business plan meeting visa standards.",
      details: [
        "Market research",
        "Financial forecasts",
        "Employment strategy",
        "Execution roadmap"
      ]
    },
    {
      title: "Document Prep",
      description: "We compile all necessary application materials.",
      details: [
        "Business records",
        "Financial proofs",
        "Legal validation",
        "Form completion"
      ]
    },
    {
      title: "Processing Support",
      description: "We handle submission and ongoing follow-ups.",
      details: [
        "Application filing",
        "Progress monitoring",
        "Response management",
        "Interview prep"
      ]
    }
  ];

  const visaFAQs = [
    {
      question: "What business visa options exist?",
      answer: "Types include startup, investor, entrepreneur, and transfer visas, each with unique criteria."
    },
    {
      question: "What's the typical investment amount?",
      answer: "Ranges from $50,000 to millions, depending on the program and country."
    },
    {
      question: "Must I run the business myself?",
      answer: "Varies—some require active management, others allow passive investment."
    },
    {
      question: "Can I get permanent residency?",
      answer: "Yes, many programs lead to PR after 2-5 years if conditions are met."
    },
    {
      question: "What if my business struggles?",
      answer: "Outcomes differ by visa; we offer risk planning support."
    }
  ];

  const clientStories = [
    {
      name: "Zhang Wei",
      location: "Canada",
      rating: 5,
      text: "Their expertise got my Canadian startup visa approved in 8 months!",
      service: "Business Visa",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Sophia Martinez",
      location: "Portugal",
      rating: 5,
      text: "Golden Visa success thanks to their investment guidance.",
      service: "Investor Visa",
      date: "January 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Rajiv Mehta",
      location: "UK",
      rating: 5,
      text: "UK Innovator visa secured with their brilliant support.",
      service: "Entrepreneur Visa",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Business & Investment Visas" 
        subtitle="Unlock global opportunities for your business ventures"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Take Your Business Worldwide</h2>
            <p className="text-gray-600 mb-6">
              Business visas open doors for entrepreneurs and investors to thrive internationally. Our services guide you through every step.
            </p>
            <p className="text-gray-600 mb-6">
              We match you with the best visa options and provide full support, from planning to submission.
            </p>
            <p className="text-gray-600">
              Our skilled advisors have aided hundreds in launching successful ventures abroad.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Proven Success</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  91%
                </div>
                <p className="text-gray-700">
                  Approval rate, surpassing the 55% industry norm.
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
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
              alt="Global business scene" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="p-6 text-white text-lg font-medium">
                Over 500 business owners have expanded globally with us.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Business Visas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {visaBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
        
        {/* Visa Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Top Business Visa Programs</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explore leading visa options for business and investment worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Canada Start-up Visa", 
                investment: "$75,000 - $200,000 CAD",
                timeframe: "12-16 months",
                features: [
                  "Immediate PR status",
                  "No net worth minimum",
                  "Endorsement needed",
                  "Family included"
                ]
              },
              { 
                name: "Portugal Golden Visa", 
                investment: "€250,000 - €500,000",
                timeframe: "8-12 months",
                features: [
                  "Low stay requirement",
                  "Citizenship in 5 years",
                  "Varied investments",
                  "EU access"
                ]
              },
              { 
                name: "UK Innovator Founder", 
                investment: "£50,000+",
                timeframe: "3-6 months",
                features: [
                  "Innovation focus",
                  "Endorsement required",
                  "PR after 3 years",
                  "Family eligible"
                ]
              },
              { 
                name: "USA E-2 Investor", 
                investment: "$100,000 - $200,000+",
                timeframe: "2-4 months",
                features: [
                  "Substantial investment",
                  "Active management",
                  "Renewable",
                  "Family included"
                ]
              },
              { 
                name: "Australia Business Visa", 
                investment: "AUD 1.5 million+",
                timeframe: "18-24 months",
                features: [
                  "Experience needed",
                  "Points system",
                  "PR pathway",
                  "State options"
                ]
              },
              { 
                name: "NZ Investor Visa", 
                investment: "NZD 3-10 million",
                timeframe: "12-18 months",
                features: [
                  "Two-tier investment",
                  "Low experience need",
                  "Flexible stay",
                  "PR option"
                ]
              }
            ].map((visa, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-1">{visa.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Investment:</span>
                    <span className="text-sm font-medium">{visa.investment}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-500">Timeline:</span>
                    <span className="text-sm font-medium">{visa.timeframe}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {visa.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Visa Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            A clear path to your business visa approval.
          </p>
          <ProcessSteps steps={visaSteps} />
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Client Successes</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Stories from business owners who went global with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((story, idx) => (
              <TestimonialCard key={idx} testimonial={story} index={idx} />
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={visaFAQs} title="Business Visa Questions" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Grow Globally Today</h2>
            <p className="text-gray-600 mb-6">
              Consult our visa experts for a free assessment of your business goals.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Work With Us?</h3>
              <ul className="space-y-2">
                {[
                  "Expert business visa advice",
                  "Full business plan assistance",
                  "91% approval rate",
                  "Customized strategies",
                  "Continuous support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
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

export default BusinessVisa;