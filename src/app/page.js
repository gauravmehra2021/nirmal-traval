// App.js
"use client";
import React from 'react';
import { Layout, Card } from 'antd';
import { cardData, posts } from '@/common/constant';
import FooterComponent from '@/componets/FooterComponent';
import HeaderComponent from '@/componets/HeaderComponent';
const { Content } = Layout;
const { Meta } = Card;

const App = () => (
  <Layout>

    <HeaderComponent />
    <Content
      style={{
        padding: '0 25px',
      }}
    >
      <div>
        <div className="mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {posts.map((post, index) => (
              <div key={index} className="relative">
                <a href={`/blog/${post.title}`} className="block overflow-hidden group rounded-xl shadow-lg">
                  <img src={post.imgSrc} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure" />
                </a>

                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Cooking
                  </div>
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
        <div className="h-screen bg-gray-100 p-10">
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-8">
                <h3 className="text-3xl font-bold mb-4 text-purple-600">Basic</h3>
                <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="text-5xl font-bold mb-8 text-purple-600">$19</h2>
                <a href="#"
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-purple-700 transition duration-300 ease-in-out">Buy
                  Now</a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-8">
                <h3 className="text-3xl font-bold mb-4 text-green-600">Premium</h3>
                <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="text-5xl font-bold mb-8 text-green-600">$49</h2>
                <a href="#"
                  className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-700 transition duration-300 ease-in-out">Buy
                  Now</a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-8">
                <h3 className="text-3xl font-bold mb-4 text-yellow-600">Pro</h3>
                <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className="text-5xl font-bold mb-8 text-yellow-600">$99</h2>
                <a href="#"
                  className="bg-yellow-600 text-white py-2 px-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-300 ease-in-out">Buy
                  Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>

    <FooterComponent />
  </Layout>
);

export default App;



