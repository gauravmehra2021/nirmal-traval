"use client";
import { posts } from '@/common/constant';
import FooterComponent from '@/componets/FooterComponent';
import HeaderComponent from '@/componets/HeaderComponent';
import React from 'react';

const BlogPage = () => {


  return (
    <>
    <HeaderComponent />
    <section className="bg-white dark:bg-gray-900">
      {/* Title Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Discover New Adventures</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Explore, discover, and find inspiration through these exciting journeys.</p>
      </div>

      {/* Content Section */}
      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="relative">
              <a href={`/blog/${post.title}`} className="block overflow-hidden group rounded-xl shadow-lg">
                <img src={post.imgSrc} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure" />
              </a>
              <div className="relative mt-5">
                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">{post.date}</p>
                <a href="#" className="block mb-3 hover:underline">
                  <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                    {post.title}
                  </h2>
                </a>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{post.description}</p>
                <a href="#_" className="font-medium underline text-purple-600 dark:text-purple-400">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <FooterComponent />
     </>
  );
};

export default BlogPage;
