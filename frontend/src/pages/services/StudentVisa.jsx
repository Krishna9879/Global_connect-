import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Globe, Award, Clock, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import { TestimonialCard } from '../../components/TestimonialCard';

const StudentVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: BookOpen,
      title: "World-Class Education",
      description: "Access to top-ranked universities and educational institutions globally."
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Immerse yourself in diverse cultures and expand your international network."
    },
    {
      icon: Award,
      title: "Career Advancement",
      description: "Enhance your resume with internationally recognized qualifications."
    },
    {
      icon: Clock,
      title: "Post-Study Work Options",
      description: "Many countries offer work permits after graduation to gain valuable experience."
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, discuss your academic goals, and identify suitable countries and institutions.",
      details: [
        "Academic background evaluation",
        "Career goal assessment",
        "Budget planning",
        "Country selection guidance"
      ]
    },
    {
      title: "University Selection & Application",
      description: "We help you select the right universities and prepare compelling applications.",
      details: [
        "Shortlisting universities based on your profile",
        "Application document preparation",
        "Personal statement and essay guidance",
        "Application submission and follow-up"
      ]
    },
    {
      title: "Offer Acceptance & Visa Preparation",
      description: "Once you receive offers, we help you decide and prepare for the visa application.",
      details: [
        "Offer evaluation and acceptance",
        "Visa requirement analysis",
        "Financial documentation preparation",
        "Pre-visa submission checklist"
      ]
    },
    {
      title: "Visa Application & Interview",
      description: "We guide you through the visa application process and prepare you for the interview.",
      details: [
        "Visa application form completion",
        "Supporting document compilation",
        "Mock interview sessions",
        "Application submission guidance"
      ]
    },
    {
      title: "Pre-Departure Assistance",
      description: "We ensure you're fully prepared for your journey and life abroad.",
      details: [
        "Accommodation arrangements",
        "Travel planning",
        "Cultural orientation",
        "Essential checklist preparation"
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the basic requirements for a student visa?",
      answer: "Basic requirements typically include an acceptance letter from a recognized educational institution, proof of financial capability to cover tuition and living expenses, health insurance, and language proficiency test results. Specific requirements vary by country."
    },
    {
      question: "How long does the student visa process take?",
      answer: "Processing times vary by country, ranging from 2-12 weeks. We recommend starting the process at least 3-6 months before your intended start date to allow for any delays."
    },
    {
      question: "Can I work while studying on a student visa?",
      answer: "Many countries allow international students to work part-time during their studies and full-time during breaks. Work rights vary by country, with typical allowances ranging from 10-20 hours per week during term time."
    },
    {
      question: "What is the success rate for student visa applications?",
      answer: "With proper guidance and preparation, student visa applications have a high success rate. Our clients enjoy a 95%+ approval rate due to our thorough preparation and documentation process."
    },
    {
      question: "Can my family accompany me on a student visa?",
      answer: "Many countries allow spouses and dependent children to accompany international students. Requirements and work rights for dependents vary by country and may require additional documentation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "USA",
      rating: 5,
      text: "Global Connect made my dream of studying at Harvard a reality. Their step-by-step guidance through the complex visa process was invaluable!",
      service: "Student Visa",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Raj Patel",
      location: "Canada",
      rating: 5,
      text: "I was overwhelmed by the student visa process until I found Global Connect. Their expertise and personalized approach helped me secure admission to University of Toronto.",
      service: "Student Visa",
      date: "January 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Liu Wei",
      location: "Australia",
      rating: 5,
      text: "The team at Global Connect provided exceptional service from university selection to visa approval. I'm now studying at University of Melbourne thanks to their support!",
      service: "Student Visa",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Student Visa Services" 
        subtitle="Your pathway to world-class education and global opportunities"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Global Education Opportunities</h2>
            <p className="text-gray-600 mb-6">
              Studying abroad is a life-changing experience that opens doors to world-class education, cultural immersion, and global career opportunities. Our comprehensive student visa services are designed to make your international education journey smooth and successful.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll navigate the complex visa application process with confidence. We provide end-to-end support, from university selection and application to visa preparation and pre-departure assistance.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of students achieve their dreams of studying at prestigious institutions worldwide. We understand the unique requirements of each country and institution, ensuring your application stands out.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  95%
                </div>
                <p className="text-gray-700">
                  Of our student visa applications are approved on the first attempt, compared to the industry average of 70%.
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
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
              alt="Students studying abroad" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 7,000 students who have successfully started their international education journey with us.
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
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Studying Abroad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        {/* Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Popular Study Destinations</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide student visa services for these top study destinations and many more. Each country offers unique educational opportunities and cultural experiences.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "USA", flag: "https://images.unsplash.com/photo-1508433957232-3107f5fd5955?auto=format&fit=crop&q=80" },
              { name: "Canada", flag: "https://images.unsplash.com/photo-1535041422672-8c3254ab9de9?auto=format&fit=crop&q=80" },
              { name: "UK", flag: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" },
              { name: "Australia", flag: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" },
              { name: "New Zealand", flag: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80" },
              { name: "Germany", flag: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80" }
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{country.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Student Visa Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from our satisfied clients who are now pursuing their dreams at top institutions worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Student Visa FAQs" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Education Journey?</h2>
            <p className="text-gray-600 mb-6">
              Contact our student visa experts today for a free consultation. We'll assess your profile and provide personalized guidance for your international education journey.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Our Student Visa Services?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized guidance from experienced consultants",
                  "End-to-end support from university selection to visa approval",
                  "95% success rate for student visa applications",
                  "Extensive network of partner institutions worldwide",
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

export default StudentVisa;