import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../../assets/298aba5416cfd396f3c48646e73ea56690c1edb5.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Scale-R AI Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl md:text-2xl font-semibold text-slate-900">Scale-R AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-slate-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/how-we-work" className="text-slate-700 hover:text-blue-600 transition-colors">
              How We Work
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link 
                to="/about" 
                className="text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/how-we-work" 
                className="text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}