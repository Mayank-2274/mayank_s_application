'use client';

import React from 'react';
import Button from '../components/ui/Button';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Revving Up: The Future of Automotive Innovation',
      image: '/images/img_image_300x378.png',
      category: 'Category',
      readTime: '5 min read',
      date: 'December 29, 2024',
      author: 'Alex Johnson'
    },
    {
      id: 2,
      title: 'Driving Change: Trends Shaping the Automotive Industry',
      image: '/images/img_image_300x378.png',
      category: 'Category',
      readTime: '5 min read',
      date: 'December 12, 2024',
      author: 'Alex Johnson'
    },
    {
      id: 3,
      title: 'Under the Hood: Exploring the Latest in Automotive',
      image: '/images/img_image_300x378.png',
      category: 'Category',
      readTime: '5 min read',
      date: 'December 7, 2024',
      author: 'Alex Johnson'
    }
  ];

  return (
    <section className="w-full bg-primary py-12 sm:py-16 md:py-20 -mt-28 relative z-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-lg text-white-50 mb-4">Blog</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            <div className="lg:col-span-2">
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-tight">
                <span className="text-white">Rev Up Your Ride: The Latest in </span>
                <span className="text-accent">Automotive</span>
                <span className="text-white"> News and </span>
                <span className="text-accent">Insights</span>
              </h2>
            </div>
            <div>
              <p className="text-sm sm:text-base text-white-70 leading-relaxed">
                Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-light rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-4 sm:p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <Button size="sm" className="text-xs px-2 py-1">
                    {post.category}
                  </Button>
                  <span className="text-xs text-primary-80">
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-lg sm:text-xl font-medium text-primary leading-tight mb-4 line-clamp-2">
                  {post.title}
                </h3>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-primary">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/img_schedule.svg" 
                      alt="" 
                      className="w-4 h-4"
                    />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/img_account_circle.svg" 
                      alt="" 
                      className="w-4 h-4"
                    />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;