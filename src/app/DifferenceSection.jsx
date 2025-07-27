'use client';

import React from 'react';
import Button from '../components/ui/Button';

const DifferenceSection = () => {
  const features = [
    'Certified and experienced technicians.',
    'Transparent pricing with no hidden charges.',
    'Advanced tools and diagnostic equipment.',
    'Fast, reliable service you can trust.'
  ];

  return (
    <section className="w-full bg-secondary py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-sm sm:text-base text-white-50 mb-2">Why Choose Us</p>
              <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-medium leading-tight mb-6 sm:mb-8">
                <span className="text-white">The FixinMoto </span>
                <span className="text-accent">Difference</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-white-50 leading-relaxed">
                Discover why FixinMoto is the trusted choice for hundreds of car owners.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <img 
                      src="/images/img_check_circle.svg" 
                      alt="" 
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-white-50 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button size="md">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="/images/img_image_638x618.png" 
                  alt="FixinMoto Service" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Small Image Overlay */}
              <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12">
                <img 
                  src="/images/img_image_638x618.png" 
                  alt="FixinMoto Detail" 
                  className="w-32 sm:w-48 md:w-60 h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <div className="bg-accent rounded-2xl p-4 sm:p-6 text-center shadow-lg">
                  <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    +15
                  </div>
                  <div className="text-white-50 text-sm sm:text-lg leading-tight mt-2">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;