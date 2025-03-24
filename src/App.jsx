import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import About from "./components/About"; 
import CoconutTreeCareSection from "./components/CoconutTreeCareSection"; 
import CoconutUsesSection from "./components/CoconutUsesSection"; 
import CoconutCraftsSection from "./components/CoconutCraftsSection"; 
import FeaturedProductShowcase from "./components/FeaturedProductShowcase"; 
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";

// Import the new components
import Coconut from "./components/Coconut";
import Services from "./components/Services";

// Home page component that combines all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <CoconutTreeCareSection/>
      <CoconutUsesSection/>
      <CoconutCraftsSection/>
      <FeaturedProductShowcase/>
      <Contact/>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/marketplace" element={<FeaturedProductShowcase />} />
        <Route path="/coconut" element={<Coconut />} />
        <Route path="/components/contact" element={<Contact />} />
        
        {/* Video Section Routes */}
        <Route path="/coconut-uses" element={<CoconutUsesSection />} />
        <Route path="/tree-care" element={<CoconutTreeCareSection />} />
        <Route path="/coconut-crafts" element={<CoconutCraftsSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;