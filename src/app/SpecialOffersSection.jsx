'use client';

import React from 'react';
import Button from '../components/ui/Button';

const SpecialOffersSection = () => {
  return (
    <section 
      className="w-full bg-cover bg-center relative py-16 sm:py-20 md:py-28"
      style={{ backgroundImage: "url('/images/img_.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Special Offers for You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
            Save big on premium services with our exclusive promotions and discounts.
          </p>
          <div className="pt-4">
            <Button size="md">
              View all promotion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;