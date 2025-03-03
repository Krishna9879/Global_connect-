import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Countries } from './pages/Countries';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Service Pages
import StudentVisa from './pages/services/StudentVisa';
import WorkVisa from './pages/services/WorkVisa';
import PRVisa from './pages/services/PRVisa';
import BusinessVisa from './pages/services/BusinessVisa';
import TouristVisa from './pages/services/TouristVisa';
import FamilyVisa from './pages/services/FamilyVisa'; // Added FamilyVisa import

// Country Pages
import USA from './pages/countries/USA';
import Canada from './pages/countries/Canada';
import UK from './pages/countries/UK';
import Australia from './pages/countries/Australia';
import NewZealand from './pages/countries/NewZealand';
import Germany from './pages/countries/Germany';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/student-visa" element={<StudentVisa />} />
            <Route path="/services/work-visa" element={<WorkVisa />} />
            <Route path="/services/pr-visa" element={<PRVisa />} />
            <Route path="/services/business-visa" element={<BusinessVisa />} />
            <Route path="/services/tourist-visa" element={<TouristVisa />} />
            <Route path="/services/family-visa" element={<FamilyVisa />} /> {/* Added FamilyVisa route */}
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/usa" element={<USA />} />
            <Route path="/countries/canada" element={<Canada />} />
            <Route path="/countries/uk" element={<UK />} />
            <Route path="/countries/australia" element={<Australia />} />
            <Route path="/countries/new-zealand" element={<NewZealand />} />
            <Route path="/countries/germany" element={<Germany />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;