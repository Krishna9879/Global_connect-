import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Home, Sun, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { ProcessSteps } from '../../components/ProcessSteps';
import { FAQSection } from '../../components/FAQSection';
import CountUp from 'react-countup';

const Australia = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visaCategories = [
    {
      icon: GraduationCap,
      title: "Student Visas",
      types: [
        { name: "Subclass 500", description: "For international students enrolled in Australian educational institutions" },
        { name: "Subclass 590", description: "For student guardians accompanying minors studying in Australia" },
        { name: "Subclass 485", description: "Post-study work visa for graduates of Australian institutions" }
      ]
    },
    {
      icon: Briefcase,
      title: "Work Visas",
      types: [
        { name: "Subclass 482", description: "Temporary Skill Shortage visa for skilled workers with employer sponsorship" },
        { name: "Subclass 186", description: "Employer Nomination Scheme for permanent residency through employer sponsorship" },
        { name: "Subclass 189", description: "Skilled Independent visa for points-tested skilled workers" },
        { name: "Subclass 190", description: "Skilled Nominated visa for state/territory nominated skilled workers" }
      ]
    },
    {
      icon: Home,
      title: "Family Visas",
      types: [
        { name: "Subclass 309/100", description: "Partner visa for spouses and de facto partners of Australian citizens/PRs" },
        { name: "Subclass 820/801", description: "Partner visa for onshore applicants" },
        { name: "Subclass 101", description: "Child visa for dependent children of Australian citizens/PRs" }
      ]
    },
    {
      icon: Sun,
      title: "Business & Investment",
      types: [
        { name: "Subclass 188", description: "Business Innovation and Investment visa for entrepreneurs and investors" },
        { name: "Subclass 132", description: "Business Talent visa for high-caliber business owners or entrepreneurs" },
        { name: "Subclass 888", description: "Permanent Business Innovation and Investment visa" }
      ]
    }
  ];

  const australiaStats = [
    { number: 43, suffix: '', text: 'Universities' },
    { number: 650000, suffix: '+', text: 'International Students' },
    { number: 200000, suffix: '+', text: 'Skilled Visas Annually' },
    { number: 8, suffix: ' of 10', text: 'Most Livable Cities' }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We assess your profile, goals, and eligibility for various Australian visa options.",
      details: [
        "Comprehensive profile evaluation",
        "Points test assessment (if applicable)",
        "Visa category identification",
        "Timeline and cost estimation"
      ]
    },
    {
      title: "Visa Strategy Development",
      description: "We create a customized immigration strategy based on your specific situation.",
      details: [
        "Visa category selection",
        "State/territory nomination strategy (if applicable)",
        "Skills assessment planning",
        "English test preparation guidance"
      ]
    },
    {
      title: "Skills Assessment",
      description: "For skilled visas, we guide you through the mandatory skills assessment process.",
      details: [
        "Relevant assessing authority identification",
        "Documentation preparation",
        "Application submission",
        "Response to additional requests"
      ]
    },
    {
      title: "Expression of Interest (EOI)",
      description: "For points-tested visas, we help you submit a competitive EOI in SkillSelect.",
      details: [
        "Points maximization strategy",
        "EOI preparation and submission",
        "Profile updates as needed",
        "Invitation monitoring"
      ]
    },
    {
      title: "Visa Application",
      description: "We prepare and submit your visa application with all supporting documents.",
      details: [
        "Application form completion",
        "Supporting document compilation",
        "Health and character requirements",
        "Application submission and fee payment"
      ]
    },
    {
      title: "Post-Lodgment Support",
      description: "We provide ongoing support until your visa is granted.",
      details: [
        "Application status tracking",
        "Additional information requests handling",
        "Bridging visa management (if applicable)",
        "Grant notification and next steps"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the points system work for Australian skilled visas?",
      answer: "The points system assesses factors like age, English language ability, work experience, education, and other criteria. Most skilled visas require a minimum of 65 points to be eligible, but the actual invitation threshold is often higher due to competition. Points are awarded for factors such as being between 25-33 years old (30 points), having superior English (20 points), possessing a doctorate (20 points), and having 8+ years of skilled work experience (15 points)."
    },
    {
      question: "What is the difference between state-nominated and independent skilled visas?",
      answer: "The Skilled Independent visa (subclass 189) doesn't require nomination and allows you to live and work anywhere in Australia. The Skilled Nominated visa (subclass 190) requires state/territory nomination, giving you 5 additional points, but may have obligations to live in the nominating state for a period. The Skilled Work Regional visa (subclass 491) requires regional area nomination, gives 15 additional points, but restricts you to regional areas for at least 3 years."
    },
    {
      question: "How long does it take to process Australian visas?",
      answer: "Processing times vary significantly by visa type. Student visas typically take 4-6 weeks, Temporary Skill Shortage visas (482) 4-5 months, Partner visas 12-24 months, and Skilled Independent visas (189) 6-12 months. Processing times can change based on application volumes, complexity, and Department of Home Affairs priorities."
    },
    {
      question: "What are the English language requirements for Australian visas?",
      answer: "Most skilled visas require at least Competent English (IELTS 6.0 in each component or equivalent). Higher points are awarded for Proficient (IELTS 7.0) or Superior English (IELTS 8.0). Student visas typically require at least IELTS 5.5 or equivalent, though higher scores may be needed for specific courses. Some family visas have no formal English requirements, but applicants with less than functional English may need to pay an additional charge."
    },
    {
      question: "What is the pathway from temporary to permanent residence in Australia?",
      answer: "Several pathways exist: 1) Temporary Skill Shortage (482) visa holders can transition to the Employer Nomination Scheme (186) after 3 years with the same employer; 2) Student visa holders can apply for a Post-Study Work visa (485) and then pursue skilled migration; 3) Working Holiday visa holders can qualify for skilled migration if they obtain skills assessment and meet points requirements; 4) Partner visa applicants progress from temporary to permanent stages after 2 years in a genuine relationship."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Australia Immigration Services" 
        subtitle="Your pathway to opportunities in the land down under"
        backgroundImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80"
        overlayColor="from-blue-900/80 to-green-900/80"
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
            <h2 className="text-3xl font-bold mb-6">Unlock Opportunities in Australia</h2>
            <p className="text-gray-600 mb-6">
              Australia offers an exceptional quality of life, world-class education, and abundant career opportunities in a diverse and welcoming society. Our comprehensive Australian immigration services are designed to help you navigate the complex visa system with confidence.
            </p>
            <p className="text-gray-600 mb-6">
              With our expert guidance, you'll identify the most suitable visa pathways based on your profile and goals. We provide end-to-end support, from initial consultation and points assessment to application preparation and post-approval assistance.
            </p>
            <p className="text-gray-600">
              Our team of experienced consultants has helped thousands of individuals and families achieve their Australian dreams. We understand the nuances of Australia's points-based immigration system and stay updated on policy changes, ensuring your application stands the best chance of success.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Success Rate</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                  96%
                </div>
                <p className="text-gray-700">
                  Of our Australian visa applications are approved on the first attempt, compared to the national average of 70%.
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
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80" 
              alt="Sydney Opera House" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">
                  Join over 3,500 clients who have successfully relocated to Australia with our help.
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
          <h2 className="text-3xl font-bold text-center mb-12">Australia Immigration at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {australiaStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
          <h2 className="text-3xl font-bold text-center mb-6">Australian Visa Categories</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide expert assistance for all major Australian visa categories to suit your specific needs and goals.
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
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full">
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
          </div>
        </motion.div>
        
        {/* Why Choose Australia Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Australia?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Australia offers numerous advantages for immigrants seeking education, career opportunities, and quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Education",
                description: "World-class universities and vocational institutions with globally recognized qualifications.",
                image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
              },
              {
                title: "Strong Economy",
                description: "Resilient economy with low unemployment and high demand for skilled professionals.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare System",
                description: "Universal healthcare through Medicare, ensuring quality medical care for residents.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
              },
              {
                title: "Multicultural Society",
                description: "Diverse and inclusive society with over 200 different cultural backgrounds.",
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
              },
              {
                title: "Natural Beauty",
                description: "Stunning landscapes, from pristine beaches to ancient rainforests and the iconic Outback.",
                image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&q=80"
              },
              {
                title: "Work-Life Balance",
                description: "Emphasis on quality of life with excellent work conditions and leisure opportunities.",
                image: "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?auto=format&fit=crop&q=80"
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
          <h2 className="text-3xl font-bold text-center mb-6">Our Australian Immigration Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our streamlined process ensures a smooth journey from initial consultation to successful visa approval.
          </p>
          
          <ProcessSteps steps={processSteps} />
        </div>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Australian Immigration FAQs" />
        
        {/* Contact Section without Form */}
        <div className="mt-20">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Australian Journey?</h2>
    <p className="text-gray-600 mb-6">
      Contact our Australian immigration experts today for a free consultation. We'll assess your profile and provide personalized guidance for your visa application.
    </p>
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Why Choose Our Australian Immigration Services?</h3>
      <ul className="space-y-2">
        {[
          "Personalized guidance from experienced Australian immigration consultants",
          "End-to-end support from points assessment to visa approval",
          "96% success rate for Australian visa applications",
          "Up-to-date knowledge of Australia's points-based system",
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

export default Australia;