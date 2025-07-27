'use client';
import React, { useState } from 'react';
import Button from '../components/ui/Button';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <section className="w-full bg-primary">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Navigation */}
        <div className="flex justify-between items-center py-4 sm:py-6 md:py-7">
          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2 text-white" 
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-primary lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0">
              <button 
                className="text-white text-sm sm:text-base font-semibold hover:text-gray-200 transition-colors text-left lg:text-center"
                role="menuitem"
              >
                About Us
              </button>
              <button 
                className="text-white text-sm sm:text-base font-semibold hover:text-gray-200 transition-colors text-left lg:text-center ml-0 lg:ml-8"
                role="menuitem"
              >
                Appointment
              </button>
              <div className="relative ml-0 lg:ml-8">
                <button 
                  className="flex items-center gap-1 text-white text-sm sm:text-base font-semibold hover:text-gray-200 transition-colors px-6 lg:px-8"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isSubmenuOpen}
                  onClick={toggleSubmenu}
                >
                  Pages
                  <img src="/images/img_arrow_down.svg" alt="" className="w-6 h-6" />
                </button>
                {isSubmenuOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50" role="menu">
                    <li role="menuitem">
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                        Submenu Item 1
                      </button>
                    </li>
                    <li role="menuitem">
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                        Submenu Item 2
                      </button>
                    </li>
                    <li role="menuitem">
                      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                        Submenu Item 3
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>

          {/* Logo */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <img 
              src="/images/img_vector.svg" 
              alt="FixinMoto Logo" 
              className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
            />
          </div>

          {/* Login Button */}
          <div className="hidden sm:block">
            <Button size="sm" className="text-xs sm:text-sm">
              Login
            </Button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[97px] font-semibold leading-tight">
                <span className="text-white">Drive Confidently with </span>
                <span className="text-accent">FixinMoto</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="md" className="mt-4">
                  Appointment Now
                </Button>
                <Button 
                  variant="outline" 
                  size="md"
                  className="border border-white text-white hover:bg-white hover:text-primary"
                >
                  Our Services
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-lg text-white-80 leading-relaxed max-w-md">
                Your car deserves the best care, and we deliver it with precision, speed, and reliability. Book your appointment today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;