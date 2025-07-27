'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import LoginModal from '@/components/ui/LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  // 1. Check localStorage when the component first loads
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleLoginSubmit = (userData) => {
    // 2. Save the user's name to localStorage
    localStorage.setItem('userName', userData.name);
    setUserName(userData.name);
    setIsModalOpen(false);
  };

  // 3. Create a logout handler
  const handleLogout = () => {
    // Remove the name from localStorage and reset the state
    localStorage.removeItem('userName');
    setUserName(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary border-b border-gray-700/50">
        <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:pl-0 lg:pr-8">
          {/* Left Side: Logos & Mobile Menu */}
          <div className="flex items-center">
            <button
              className="block p-2 text-white lg:hidden"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/">
              <div className="flex cursor-pointer items-center gap-x-2 sm:gap-x-4">
                <img
                  src="/images/image.png"
                  alt="FixinMoto Logo"
                  className="h-auto w-[80px] sm:w-[100px]"
                />
                <img
                  src="/images/img_jawa.png"
                  alt="Jawa Logo"
                  className="h-auto w-[80px] sm:w-[100px] md:w-[110px]"
                />
              </div>
            </Link>
          </div>

          {/* Right Side: Navigation & Login */}
          <div className="flex items-center">
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full z-50 w-full bg-primary lg:relative lg:top-auto lg:z-auto lg:block lg:w-auto lg:bg-transparent`}>
              <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-0">
                <Link href="/about" className="text-left font-semibold text-white transition-colors hover:text-gray-200 sm:text-base lg:text-center">
                  About Us
                </Link>
                <Link href="/appointment" className="text-left font-semibold text-white transition-colors hover:text-gray-200 sm:text-base lg:text-center">
                  Appointment
                </Link>
                <div className="relative">
                  <button
                    className="flex items-center gap-1 font-semibold text-white transition-colors hover:text-gray-200 sm:text-base"
                    onClick={toggleSubmenu}
                  >
                    Pages
                    <img src="/images/img_arrow_down.svg" alt="" className="h-6 w-6" />
                  </button>
                  {isSubmenuOpen && (
                    <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg" role="menu">
                      <li><Link href="/services" className="block w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-gray-100">Our Services</Link></li>
                      <li><Link href="/team" className="block w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-gray-100">Our Team</Link></li>
                    </ul>
                  )}
                </div>
              </div>
            </nav>

            {/* 4. Updated Login/Logout display */}
            <div className="ml-4 hidden sm:block lg:ml-8">
              {userName ? (
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-white">Welcome, {userName}</span>
                  <Button onClick={handleLogout} size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsModalOpen(true)} size="sm" className="text-xs sm:text-sm">
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
};

export default Header;
