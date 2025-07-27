'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button'; // CORRECTED: Using absolute path for consistency

const HeroSection = () => {
  return (
    // The main section now only contains the hero content.
    // The negative margin has been removed to prevent it from covering the sticky header.
    <section className="w-full bg-primary">
      {/* HERO CONTENT CONTAINER */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-5">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-[28px] font-semibold leading-tight sm:text-[50px] md:text-[50px] lg:text-[60px]">
                <span className="text-white">Drive Confidently with </span>
                <span className="text-accent">Synergy Jawa</span>
              </h1>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link href="/team">
                  <Button size="md" className="mt-0">
                    Shop Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="md"
                  className="border border-white text-white hover:bg-white hover:text-primary"
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="https://www.pngmart.com/files/22/JAWA-Motorcycle-PNG.png"
                alt="JAWA Motorcycle"
                className="w-full h-auto max-w-md mb-6"
              />
              <p className="max-w-md text-sm leading-relaxed text-center text-white-80 sm:text-lg lg:text-left">
                Your Bike deserves the best care, and we deliver it with precision, speed, and reliability. Book your appointment today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
