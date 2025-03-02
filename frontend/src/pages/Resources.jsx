import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, FileText, Star, HelpCircle } from 'lucide-react';

export const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const resources = [
    {
      title: "Visa Guide",
      icon: BookOpen,
      items: [
        {
          title: "Student Visa Guide",
          description: "Complete guide to student visa applications and requirements.",
          link: "#student-visa-guide"
        },
        {
          title: "Work Visa Guide",
          description: "Understanding work permits and employment visas.",
          link: "#work-visa-guide"
        },
        {
          title: "PR Visa Guide",
          description: "Step-by-step guide to permanent residency applications.",
          link: "#pr-visa-guide"
        }
      ]
    },
    {
      title: "Documentation",
      icon: FileText,
      items: [
        {
          title: "Required Documents",
          description: "Comprehensive list of documents needed for various visas.",
          link: "#required-documents"
        },
        {
          title: "Document Templates",
          description: "Sample templates for common immigration documents.",
          link: "#document-templates"
        },
        {
          title: "Translation Services",
          description: "Guide to document translation requirements.",
          link: "#translation-services"
        }
      ]
    },
    {
      title: "Success Stories",
      icon: Star,
      items: [
        {
          title: "Student Success Stories",
          description: "Real stories from successful student visa applicants.",
          link: "#student-stories"
        },
        {
          title: "Work Visa Success",
          description: "Testimonials from successful work visa applicants.",
          link: "#work-visa-stories"
        },
        {
          title: "PR Success Stories",
          description: "Stories of successful permanent residency journeys.",
          link: "#pr-stories"
        }
      ]
    },
    {
      title: "FAQ",
      icon: HelpCircle,
      items: [
        {
          title: "General FAQ",
          description: "Common questions about immigration processes.",
          link: "#general-faq"
        },
        {
          title: "Visa-Specific FAQ",
          description: "Detailed answers to visa-specific questions.",
          link: "#visa-faq"
        },
        {
          title: "Process FAQ",
          description: "Questions about application processing and timelines.",
          link: "#process-faq"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Immigration Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive guides, documentation requirements, and success stories to help you navigate your immigration journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{resource.title}</h2>
                </div>

                <div className="space-y-6">
                  {resource.items.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};