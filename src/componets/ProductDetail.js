import React from 'react';

const CoffeeProduct = () => {
  return (
    <div className="font-sans bg-gray-700">
      <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="bg-gray-800 px-4 py-12 rounded-xl">
              <img
                src="https://readymadeui.com/images/coffee2.webp"
                alt="Product"
                className="w-9/12 rounded object-cover mx-auto"
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
              {['coffee3.webp', 'coffee4.webp', 'coffee5.webp', 'coffee6.webp'].map((img, idx) => (
                <div
                  key={idx}
                  className="w-[90px] h-20 flex items-center justify-center bg-gray-800 rounded-xl p-4 cursor-pointer"
                >
                  <img
                    src={`https://readymadeui.com/images/${img}`}
                    alt={`Product ${idx + 2}`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-white">Espresso Elegante | Coffee</h2>

            <div className="flex space-x-2 mt-4">
              {[...Array(4)].map((_, idx) => (
                <svg key={idx} className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg className="w-[18px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-white text-base">500 Reviews</h4>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-white text-4xl font-semibold">$12</p>
              <p className="text-gray-400 text-base">
                <strike>$16</strike> <span className="text-sm ml-1">Tax included</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button type="button" className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">
                Buy now
              </button>
              <button type="button" className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded">
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">About the coffee</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
              </ul>
            </div>

            <div className="mt-8">
              <ul className="flex">
                <li className="text-white font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                  Reviews
                </li>
                <li className="text-white font-semibold text-sm py-3 px-8 cursor-pointer">Seller</li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">Reviews(10)</h3>
                {/* Review content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeProduct;
