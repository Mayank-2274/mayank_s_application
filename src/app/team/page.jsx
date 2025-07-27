'use client';
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ChipView from '../../components/ui/ChipView';
const TeamPage = () => {
  const chipItems = [
    { label: 'All' },
    { label: 'Brake Repair' },
    { label: 'Transmission Repair' },
    { label: 'Suspension Repair' },
    { label: 'Oil Change' },
    { label: 'Tune-Ups' }
  ];
  const teamMembers = [
    {
      id: 1,
      name: 'John Carter',
      position: 'Lead Technician',
      description: 'With over 15 years of experience in automotive repair, John is the master behind many of our most complex projects.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 2,
      name: 'Eva Lee',
      position: 'Customer Service Manager',
      description: 'Sarah ensures that every customer interaction is smooth and positive. With a background in customer relations and a genuine love for cars',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 3,
      name: 'Emily Davis',
      position: 'Quality Control Specialist',
      description: 'Emily ensures that every vehicle that leaves our shop is in top condition. With a keen eye for detail, she oversees our quality control process.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 4,
      name: 'David King',
      position: 'Head of Operation',
      description: 'David oversees the daily operations at FixinMoto, making sure everything runs smoothly from the front desk to the garage.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 5,
      name: 'Marcus Turner',
      position: 'Senior Technician',
      description: 'A skilled and trusted technician with 20 years of experience, Marcus is known for his expertise in engine diagnostics and complex repairs.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 6,
      name: 'Roberto Clark',
      position: 'Brake & Suspension Technician',
      description: 'Roberto is our dedicated brake and suspension technician. He focuses on maintaining and repairing braking systems, shocks, struts.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 7,
      name: 'Ernie Turner',
      position: 'Electrical Systems Technician',
      description: 'Ernie specializes in diagnosing and repairing electrical issues, from complex wiring problems to malfunctioning lighting and battery systems.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    },
    {
      id: 8,
      name: 'Luke Daniels',
      position: 'Transmission Specialist',
      description: 'With a keen eye for detail, Luke is our transmission specialist, providing expert services for both manual and automatic transmissions.',
      image: '/images/img_image_638x618.png',
      socialIcons: [
        '/images/img_vector_white_a700_14x18.svg',
        '/images/img_frame.svg',
        '/images/img_frame_white_a700.svg',
        '/images/img_frame_white_a700_40x42.svg'
      ]
    }
  ];
  const brandLogos = [
    { src: '/images/img_group_3.svg', width: 176, height: 80 },
    { src: '/images/img_logo.svg', width: 88, height: 80 },
    { src: '/images/img_logo_white_a700.svg', width: 80, height: 80 },
    { src: '/images/img_logo_white_a700_56x146.svg', width: 146, height: 56 },
    { src: '/images/img_logo_88.svg', width: 78, height: 80 }
  ];
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Hero Section with Header */}
      <section 
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <Header />
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32 text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-semibold leading-tight mb-[75px] sm:mb-[100px] md:mb-[125px] lg:mb-[150px]">
              <span className="text-accent">Passionate</span>
              <span className="text-white"> Experts at Your </span>
              <span className="text-accent">Service</span>
            </h1>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="w-full bg-secondary py-[53px] sm:py-[70px] md:py-[85px] lg:py-[106px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] mb-[60px] sm:mb-[70px] md:mb-[80px]">
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-white">
              Meet Our Team
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white-50 max-w-[56%]">
              Get to know the skilled individuals behind FixinMoto who combine expertise, passion, and a commitment to quality service for every customer.
            </p>
          </div>
          {/* Filter Chips */}
          <div className="flex justify-center mb-[64px] sm:mb-[80px] md:mb-[96px] lg:mb-[128px]">
            <div className="w-[80%]">
              <ChipView 
                items={chipItems}
                selectedIndex={0}
                className="justify-center"
              />
            </div>
          </div>
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-[24px] mb-1">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                {/* Member Image */}
                <div className="w-full mb-[-20px] relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[296px] object-cover rounded-[14px]"
                  />
                </div>
                {/* Member Info Card */}
                <div className="w-full bg-transparent flex flex-col items-center gap-[14px] sm:gap-[16px] md:gap-[18px] pt-[20px]">
                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-[38px] h-[38px] bg-accent rounded-[8px] p-[10px]">
                      <img 
                        src={member.socialIcons[0]} 
                        alt="" 
                        className="w-[18px] h-[14px]"
                      />
                    </div>
                    {member.socialIcons.slice(1).map((icon, index) => (
                      <button 
                        key={index}
                        className="flex items-center justify-center w-[42px] h-[40px] bg-accent rounded-[8px] p-[10px] hover:bg-red-700 transition-colors"
                      >
                        <img 
                          src={icon} 
                          alt="" 
                          className="w-[22px] h-[20px]"
                        />
                      </button>
                    ))}
                  </div>
                  {/* Member Details */}
                  <div className="flex flex-col items-center gap-[12px] sm:gap-[14px] md:gap-[16px] w-full">
                    <div className="flex flex-col items-start gap-[2px] w-full">
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-tight text-white">
                        {member.name}
                      </h3>
                      <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-tight text-white-80">
                        {member.position}
                      </p>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-white-50 w-full text-left">
                      {member.description}
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
            {/* Section Header */}
            <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] items-start">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-tight text-accent">
                Trusted by Drivers Everywhere
              </p>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-white">
                Quality Car Repair You Can Count On
              </h2>
            </div>
            {/* Brand Logos */}
            <div className="flex flex-wrap justify-center items-center gap-[60px] sm:gap-[80px] md:gap-[120px] lg:gap-[156px] w-full">
              {brandLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.src} 
                  alt={`Brand logo ${index + 1}`}
                  className={`w-[${Math.round(logo.width * 0.7)}px] sm:w-[${Math.round(logo.width * 0.85)}px] md:w-[${logo.width}px] h-auto`}
                  style={{
                    width: `${Math.round(logo.width * 0.7)}px`,
                    maxWidth: `${logo.width}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default TeamPage;