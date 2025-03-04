import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "../../components/PageHeader";
import { ProcessSteps } from "../../components/ProcessSteps";
import { FAQSection } from "../../components/FAQSection";
import { TestimonialCard } from "../../components/TestimonialCard";
import { CheckCircle, Globe, Home, TrendingUp, Users } from "lucide-react";

const PRVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prBenefits = [
    {
      icon: Globe,
      title: "Global Mobility",
      description: "Enjoy the freedom to live, work, and travel across your chosen country.",
    },
    {
      icon: Home,
      title: "Permanent Residency",
      description: "Secure long-term residency with the option to apply for citizenship.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access better job opportunities and career stability.",
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Bring your family with you and provide them with a secure future.",
    },
  ];

  const prSteps = [
    {
      title: "Eligibility Assessment",
      description: "We evaluate your profile to determine your PR eligibility.",
      details: [
        "Points test evaluation",
        "Skills assessment",
        "Financial capacity check",
        "Language proficiency review",
      ],
    },
    {
      title: "Document Preparation",
      description: "We help you gather and organize all required documents.",
      details: [
        "Identity and relationship proofs",
        "Educational and work experience documents",
        "Financial statements",
        "Health and character certificates",
      ],
    },
    {
      title: "Application Submission",
      description: "We prepare and submit your PR application with precision.",
      details: [
        "Form completion",
        "Document compilation",
        "Fee payment guidance",
        "Submission confirmation",
      ],
    },
    {
      title: "Post-Submission Support",
      description: "We provide ongoing support until your PR is approved.",
      details: [
        "Application tracking",
        "Additional document requests",
        "Interview preparation",
        "Approval and next steps",
      ],
    },
  ];

  const prFAQs = [
    {
      question: "How long does the PR process take?",
      answer: "Processing times vary by country and visa type, typically ranging from 6 to 18 months.",
    },
    {
      question: "What are the main pathways to PR?",
      answer: "Common pathways include skilled migration, family sponsorship, and business investment.",
    },
    {
      question: "Can I include my family in my PR application?",
      answer: "Yes, most PR programs allow you to include your spouse and dependent children.",
    },
    {
      question: "What are the financial requirements for PR?",
      answer: "Financial requirements vary by country and program, often including proof of funds to support yourself and your family.",
    },
    {
      question: "Can I apply for citizenship after PR?",
      answer: "Yes, most countries allow PR holders to apply for citizenship after meeting residency requirements.",
    },
  ];

  const prTestimonials = [
    {
      name: "John Doe",
      location: "Canada",
      rating: 5,
      text: "The team made my PR journey seamless and stress-free. Highly recommend their services!",
      service: "Skilled Migration",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      name: "Jane Smith",
      location: "Australia",
      rating: 5,
      text: "Their expertise helped me secure PR in Australia within 12 months. Thank you!",
      service: "Family Sponsorship",
      date: "January 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Raj Patel",
      location: "New Zealand",
      rating: 5,
      text: "From assessment to approval, the process was smooth and professional.",
      service: "Business Investment",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
  ];

  const residencyCountries = [
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
      programs: ["Express Entry", "Provincial Nominee Program", "Family Sponsorship"],
      timeframe: "6-12 months",
      points: "Comprehensive Ranking System (CRS)",
    },
    {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
      programs: ["Skilled Independent Visa", "Employer Nomination Scheme", "Business Innovation"],
      timeframe: "8-18 months",
      points: "Points-based system",
    },
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80",
      programs: ["Skilled Migrant Category", "Work to Residence", "Investor Visa"],
      timeframe: "6-12 months",
      points: "Points-based system",
    },
    {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
      programs: ["Skilled Worker Visa", "Innovator Visa", "Family Visa"],
      timeframe: "5 years + processing",
      points: "Residency-based system",
    },
    {
      name: "USA",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80",
      programs: ["EB-1, EB-2, EB-3 Visas", "Family Sponsorship", "Investor Visa"],
      timeframe: "12-24 months",
      points: "Employment-based system",
    },
    {
      name: "Germany",
      image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80",
      programs: ["Blue Card", "Family Reunification", "Self-Employment Visa"],
      timeframe: "6-12 months",
      points: "Employment-based system",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Permanent Residency Visas"
        subtitle="Your pathway to long-term residency and global opportunities"
        backgroundImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80"
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
            <h2 className="text-3xl font-bold mb-6">Secure Your Future with PR</h2>
            <p className="text-gray-600 mb-6">
              Permanent Residency (PR) offers stability, security, and opportunities for you and your family. Our expert services guide you through every step of the PR process, ensuring a smooth and successful journey.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're seeking skilled migration, family sponsorship, or business investment pathways, we provide tailored solutions to meet your goals.
            </p>
            <p className="text-gray-600">
              With a proven track record, we've helped thousands achieve their dream of permanent residency in countries worldwide.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  94%
                </div>
                <p className="text-gray-700">
                  Of our PR applications are approved, compared to the industry average of 60%.
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
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80"
              alt="Global opportunities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 3,000 clients who have successfully secured PR with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Permanent Residency?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prBenefits.map((benefit, index) => (
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

        {/* Residency Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Top PR Programs Worldwide</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explore leading PR programs tailored to your needs and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residencyCountries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={`${country.name} scenery`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{country.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Residency Routes:</h4>
                    <ul className="space-y-1">
                      {country.programs.map((route, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Timeline:</span>
                      <span className="text-sm font-medium">{country.timeframe}</span>
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="text-gray-500">System: </span>
                      {country.points}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our PR Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            A structured approach to achieving your permanent residency goals.
          </p>
          <ProcessSteps steps={prSteps} />
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Client Success Stories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from individuals who successfully secured PR with our guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={prFAQs} title="PR Visa FAQs" />

        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your PR Journey Today</h2>
            <p className="text-gray-600 mb-6">
              Contact our PR experts for a free consultation and personalized guidance.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-2">
                {[
                  "Personalized PR guidance",
                  "End-to-end process support",
                  "94% success rate",
                  "Tailored application strategies",
                  "Ongoing updates and support",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
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

export default PRVisa;