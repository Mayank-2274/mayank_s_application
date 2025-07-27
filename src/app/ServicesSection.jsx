'use client';

import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      title: 'Engine Repair & Maintenance',
      image: '/images/img_image.png',
      icon: '/images/img_inspection_car.svg'
    },
    {
      id: '02',
      title: 'Oil & Filter Changes',
      image: '/images/img_image.png',
      icon: '/images/img_oil_change_car.svg'
    },
    {
      id: '03',
      title: 'Brake Services',
      image: '/images/img_image_454x286.png',
      icon: '/images/img_brake_inspection.svg'
    },
    {
      id: '04',
      title: 'Tire Care',
      image: '/images/img_image.png',
      icon: '/images/img_tire_rotation.svg'
    }
  ];

  const brands = [
    '/images/img_group_3.svg',
    '/images/img_logo.svg',
    '/images/img_logo_white_a700.svg',
    '/images/img_logo_white_a700_56x146.svg',
    '/images/img_logo_88.svg'
  ];

  return (
    <section className="w-full bg-primary py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base text-white-50 mb-2">Our Services</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-medium leading-tight">
              <span className="text-accent">Comprehensive</span>
              <span className="text-white"> Automotive </span>
              <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-sm sm:text-lg text-white-50 leading-relaxed">
              From routine maintenance to advanced diagnostics, we've got all your automotive needs covered.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service) => (
            <div key={service.id} className="relative group">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[454px] rounded-2xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Service Number */}
                <div className="absolute top-6 left-6">
                  <span className="text-white text-base font-medium">{service.id}</span>
                </div>

                {/* Service Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col gap-4">
                    <img 
                      src={service.icon} 
                      alt="" 
                      className="w-16 h-16"
                    />
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-8 sm:mb-12">
            Quality Car Repair You Can Count On !
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-70">
            {brands.map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={brand} 
                  alt={`Brand ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;