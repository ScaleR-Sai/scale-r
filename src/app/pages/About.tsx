import { Target, Eye, Award, Users } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Scale-R AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            We're not just a software company. We're your external AI department, dedicated to helping 
            businesses scale smarter through intelligent automation and optimization.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Scale-R AI was founded on a simple observation: most businesses struggle not from lack 
                  of ambition, but from being bogged down by repetitive tasks, inefficient processes, and 
                  outdated systems.
                </p>
                <p>
                  We saw brilliant entrepreneurs spending hours on work that could be automated. We saw 
                  teams drowning in manual data entry. We saw companies missing opportunities because they 
                  couldn't process information fast enough.
                </p>
                <p>
                  So we built Scale-R AI to be the AI department that every growing business needs but 
                  can't afford to build in-house. We combine cutting-edge AI technology with deep business 
                  understanding to deliver solutions that actually work in the real world.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1743947198087-02069eb42745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NjU5ODk1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract technology pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To democratize access to enterprise-grade AI and automation, making powerful technology 
                accessible and practical for businesses of all sizes. We believe every company deserves 
                the efficiency gains that AI can provide.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-teal-600" size={32} />
              </div>
              <h2 className="text-3xl text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A world where businesses run on intelligent, adaptive systems that free human talent to 
                focus on creativity, strategy, and innovation. Where technology empowers people rather 
                than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Human-Centric</h3>
              <p className="text-slate-600">
                Technology should serve people, not the other way around. We design with empathy and 
                build for real human needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We're committed to delivering exceptional quality in every line of code and every 
                client interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Results-Driven</h3>
              <p className="text-slate-600">
                We measure success by the tangible impact we create for your business, not by vanity 
                metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Transparency</h3>
              <p className="text-slate-600">
                Open communication, honest timelines, and clear explanations. No jargon, no hidden 
                costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Continuous Learning</h3>
              <p className="text-slate-600">
                AI technology evolves rapidly. We stay ahead of the curve to bring you the latest and 
                best solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">Partnership</h3>
              <p className="text-slate-600">
                Your success is our success. We're invested in building long-term relationships, not 
                quick wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join our waitlist to be among the first businesses partnering with Scale-R AI.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-all"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
