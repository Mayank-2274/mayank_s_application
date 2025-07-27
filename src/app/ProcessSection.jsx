'use client';

import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      title: 'Book Your Appointment',
      description: 'Easily book your car repair appointment online. Choose your preferred time and get your vehicle back in top shape—fast and hassle-free',
      isActive: true
    },
    {
      title: 'Vehicle Check-In',
      description: 'Quick and easy vehicle check-in. Drop off your car, and we\'ll take care of the rest—ensuring a smooth and efficient repair process.',
      isActive: false
    },
    {
      title: 'Approval & Repairs',
      description: 'Get fast approval for repairs. Once we assess your vehicle, we\'ll confirm the work needed and get started right away to get you back on the road.',
      isActive: false
    },
    {
      title: 'Drive Away Confidently',
      description: 'Drive away with confidence. After our expert repairs, your vehicle is ready to hit the road safely and smoothly.',
      isActive: false
    }
  ];

  return (
    <section className="w-full bg-primary py-16 sm:py-20 md:py-28">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Process Steps */}
          <div className="space-y-8 sm:space-y-12">
            {/* Section Header */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-white-50">Service Process</p>
              <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-medium leading-tight">
                <span className="text-white">What to Expect with </span>
                <span className="text-accent">FixinMoto</span>
              </h2>
            </div>

            <div className="lg:hidden mb-8">
              <p className="text-sm sm:text-lg text-white-70 leading-relaxed">
                A smooth and transparent process for all your vehicle needs.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`border-l-2 ${step.isActive ? 'border-accent' : 'border-transparent'} pl-8 py-3`}>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ${step.isActive ? 'text-accent' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white-70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-first lg:order-last">
            <div className="hidden lg:block mb-8">
              <p className="text-sm sm:text-lg text-white-70 leading-relaxed">
                A smooth and transparent process for all your vehicle needs.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/img_image_638x618.png" 
                alt="FixinMoto Process" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;