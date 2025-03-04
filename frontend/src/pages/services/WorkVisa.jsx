import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, TrendingUp, DollarSign, Globe, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import { TestimonialCard } from '../../components/TestimonialCard';

const WorkVisa = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaAdvantages = [
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Enhance your career with international exposure."
    },
    {
      icon: DollarSign,
      title: "Better Salary",
      description: "Earn more with global opportunities."
    },
    {
      icon: Globe,
      title: "Worldwide Connections",
      description: "Build a global professional network."
    },
    {
      icon: Briefcase,
      title: "Residency Path",
      description: "Potential route to permanent residency."
    }
  ];

  const applicationSteps = [
    {
      title: "Profile Assessment",
      description: "We review your skills and experience for visa eligibility.",
      details: [
        "Qualification check",
        "Work history review",
        "Skills evaluation",
        "Language assessment"
      ]
    },
    {
      title: "Strategy Planning",
      description: "We craft a personalized visa application plan.",
      details: [
        "Country matching",
        "Visa type selection",
        "Timeline setup",
        "Document prep"
      ]
    },
    {
      title: "Employment Support",
      description: "We help secure jobs and sponsorships.",
      details: [
        "Resume optimization",
        "Market research",
        "Interview prep",
        "Sponsorship guidance"
      ]
    },
    {
      title: "Document Compilation",
      description: "We prepare all necessary paperwork.",
      details: [
        "Form filling",
        "Document gathering",
        "Verification",
        "Submission prep"
      ]
    },
    {
      title: "Application Handling",
      description: "We manage submission and follow-ups.",
      details: [
        "Filing process",
        "Tracking updates",
        "Response management",
        "Interview support"
      ]
    }
  ];

  const commonQuestions = [
    {
      question: "What visa types are available?",
      answer: "Options include skilled, sponsored, transfer, temporary, and investment visas."
    },
    {
      question: "Need a job offer first?",
      answer: "Usually yes, but some programs allow skilled applicants without offers."
    },
    {
      question: "Processing duration?",
      answer: "Varies from weeks to months based on visa and country."
    },
    {
      question: "Family inclusion?",
      answer: "Most visas allow dependents with various rights."
    },
    {
      question: "Job loss impact?",
      answer: "Depends on country; may get grace period or need new status."
    }
  ];

  const successStories = [
    {
      name: "Michael Chen",
      location: "Canada",
      rating: 5,
      text: "Got my Canadian visa and residency in 6 months with amazing support!",
      service: "Work Visa",
      date: "April 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Australia",
      rating: 5,
      text: "Transformed my application struggles into success with expert help.",
      service: "Work Visa",
      date: "February 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "James Wilson",
      location: "UK",
      rating: 5,
      text: "Smooth visa process thanks to detailed guidance.",
      service: "Work Visa",
      date: "March 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Work Visa Assistance"
        subtitle="Your gateway to global employment"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Launch Your Global Career</h2>
            <p className="text-gray-600 mb-6">
              International work offers exceptional growth opportunities. Our services simplify the visa process.
            </p>
            <p className="text-gray-600 mb-6">
              We provide complete support from assessment to job placement.
            </p>
            <p className="text-gray-600">
              Our experienced team has helped thousands work abroad successfully.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Track Record</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  92%
                </div>
                <p className="text-gray-700">
                  First-attempt success rate, above the 65% average.
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Global professionals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="p-6 text-white text-lg font-medium">
                Over 5,000 professionals thriving globally with our help.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Global Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaAdvantages.map((advantage, idx) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Leading Work Destinations</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Top countries offering diverse career prospects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Canada",
                image: "https://images.unsplash.com/photo-1535041422672-8c3254ab9de9?auto=format&fit=crop&q=80",
                programs: ["Express Entry", "Provincial Program", "Talent Stream"],
                timeframe: "6-12 months"
              },
              {
                name: "Australia",
                image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
                programs: ["Skilled Visa", "Employer Sponsor", "Talent Visa"],
                timeframe: "8-14 months"
              },
              {
                name: "United Kingdom",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
                programs: ["Skilled Worker", "Talent Visa", "Company Transfer"],
                timeframe: "3-6 months"
              }
            ].map((destination, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name} scenery`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{destination.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Programs:</h4>
                    <ul className="space-y-1">
                      {destination.programs.map((program, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="text-sm font-medium">{destination.timeframe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Visa Application Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Step-by-step guidance to your visa approval.
          </p>
          <ProcessSteps steps={applicationSteps} />
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Client Testimonials</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Success stories from our global clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <TestimonialCard key={idx} testimonial={story} index={idx} />
            ))}
          </div>
        </div>

        <FAQSection faqs={commonQuestions} title="Visa FAQ" />

        {/* Centered Contact Section */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your International Career</h2>
            <p className="text-gray-600 mb-6">
              Contact us for a free consultation today.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-2">
                {[
                  "Tailored expert support",
                  "Complete process management",
                  "92% approval rate",
                  "Employment assistance",
                  "Regular updates"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
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

export default WorkVisa;