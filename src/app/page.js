// App.js
"use client";
import React from 'react';
import { Layout, Card } from 'antd';
import { cardData } from '@/common/constant';
import FooterComponent from '@/componets/FooterComponent';
import HeaderComponent from '@/componets/HeaderComponent';
const { Content } = Layout;
const { Meta } = Card;

const App = () => (
  <Layout>
    <HeaderComponent />
    <Content
      style={{
        padding: '0 48px',
      }}
    >
      <div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {cardData.map((item, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img className="w-full" src={item.imageUrl} alt={item.title} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {item.category}
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    {item.title}
                  </a>
                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">{item.timeAgo}</span>
                  </span>
                  <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">{item.comments} Comments</span>
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </Content>
    <FooterComponent />
  </Layout>
);

export default App;



