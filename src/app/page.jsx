'use client';
import React from 'react';
import Header from '@/components/common/Header'; // 1. Import the Header component
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import DifferenceSection from './DifferenceSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import LocationSection from './LocationSection';
import Footer from '../components/common/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Header /> {/* 2. Render the Header component here */}
      <HeroSection />
      <ServicesSection />
      <DifferenceSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
