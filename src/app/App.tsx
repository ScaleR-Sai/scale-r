import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Chatbot } from './components/Chatbot'; // Commented out for Figma preview
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { HowWeWork } from './pages/HowWeWork';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CookiePolicy } from './pages/CookiePolicy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        {/* <Chatbot /> */} {/* Commented out for Figma preview - uncomment when deploying to production */}
      </div>
    </Router>
  );
}