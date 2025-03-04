import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane, Camera, Globe, Map, Calendar, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import { TestimonialCard } from '../../components/TestimonialCard';
import { PhotoGallery } from '../../components/PhotoGallery';

const TouristVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const travelAdvantages = [
    {
      icon: Camera,
      title: "Discover New Places",
      description: "Visit stunning landscapes and historic landmarks."
    },
    {
      icon: Globe,
      title: "Cultural Experience",
      description: "Immerse yourself in diverse traditions and cuisines."
    },
    {
      icon: Map,
      title: "Travel Freedom",
      description: "Explore multiple destinations with ease."
    },
    {
      icon: Calendar,
      title: "Longer Adventures",
      description: "Stay longer with the right visa support."
    }
  ];

  const visaProcess = [
    {
      title: "Trip Planning",
      description: "We review your travel goals and visa needs.",
      details: [
        "Destination review",
        "Trip length planning",
        "Visa type assessment",
        "Past travel check"
      ]
    },
    {
      title: "Document Prep",
      description: "We provide a detailed list of required paperwork.",
      details: [
        "Document list creation",
        "Financial proof advice",
        "Itinerary assistance",
        "Booking support"
      ]
    },
    {
      title: "Application Setup",
      description: "We assist with forms and document review.",
      details: [
        "Form filling",
        "Document compilation",
        "Letter drafting",
        "Final check"
      ]
    },
    {
      title: "Submission Help",
      description: "We guide you through the submission steps.",
      details: [
        "Appointment booking",
        "Submission support",
        "Payment guidance",
        "Biometrics prep"
      ]
    },
    {
      title: "Pre-Travel Tips",
      description: "We ensure you're ready for departure.",
      details: [
        "Insurance advice",
        "Travel checklist",
        "Entry rules briefing",
        "Emergency contacts"
      ]
    }
  ];

  const travelFAQs = [
    {
      question: "When should I apply for a tourist visa?",
      answer: "Apply 2-3 months ahead to account for processing times, which can range from days to weeks."
    },
    {
      question: "What paperwork do I need?",
      answer: "Typically a passport, forms, photos, bookings, funds proof, and sometimes an invitation."
    },
    {
      question: "Can one visa cover multiple countries?",
      answer: "Yes, like Schengen for Europe or regional visas; otherwise, separate visas are needed."
    },
    {
      question: "What if my visa is denied?",
      answer: "We’ll help fix issues and reapply or appeal, minimizing rejection risks."
    },
    {
      question: "Can I extend my visa while abroad?",
      answer: "Some countries allow it with extra steps; planning ahead is usually best."
    }
  ];

  const clientReviews = [
    {
      name: "Emma Thompson",
      location: "UK",
      rating: 5,
      text: "They handled our Schengen visas perfectly for a stress-free Europe trip!",
      service: "Tourist Visa",
      date: "April 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Hiroshi Tanaka",
      location: "Japan",
      rating: 5,
      text: "Multiple visas for my world tour were a breeze with their help.",
      service: "Tourist Visa",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Aisha Patel",
      location: "India",
      rating: 5,
      text: "Turned my UK visa rejections into success on the third try!",
      service: "Tourist Visa",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const travelPhotos = [
    {
      src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80",
      alt: "Paris",
      caption: "Paris - Eiffel Tower"
    },
    {
      src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80",
      alt: "Venice",
      caption: "Venice - Grand Canal"
    },
    {
      src: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&q=80",
      alt: "Bali",
      caption: "Bali - Rice Fields"
    },
    {
      src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80",
      alt: "Santorini",
      caption: "Santorini - Blue Domes"
    },
    {
      src: "https://images.unsplash.com/photo-1555832560-1e6e3a01a0ca?auto=format&fit=crop&q=80",
      alt: "Tokyo",
      caption: "Tokyo - Shibuya"
    },
    {
      src: "https://images.unsplash.com/photo-1562832135-14a35d25edef?auto=format&fit=crop&q=80",
      alt: "Hallstatt",
      caption: "Hallstatt - Village"
    },
    {
      src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
      alt: "Sydney",
      caption: "Sydney - Opera House"
    },
    {
      src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=80",
      alt: "Machu Picchu",
      caption: "Machu Picchu - Ruins"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Tourist Visa Assistance" 
        subtitle="Plan your dream vacation with ease"
        backgroundImage="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Travel Without Hassle</h2>
            <p className="text-gray-600 mb-6">
              Your global adventures shouldn’t be bogged down by visa woes. We make the process simple and seamless.
            </p>
            <p className="text-gray-600 mb-6">
              Our team handles everything from visa requirements to submission, so you can plan your trip worry-free.
            </p>
            <p className="text-gray-600">
              With thousands of successful applications, we’re experts in securing tourist visas worldwide.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Track Record</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  98%
                </div>
                <p className="text-gray-700">
                  First-time approval rate, beating the 75% average.
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
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
              alt="Travel scenery" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="p-6 text-white text-lg font-medium">
                Over 10,000 travelers have explored with our visa help.
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Visa Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Top Travel Spots</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We assist with visas for these stunning destinations and beyond.
          </p>
          <PhotoGallery images={travelPhotos} />
        </motion.div>
        
        {/* Visa Options Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Tourist Visa Options</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We manage a range of tourist visas for your travel plans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Schengen Visa", 
                description: "Explore 26 European countries with one visa.",
                validity: "Up to 90 days in 180 days",
                processing: "15-30 days",
                countries: "France, Germany, Italy, Spain + 22 others"
              },
              { 
                name: "US B-2 Visa", 
                description: "Visit the US for leisure or family.",
                validity: "Up to 10 years, 6-month stays",
                processing: "2-6 weeks",
                countries: "USA"
              },
              { 
                name: "UK Visitor Visa", 
                description: "Travel to the UK for tourism or visits.",
                validity: "6 months to 10 years",
                processing: "3-4 weeks",
                countries: "UK"
              },
              { 
                name: "Australia Visa", 
                description: "Tour Australia or visit loved ones.",
                validity: "3-12 months",
                processing: "2-4 weeks",
                countries: "Australia"
              },
              { 
                name: "Canada Visa", 
                description: "See Canada’s sights or friends.",
                validity: "Up to 10 years, 6-month stays",
                processing: "2-4 weeks",
                countries: "Canada"
              },
              { 
                name: "Dubai Visa", 
                description: "Enjoy Dubai’s attractions.",
                validity: "30 or 90 days",
                processing: "3-5 days",
                countries: "UAE"
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
                  <h3 className="text-xl font-semibold mb-3">{visa.name}</h3>
                  <p className="text-gray-600 mb-4">{visa.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Duration:</span>
                      <p className="text-gray-700">{visa.validity}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Processing:</span>
                      <p className="text-gray-700">{visa.processing}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Coverage:</span>
                      <p className="text-gray-700">{visa.countries}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our Visa Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            A clear path from planning to visa approval.
          </p>
          <ProcessSteps steps={visaProcess} />
        </div>
        
        {/* Reviews Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Traveler Stories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Feedback from clients who traveled with our visa support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((review, idx) => (
              <TestimonialCard key={idx} testimonial={review} index={idx} />
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={travelFAQs} title="Travel Visa Queries" />
        
        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Adventure</h2>
            <p className="text-gray-600 mb-6">
              Reach out for a free consultation on your travel visa needs.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-2">
                {[
                  "Expert travel visa advice",
                  "Full process support",
                  "98% approval success",
                  "Efficient application handling",
                  "Pre-travel guidance"
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

export default TouristVisa;