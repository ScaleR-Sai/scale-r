import { Sparkles, Workflow, Code, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Comprehensive AI and automation solutions designed to transform your business operations
          </p>
        </div>
      </section>

      {/* AI Integration */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">AI Integration</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Harness the power of artificial intelligence without the complexity. We integrate 
                state-of-the-art AI technologies into your existing systems, making them smarter, 
                faster, and more efficient.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Natural Language Processing for customer service automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Machine Learning models for predictive analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Computer Vision for document processing and quality control</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">AI-powered decision support systems</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMG5vZGVzfGVufDF8fHx8MTc2NTk4NjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Network Nodes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Automation */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1635183783375-98e857771351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGJsdWV8ZW58MXx8fHwxNzY1OTU2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Workflow className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">Process Automation</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Eliminate repetitive tasks and streamline workflows with intelligent automation. 
                We design systems that handle the mundane so your team can focus on high-value work.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Workflow automation for approval processes and routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Data entry and validation automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Automated reporting and analytics generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Integration between disparate systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Development */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">Custom Software Development</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Off-the-shelf software doesn't always fit. We build custom solutions tailored precisely 
                to your unique business requirements and workflows.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Web applications and portals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">API development and integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Database design and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Mobile-responsive solutions</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1675602488453-c3897a475af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjU5NjQ4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Circuit Board"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Systems Optimization */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1737570719776-76ba6b9610ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNoYXBlcyUyMGJsdWV8ZW58MXx8fHwxNzY1OTg5NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract Shapes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">Systems Optimization</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Your existing systems might be slowing you down. We analyze, identify bottlenecks, 
                and implement improvements that make everything run smoother and faster.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Performance audits and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Legacy system modernization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Scalability improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-600">Security enhancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Interested in Our Services?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join our waitlist and we'll discuss which solutions are right for your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
