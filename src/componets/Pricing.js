import React from 'react';

const PricingCard = ({ title, price, bgColor, features }) => (
  <div className={`mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl ${bgColor} p-6 text-gray-900 xl:p-8`}>
    <h3 className="text-lg font-normal">{title}</h3>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">${price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <p className="font-light text-gray-600 sm:text-sm">Best option for personal use & for your next project.</p>
    <a
      className="cursor-pointer bg-gray-900 w-full rounded-md p-3 text-center text-sm font-semibold text-white shadow-sm hover:-translate-y-1"
    >
      Get started
    </a>
    <ul role="list" className="mb-8 space-y-4 text-left text-gray-600 text-sm">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  const pricingOptions = [
    {
      title: 'Basic',
      price: '29',
      bgColor: 'bg-white border border-gray-200',
      features: ['10,000 visitors', 'Unlimited widgets', 'All analytics features', 'Priority support', 'Lifetime updates'],
    },
    {
      title: 'Essential',
      price: '49',
      bgColor: 'bg-[#D8FA6D]',
      features: ['10,000 visitors', 'Unlimited widgets', 'All analytics features', 'Priority support', 'Lifetime updates'],
    },
    {
      title: 'Growth',
      price: '79',
      bgColor: 'bg-[#DCA6F3] text-center',
      features: ['10,000 visitors', 'Unlimited widgets', 'All analytics features', 'Priority support', 'Lifetime updates'],
    },
  ];

  return (
    <div className="flex items-center justify-center bg-[#000]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md lg:mb-12 text-center">
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-white">Pay once, use forever</h2>
        </div>
        <div className="space-y-8 lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
