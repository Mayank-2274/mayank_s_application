'use client';
import React from 'react';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary">
      {/* Hero Section */}
     <section className="w-full relative">
  {/* 1. Blurred Background Image Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-sm"
    style={{ backgroundImage: "url('/images/tyre.jpg')" }}
  ></div>

  {/* 2. Gradient Overlay (remains the same) */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>

  {/* 3. Content Layer (z-10 brings it to the front) */}
  <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6">
        <span className="text-white">Let's Get Your Vehicle in </span>
        <span className="text-accent">Top Shape!</span>
      </h2>
      {/* 4. Brighter Paragraph Text */}
      <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl">
        Ready to give your car the care it deserves?
        Contact Synergy Jawa for a free consultation or to book a service appointment today
      </p>
    </div>
  </div>
</section>

      {/* Main Footer Content */}
      <div className="w-full bg-secondary py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-0">
              <img 
                src="/images/img_jawa.png" 
                alt="FixinMoto Logo" 
                className="w-[10px] sm:w-[10px] md:w-[140px] h-auto mb-0 sm:mb-0"
              />
              <div className="space-y-2">
                <div className="flex items-start gap-4">
                  <img src="/images/img_vector_red_600_16x16.svg" alt="" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white-50">Bengaluru, Karnataka</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/images/img_vector_16x16.svg" alt="" className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white-50">+91 xxxxxxxx</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/images/img_vector_1.svg" alt="" className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white-50">hello@jawa.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/images/img_vector_2.svg" alt="" className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white-50">www.synergy-jawa.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 sm:mb-6">Opening Hours</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li>
                  <a href="#" className="text-sm sm:text-lg text-white-50 hover:text-white transition-colors">
                    Mon-Fri : 08.00 - 20.00
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-lg text-white-50 hover:text-white transition-colors">
                    Sat-Sun: 10.00 - 16.00
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 sm:mb-6">Quick Links</h3>
              <div className="text-sm sm:text-base text-white-50 leading-relaxed space-y-2">
                <p className="hover:text-white transition-colors cursor-pointer">About Us</p>
                <p className="hover:text-white transition-colors cursor-pointer">Why with Us</p>
                <p className="hover:text-white transition-colors cursor-pointer">Our Services</p>
                <p className="hover:text-white transition-colors cursor-pointer">Appointment</p>
                <p className="hover:text-white transition-colors cursor-pointer">Blog</p>
                <p className="hover:text-white transition-colors cursor-pointer">FAQ</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 sm:mb-6">Subscribe to Our Newsletter</h3>
              <p className="text-sm sm:text-lg text-white-50 leading-relaxed mb-6 sm:mb-8">
                Sign up for our newsletter to receive exclusive promotions, news, and tips straight to your inbox.
              </p>
              <div className="space-y-4 sm:space-y-5">
                <EditText 
                  placeholder="Email Address"
                  className="bg-transparent border-white-50 text-white placeholder-white"
                />
                <Button 
                  size="sm"
                  rightImage={{
                    src: "/images/img_vector_white_a700_18x18.svg",
                    width: 18,
                    height: 18
                  }}
                  className="shadow-[0px_4px_12px_#22222219]"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-white-50">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-center text-sm sm:text-lg text-white-50">
            Copyright © 2024 Jawa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;