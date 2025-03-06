import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Global Connect offer?",
      answer:
        "Global Connect offers a wide range of services including study abroad programs, student visa assistance, university admissions guidance, scholarship applications, and pre-departure support. We provide end-to-end solutions to help students achieve their international education goals.",
    },
    {
      question: "How can I apply for a student visa?",
      answer:
        "Our team assists with the entire student visa application process, including document preparation, application submission, and interview preparation. We stay updated with the latest visa regulations to ensure a smooth and successful application process.",
    },
    {
      question: "Do you help with university admissions?",
      answer:
        "Yes, we provide strategic guidance for university applications worldwide. From selecting the right program to crafting a compelling application, we help you stand out in the competitive admissions process. We also assist with personal statements, recommendation letters, and interview preparation.",
    },
    {
      question: "What countries do you support for study abroad programs?",
      answer:
        "We support study abroad programs in various countries, including the USA, UK, Canada, Australia, Germany, France, and many others. Our experts help you choose the best destination based on your academic and career goals.",
    },
    {
      question: "Can you help with scholarship applications?",
      answer:
        "Absolutely! We provide assistance with scholarship applications, including identifying suitable scholarships, preparing application materials, and meeting deadlines. Our team ensures you have the best chance of securing financial aid for your studies.",
    },
    {
      question: "What is the cost of your services?",
      answer:
        "Our service fees vary depending on the type of assistance required. We offer personalized packages to suit your needs. Contact us for a detailed consultation and pricing information. We also provide free initial consultations to discuss your requirements.",
    },
    {
      question: "How do I get started with Global Connect?",
      answer:
        "Getting started is easy! Simply reach out to us via our contact form, email, or phone to schedule a consultation. Our team will guide you through the process and help you take the first step toward your international education journey.",
    },
    {
      question: "What if my visa application gets rejected?",
      answer:
        "In the rare case of a visa rejection, we provide comprehensive support to address the reasons for rejection and assist with reapplying. Our team ensures that all issues are resolved, and your application is strengthened for the next submission.",
    },
    {
      question: "Do you provide accommodation assistance for students?",
      answer:
        "Yes, we offer accommodation assistance to help you find safe and affordable housing options in your study destination. We provide guidance on university dormitories, private rentals, and homestays.",
    },
    {
      question: "Can I work while studying abroad?",
      answer:
        "Yes, many countries allow international students to work part-time while studying. We provide information on work regulations, job opportunities, and how to balance work and studies effectively.",
    },
    {
      question: "What support do you offer after I arrive in my study destination?",
      answer:
        "We offer post-arrival support to help you settle into your new environment. This includes airport pickup, orientation programs, local SIM card assistance, and ongoing guidance throughout your stay.",
    },
    {
      question: "How do I choose the right course and university?",
      answer:
        "Our experts provide personalized counseling to help you choose the right course and university based on your academic background, career goals, and preferences. We also provide insights into university rankings, program suitability, and future prospects.",
    },
    {
      question: "What are the language requirements for studying abroad?",
      answer:
        "Language requirements vary by country and university. Most institutions require proof of English proficiency through tests like IELTS, TOEFL, or PTE. We guide you through the preparation process and help you meet the required scores.",
    },
    {
      question: "Do you offer pre-departure orientation sessions?",
      answer:
        "Yes, we conduct pre-departure orientation sessions to prepare you for your journey. These sessions cover topics like cultural adaptation, packing tips, travel arrangements, and what to expect in your new country.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left">
                  {faq.question}
                </h3>
                <span className="text-gray-600">
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;