import React, { useState } from 'react';
import { Shield, Check, BookOpen, Clock, Star } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const gumroadLink = "https://ogudene.gumroad.com/l/jbteav?_gl=1*g9s0g4*_ga*MzM2NTcwNTE2LjE3NTk1OTYxOTc.*_ga_6LJN6D94N6*czE3NTk2MjI3OTUkbzIkZzEkdDE3NTk2MjUxMDckajYwJGwwJGgw";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-green-800">
            <Shield className="w-6 h-6" />
            The Compliance Firewall™
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-700 transition">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-700 transition">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-700 transition">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-700 transition">Contact</button>
            <a href={gumroadLink} target="_blank" rel="noopener noreferrer" className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition font-semibold">
              Buy the Playbook
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 gap-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-700 transition text-left">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-700 transition text-left">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-700 transition text-left">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-700 transition text-left">Contact</button>
              <a href={gumroadLink} target="_blank" rel="noopener noreferrer" className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition font-semibold text-center">
                Buy the Playbook
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pass Your Next CQC Inspection — With Proof, Not Panic.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            The CQC Inspection Readiness Playbook 2026 is a practical, inspection-ready system — built for care home managers who refuse to gamble with their next CQC visit.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Inside, you'll find the exact checklists, templates, and reporting framework that turn "we think we're ready" into "we can prove it."
          </p>
          <a href={gumroadLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition font-bold text-lg shadow-lg">
            ✅ Get Instant Access — £39 Launch Price
          </a>
          <p className="text-sm text-gray-600 mt-4">
            From The Compliance Firewall™ — Practical tools for real inspection readiness.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            The 2026 Inspection Reality
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p>New Quality Statements mean old checklists no longer match.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p>Inspectors now verify evidence of culture, not just policies.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p>1 in 3 homes rated 'Good' in 2023 were later downgraded after reinspection.</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-green-800 mt-8 text-center">
            Good paperwork isn't enough anymore. You need proof of practice.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            The 2026 Inspection Survival System — In One Playbook.
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The CQC Inspection Readiness Playbook 2026 gives you everything you need to prepare, document, and prove compliance — all in one professional system.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">15-page printable guide built around 2025–26 Quality Statements</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">"Proof, Not Panic" templates and checklists</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">48-hour rescue plan for short-notice inspections</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">Case Study: How Riverview Care Home improved from "Requires Improvement" to "Good" in 6 weeks</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 md:col-span-2">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">Manager's Monthly Audit Routine — 1 hour a month to stay inspection-ready year-round</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href={gumroadLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition font-bold text-lg shadow-lg">
              🛡 Download the Playbook – £39 (Limited Launch Price)
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-semibold italic">
            "Inspectors don't want more paperwork — they want proof of practice."
          </p>
          <p className="text-lg mt-4 opacity-90">— The Compliance Firewall™</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Care Leaders Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-700 text-green-700" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "This changed how we prepare for inspections — no more guessing. My team now knows exactly what proof CQC expects. The 48-hour checklist alone is worth it."
              </p>
              <p className="text-sm font-semibold text-gray-900">— Registered Manager, Essex</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-700 text-green-700" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We used the Playbook to get ready for a short-notice visit. We passed with zero compliance actions. It's the first resource that actually understands how care homes work."
              </p>
              <p className="text-sm font-semibold text-gray-900">— Compliance Lead, Kent</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-700 text-green-700" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "It's simple, clear, and powerful. Not theory — just what to do, when, and why. Every manager I know needs this before their next inspection."
              </p>
              <p className="text-sm font-semibold text-gray-900">— Care Home Director, Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this an official CQC document?
              </h3>
              <p className="text-gray-700">
                No — it's an independent professional guide designed to help you meet and exceed CQC expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I share it with my team?
              </h3>
              <p className="text-gray-700">
                Yes — it's licensed for internal use within your care home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait for Your Next Inspection Letter.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The homes that prepare before the call get 'Good.' The ones that scramble after it — don't.
          </p>
          <a href={gumroadLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg">
            Get Your Playbook Now — £39 Launch Price
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 The Compliance Firewall™</p>
          <p className="mb-2">
            <a href="mailto:progearfinder@gmail.com" className="hover:text-white transition">
              progearfinder@gmail.com
            </a>
          </p>
          <p className="text-sm">All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}