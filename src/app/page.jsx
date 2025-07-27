'use client';
import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import DifferenceSection from './DifferenceSection';
import SpecialOffersSection from './SpecialOffersSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import LocationSection from './LocationSection';
import Footer from '../components/common/Footer';
export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <DifferenceSection />
      <SpecialOffersSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <LocationSection />
      <Footer />
    </div>
  );
}