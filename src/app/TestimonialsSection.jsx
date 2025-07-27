'use client';
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ishwaran',
      image: '/images/cust1.jpg',
      rating: '/images/img_vector_red_600.svg',
      text: 'For years, I\'ve trusted my car to FixinMoto, and they\'ve never let me down. The staff is not only friendly but also incredibly knowledgeable, taking the time to walk me through every repair. I wholeheartedly recommend them to anyone in need of dependable auto repair services.'
    },
    {
      id: 2,
      name: 'Ankit Srivastava',
      image: '/images/cust2.jpg',
      rating: '/images/img_vector_red_600.svg',
      text: 'When I faced a sudden issue with my vehicle, FixinMoto managed to fit me in for an appointment on the same day. Their team quickly diagnosed the problem and had my car back on the road in no time. I truly appreciated their prompt and effective service.'
    },
    {
      id: 3,
      name: 'Ritik Agrawal',
      image: '/images/cust3.jpg',
      rating: '/images/img_vector_red_600.svg',
      text: 'I encountered an urgent problem with my vehicle and was fortunate to secure a same-day appointment at FixinMotopair. The staff swiftly identified the issue and got my car running again in no time. Their quick and efficient service was greatly appreciated.'
    }
  ];

  return (
    <section className="w-full bg-secondary relative">
      {/* Background Section */}
      <div className="w-full bg-secondary py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm sm:text-lg text-white-50 mb-4">Testimonials</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              <div className="lg:col-span-2">
                <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-medium leading-tight">
                  <span className="text-white">What Drivers Are Saying About </span>
                  <span className="text-accent">Synergy</span>
                </h2>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="relative">
        <div className="bg-accent rounded-t-3xl pt-12 sm:pt-16 pb-12 sm:pb-16">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Testimonials Grid */}
                <p className="text-sm sm:text-base text-white-80 leading-relaxed">
                  Read what our satisfied customers have to say about our products and services
                </p>
            <div className="flex gap-5 overflow-x-auto pb-6 mb-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[492px]">
                  <div className="bg-neutral rounded-2xl p-8 sm:p-12 h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-8">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-[80px] sm:w-[100px] md:w-[116px] h-[80px] sm:h-[100px] md:h-[116px] rounded-lg object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 mb-8">
                        <p className="text-sm sm:text-base text-primary-75 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-secondary">
                          {testimonial.name}
                        </h4>
                        <img 
                          src={testimonial.rating} 
                          alt="5 star rating"
                          className="w-20 sm:w-24 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4">
              <button className="p-2 hover:opacity-80 transition-opacity">
                <img 
                  src="/images/img_vector_white_a700.svg" 
                  alt="Previous" 
                  className="w-9 h-6"
                />
              </button>
              <button className="p-2 hover:opacity-80 transition-opacity">
                <img 
                  src="/images/img_vector_white_a700_26x36.svg" 
                  alt="Next" 
                  className="w-9 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;