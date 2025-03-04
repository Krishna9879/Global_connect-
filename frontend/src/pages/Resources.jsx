import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, FileText, Star, HelpCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for routing

export const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const resources = [
    {
      title: "Visa Guide",
      icon: BookOpen,
      items: [
        {
          title: "Student Visa Guide",
          description: "Complete guide to student visa applications and requirements.",
          details: "A student visa allows you to study in a foreign country. Requirements typically include proof of admission, financial stability, and health insurance. Processing times vary by country.",
          link: "#student-visa-guide",
          externalLink: "https://www.internationalstudent.com/study_usa/visa/"
        },
        {
          title: "Work Visa Guide",
          description: "Understanding work permits and employment visas.",
          details: "A work visa permits you to work legally in a foreign country. Requirements often include a job offer, proof of qualifications, and sometimes a labor market test.",
          link: "#work-visa-guide",
          externalLink: "https://www.visahq.com/work-visa/"
        },
        {
          title: "PR Visa Guide",
          description: "Step-by-step guide to permanent residency applications.",
          details: "Permanent residency allows you to live and work indefinitely in a foreign country. Requirements may include proof of employment, language proficiency, and a clean criminal record.",
          link: "#pr-visa-guide",
          externalLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html"
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
          details: "Common documents include passports, photographs, proof of financial means, and educational certificates. Always check the specific requirements for your destination country.",
          link: "#required-documents",
          externalLink: "https://www.travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms.html"
        },
        {
          title: "Document Templates",
          description: "Sample templates for common immigration documents.",
          details: "Templates for cover letters, resumes, and financial affidavits can help streamline your application process. Ensure all documents are tailored to your specific situation.",
          link: "#document-templates",
          externalLink: "https://www.overleaf.com/gallery/tagged/cv"
        },
        {
          title: "Translation Services",
          description: "Guide to document translation requirements.",
          details: "Official translations are often required for non-English documents. Ensure translations are certified and meet the standards of the destination country.",
          link: "#translation-services",
          externalLink: "https://www.proz.com/translation-services"
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
          details: "Read inspiring stories of students who successfully navigated the visa process and are now pursuing their dreams abroad.",
          link: "#student-stories",
          externalLink: "https://www.educations.com/study-abroad/success-stories"
        },
        {
          title: "Work Visa Success",
          description: "Testimonials from successful work visa applicants.",
          details: "Learn from professionals who secured work visas and are thriving in their careers overseas.",
          link: "#work-visa-stories",
          externalLink: "https://www.expat.com/forum/viewforum.php?id=6"
        },
        {
          title: "PR Success Stories",
          description: "Stories of successful permanent residency journeys.",
          details: "Discover how individuals achieved permanent residency and built new lives in their chosen countries.",
          link: "#pr-stories",
          externalLink: "https://www.canadavisa.com/canada-immigration-discussion-board/threads/success-stories.46999/"
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
          details: "Find answers to frequently asked questions about visas, documentation, and application procedures.",
          link: "#general-faq",
          externalLink: "https://www.uscis.gov/faq-page"
        },
        {
          title: "Visa-Specific FAQ",
          description: "Detailed answers to visa-specific questions.",
          details: "Get clarity on specific visa types, including student, work, and permanent residency visas.",
          link: "#visa-faq",
          externalLink: "https://www.visahq.com/faq/"
        },
        {
          title: "Process FAQ",
          description: "Questions about application processing and timelines.",
          details: "Understand the steps involved in visa processing and how long each stage typically takes.",
          link: "#process-faq",
          externalLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
        }
      ]
    }
  ];

  const openModal = (resource, index) => {
    setSelectedResource(resource);
    setSelectedItemIndex(index);
  };

  const closeModal = () => {
    setSelectedResource(null);
    setSelectedItemIndex(0);
  };

  const navigate = (direction) => {
    if (direction === 'next') {
      setSelectedItemIndex((prevIndex) => (prevIndex + 1) % selectedResource.items.length);
    } else {
      setSelectedItemIndex((prevIndex) => (prevIndex - 1 + selectedResource.items.length) % selectedResource.items.length);
    }
  };

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
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(resource, 0)}
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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg w-full max-w-2xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <selectedResource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{selectedResource.title}</h2>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-2">{selectedResource.items[selectedItemIndex].title}</h3>
                  <p className="text-gray-600">{selectedResource.items[selectedItemIndex].details}</p>
                  <a
                    href={selectedResource.items[selectedItemIndex].externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Learn More
                  </a>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => navigate('prev')}
                    className="px-6 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => navigate('next')}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-shadow"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Contact Our Experts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};