'use client';
import React from 'react';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';
import Dropdown from '../components/ui/Dropdown';

const LocationSection = () => {
  const areaOptions = [
    { label: 'Downtown Area', value: 'downtown' },
    { label: 'North Side', value: 'north' },
    { label: 'South Side', value: 'south' },
    { label: 'East Side', value: 'east' },
    { label: 'West Side', value: 'west' }
  ];

  return (
    <section className="w-full bg-secondary py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-sm sm:text-lg text-white-50 mb-4">Coverage Area</p>
          <div className="space-y-6">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-medium text-white leading-tight max-w-4xl">
              FixinMoto Near You Quality, Convenience, and Expertise
            </h2>
            <p className="text-sm sm:text-base text-white-70 leading-relaxed">
              Whether you're near or far, our expert services are just around the corner.
            </p>
          </div>
        </div>

        {/* Map and Form Section */}
        <div className="relative">
          {/* Map Container */}
          <div className="w-full h-[400px] sm:h-[500px] md:h-[540px] rounded-2xl overflow-hidden relative">
            <iframe
              title="FixinMoto Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0059,40.7128,-73.9352,40.7589&layer=mapnik"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Form Overlay */}
          <div className="absolute top-8 sm:top-12 left-4 sm:left-8 lg:left-12 w-full max-w-sm">
            <div className="bg-secondary rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="space-y-6">
                <EditText
                  placeholder="Enter Your Location"
                  leftImage={{
                    src: "/images/img_distance.svg",
                    width: 24,
                    height: 24
                  }}
                />

                <div className="flex items-center gap-2 px-3 py-3 border border-gray-200 rounded-lg bg-white">
                  <img 
                    src="/images/img_calendar_month.svg" 
                    alt="" 
                    className="w-6 h-6"
                  />
                  <span className="text-sm sm:text-base text-muted">Date</span>
                </div>

                <Dropdown
                  placeholder="Select Your Area"
                  options={areaOptions}
                  rightImage={{
                    src: "/images/img_arrowdropdown.svg",
                    width: 24,
                    height: 24
                  }}
                />

                <Button size="md" fullWidth>
                  Check Avability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;