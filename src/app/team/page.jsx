'use client';
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ProductsPage = () => {
  const chipItems = [
    { label: 'All' },
    { label: 'Engine' },
    { label: 'Brake Systems' },
    { label: 'Suspension' },
    { label: 'Filters' },
    { label: 'Lighting' }
  ];

  // MODIFICATION: Replaced all image URLs with new, stable ones from a different source.
  const products = [
    { id: 1, name: 'Performance Spark Plugs', price: '₹1,899', category: 'Engine', description: 'High-performance iridium spark plugs for better fuel efficiency. Set of 4.', image: '/products/spark.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 2, name: 'Ceramic Brake Pad Set', price: '₹2,500', category: 'Brake Systems', description: 'Premium ceramic brake pads for superior stopping power and low dust.', image: '/products/brakepad.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 3, name: 'Full Synthetic Engine Oil', price: '₹1,250', category: 'Engine', description: '5W-40 fully synthetic engine oil for maximum performance. 5 Litre can.', image: '/products/oil.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 4, name: 'Adjustable Coilover Kit', price: '₹7,999', category: 'Suspension', description: 'Complete coilover suspension kit with adjustable height and damping.', image: '/products/coil.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 5, name: 'LED Headlight Bulbs', price: '₹800', category: 'Lighting', description: 'Ultra-bright H4 LED headlight conversion kit. 6000K cool white.', image: '/products/bulb.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 6, name: 'Performance Air Filter', price: '₹1,150', category: 'Filters', description: 'Washable and reusable high-flow air filter to increase horsepower.', image: '/products/filter.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 7, name: 'Oxygen Sensor (O2)', price: '₹1,400', category: 'Engine', description: 'Direct-fit upstream oxygen sensor for optimizing fuel economy.', image: '/products/oxygen.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 8, name: 'Bike Battery (80D26L)', price: '₹3,800', category: 'Lighting', description: 'Maintenance-free 12V car battery with a 48-month warranty.', image: '/products/battery.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 9, name: 'Drilled & Slotted Brake Rotors', price: '₹5,200', category: 'Brake Systems', description: 'Performance brake rotors for improved heat dissipation and braking. Pair.', image: '/products/rotter.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 10, name: 'Front Strut Assembly', price: '₹3,500', category: 'Suspension', description: 'Complete front strut and coil spring assembly for a smooth ride.', image: '/products/strust.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 11, name: 'Cabin Air Filter', price: '₹950', category: 'Filters', description: 'Activated carbon cabin air filter to remove dust, pollen, and odors.', image: '/products/cabin.jpg', socialIcons: ['/images/cart.svg'] },
    { id: 12, name: 'LED Fog Lamp Kit', price: '₹900', category: 'Lighting', description: 'High-intensity yellow LED fog lamps for improved visibility in poor weather.', image: '/products/lamp.jpg', socialIcons: ['/images/cart.svg'] }
  ];

  const brandLogos = [
    { src: '/images/img_group_3.svg', width: 176, height: 80 },
    { src: '/images/img_logo.svg', width: 88, height: 80 },
    { src: '/images/img_logo_white_a700.svg', width: 80, height: 80 },
    { src: '/images/img_logo_white_a700_56x146.svg', width: 146, height: 56 },
    { src: '/images/img_logo_88.svg', width: 78, height: 80 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <section 
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <Header />
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-secondary py-[53px] sm:py-[70px] md:py-[85px] lg:py-[106px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-[64px] sm:mb-[80px] md:mb-[96px] lg:mb-[128px]">
            {chipItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedCategory(item.label)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300
                  ${selectedCategory === item.label 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-[24px] mb-1">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                <div className="w-full mb-[-20px] relative z-10 bg-white rounded-[14px]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[296px] object-cover rounded-[14px]"
                  />
                </div>
                <div className="w-full bg-transparent flex flex-col items-center gap-[14px] sm:g-ap-[16px] md:gap-[18px] pt-[20px]">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center w-[38px] h-[38px] bg-accent rounded-[8px] p-[10px] hover:bg-red-700 transition-colors">
                      <img 
                        src={product.socialIcons[0]} 
                        alt="Add to cart" 
                        className="w-[18px] h-[14px]"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-[12px] sm:gap-[14px] md:gap-[16px] w-full">
                    <div className="flex flex-col items-start gap-[2px] w-full">
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-tight text-white">
                        {product.name}
                      </h3>
                      <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-tight text-accent font-semibold">
                        {product.price}
                      </p>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-white-50 w-full text-left">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="w-full bg-primary py-[60px] sm:py-[70px] md:py-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[40px] sm:gap-[48px] md:gap-[54px] items-center">
            <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] items-start">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-tight text-accent">
                Trusted by Drivers Everywhere
              </p>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-white">
                Quality Bike Parts You Can Count On
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[60px] sm:gap-[80px] md:gap-[120px] lg:gap-[156px] w-full">
              {brandLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.src} 
                  alt={`Brand logo ${index + 1}`}
                  className="h-auto"
                  style={{ width: `${logo.width * 0.85}px`, maxWidth: `${logo.width}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;