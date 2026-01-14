import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved, 
          deleted, or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">
            Need help? We're here for you.
          </p>
          <Link 
            to="/contact" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
