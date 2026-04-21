import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import HealthBenefits from '@/components/HealthBenefits';
import Testimonials from '@/components/Testimonials';
import ComparisonTable from '@/components/ComparisonTable';
import PricingSection from '@/components/PricingSection';
import CTABanner from '@/components/CTABanner';
import IndependentSection from '@/components/IndependentSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #F5FAF6 0%, #F5FAF6 100%)' }}
    >
      {/* Outer wrapper with border and rounded corners */}
      <div className="mt-4 md:mt-8 mb-10 md:mb-24 2xl:max-w-7xl px-4 md:px-8 mx-auto">
        <div
          className="border relative border-neutral-200 rounded-2xl"
          style={{ background: 'linear-gradient(180deg, #F5FAF6 0%, #F5FAF6 100%)' }}
        >
          <div className="relative w-full z-10">
            {/* Navigation */}
            <div className="pb-12 p-2">
              <Navbar />
            </div>

            {/* Hero Section */}
            <HeroSection />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* Health Benefits */}
      <HealthBenefits />

      {/* Testimonials */}
      <Testimonials />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Banner with slideshow */}
      <CTABanner />

      {/* 100% Independent */}
      <IndependentSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
