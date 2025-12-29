import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Workflow, Code, Settings, TrendingUp, Users, Heart, Clock, Shield } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
                Your External AI Department — Built to Help You{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Scale Smarter
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                We automate processes, optimize systems, and integrate AI solutions that give you time back. 
                Let us handle the complexity while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/how-we-work" 
                  className="px-8 py-4 bg-white text-slate-900 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  How We Work
                </Link>
              </div>
            </div>

            {/* Right: Visual with Floating Cards */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Central Circle Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-teal-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTkxMzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="AI Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Sparkles className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Service</p>
                      <p className="text-sm font-semibold text-slate-900">AI Integration</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float-delay-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Workflow className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Service</p>
                      <p className="text-sm font-semibold text-slate-900">Automation</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float-delay-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Settings className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Service</p>
                      <p className="text-sm font-semibold text-slate-900">Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI and automation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl text-slate-900 mb-4">AI Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Seamlessly integrate cutting-edge AI technologies into your existing workflows. 
                We help you leverage the power of AI to enhance productivity and decision-making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Workflow className="text-white" size={28} />
              </div>
              <h3 className="text-2xl text-slate-900 mb-4">Process Automation</h3>
              <p className="text-slate-600 leading-relaxed">
                Automate repetitive tasks and streamline operations. We build intelligent automation 
                systems that save time and reduce errors across your organization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-2xl text-slate-900 mb-4">Custom Software Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Build bespoke software solutions designed specifically for your unique challenges. 
                From concept to deployment, we create tools that fit your exact needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="text-white" size={28} />
              </div>
              <h3 className="text-2xl text-slate-900 mb-4">Systems Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze and optimize your existing systems for maximum efficiency. We identify 
                bottlenecks and implement solutions that improve performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Scale-R */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635183783375-98e857771351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGJsdWV8ZW58MXx8fHwxNzY1OTU2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Data Visualization"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-12">
                Why Choose Scale-R
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">We Think Long-Term</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our solutions are built to scale with your business, ensuring sustainable growth and adaptability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Users className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">We Understand Business</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Technology serves your business goals, not the other way around. We align every solution with your objectives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Heart className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">We Build for Humans</h3>
                    <p className="text-slate-600 leading-relaxed">
                      User-friendly, intuitive solutions that your team will actually want to use every day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">Integrity-Driven</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Transparent communication, honest recommendations, and ethical AI practices guide everything we do.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-2">We Give You Time Back</h3>
                    <p className="text-slate-600 leading-relaxed">
                      By automating the mundane, we free you to focus on what truly matters: growing your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model / Programs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured engagements designed to deliver maximum value at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <span>1</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Client Readiness Course</h3>
              <p className="text-slate-600 leading-relaxed">
                Prepare your team for AI transformation with our comprehensive readiness program.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-teal-600 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-6 text-white">
                <span>2</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Discovery & Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                Deep dive into your systems to identify opportunities for optimization and automation.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <span>3</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Implementation</h3>
              <p className="text-slate-600 leading-relaxed">
                Execute the plan with precision, integrating new systems seamlessly into your workflow.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-teal-600 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-6 text-white">
                <span>4</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Long-Term Partnership</h3>
              <p className="text-slate-600 leading-relaxed">
                Ongoing support and continuous improvement to keep your systems ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1675602488453-c3897a475af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjU5NjQ4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-blue-400" size={32} />
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
            "AI isn't about replacing humans—it's about empowering them. We build systems that handle the complexity, 
            so your team can focus on creativity, strategy, and growth."
          </blockquote>
          <p className="text-lg text-blue-200">
            — The Scale-R Philosophy
          </p>
          <div className="mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
