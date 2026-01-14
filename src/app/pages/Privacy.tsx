export function Privacy() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: December 17, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At Scale-R AI ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Company information</li>
              <li>Email address and phone number</li>
              <li>Information you provide in messages or forms</li>
              <li>Payment and billing information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mt-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mt-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-600 mt-4">
              Email: scaleraigh@gmail.com<br />
              Address: Accra, Ghana
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}