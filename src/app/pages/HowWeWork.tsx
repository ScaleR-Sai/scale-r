import { Search, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowWeWork() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            How We <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Our four-phase process ensures you get solutions that work, not experiments that might.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-4">
              How Scale-R Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each phase builds on the last, ensuring we deliver solutions that create lasting value
            </p>
          </div>

          {/* Phase 1 */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Search className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">PHASE 1</div>
                    <h3 className="text-3xl text-slate-900">Discovery & Audit</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Before we recommend any solution, we map your processes, interview your team, and assess your infrastructure. 
                  This ensures we understand the real problems, not just the symptoms.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Stakeholder interviews to understand pain points</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Process mapping and bottleneck identification</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Technical infrastructure assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Opportunity identification and prioritization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-blue-600 font-semibold mb-2">Duration</div>
                    <div className="text-2xl text-slate-900">1-2 weeks</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-blue-600 font-semibold mb-2">Deliverable</div>
                    <div className="text-lg text-slate-900">Comprehensive audit report with prioritized recommendations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-teal-600 font-semibold mb-2">Duration</div>
                    <div className="text-2xl text-slate-900">2-4 weeks</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-teal-600 font-semibold mb-2">Deliverable</div>
                    <div className="text-lg text-slate-900">Detailed project plan with timeline, budget, and success metrics</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-teal-600 font-semibold">PHASE 2</div>
                    <h3 className="text-3xl text-slate-900">Strategy & Planning</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We create a detailed roadmap based on what we learned in discovery. Every recommendation is 
                  backed by data and tailored to your business, not copied from a template.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Solution architecture and design</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Technology stack selection</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Milestone definition and timeline creation</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">ROI projections and success criteria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Rocket className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">PHASE 3</div>
                    <h3 className="text-3xl text-slate-900">Implementation</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We build, test, and deploy your solutions in phases, so your team can adopt them without disruption. 
                  You'll see progress at every step, not just at the end.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Agile development with regular progress updates</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Rigorous testing and quality assurance</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">User training and documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Phased rollout and deployment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-blue-600 font-semibold mb-2">Duration</div>
                    <div className="text-2xl text-slate-900">8-16 weeks</div>
                    <div className="text-sm text-slate-500 mt-1">(varies by project scope)</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-blue-600 font-semibold mb-2">Deliverable</div>
                    <div className="text-lg text-slate-900">Fully functional, tested solution deployed to production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-teal-600 font-semibold mb-2">Duration</div>
                    <div className="text-2xl text-slate-900">Ongoing</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="text-sm text-teal-600 font-semibold mb-2">Deliverable</div>
                    <div className="text-lg text-slate-900">Continuous improvements, support, and optimization</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center">
                    <HeartHandshake className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-teal-600 font-semibold">PHASE 4</div>
                    <h3 className="text-3xl text-slate-900">Ongoing Partnership</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Your business evolves, and your systems should too. We remain your external AI department, 
                  continuously optimizing and scaling solutions as your needs change.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Responsive technical support</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Performance monitoring and optimization</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Regular updates and enhancements</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600">Strategic guidance for future improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join our waitlist to be among the first businesses working with Scale-R AI.
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
