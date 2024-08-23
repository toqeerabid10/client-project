'use client';

import React, { useState } from 'react';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      title: 'Free Trial',
      description: 'Description of your Basic plan',
      price: '$0',
      features: [
        'Basic Reporting',
        'Up to 20 users',
        '1GB for each user',
        'Chat Support',
      ],
      buttonLabel: 'Get Started',
      badge: '7 days',
    },
    {
      title: 'Email Reach',
      description: 'Description of your Pro plan',
      price: '$49',
      features: [
        'Advanced Reporting',
        'Up to 50 users',
        '5GB for each user',
        'Chat and Phone Support',
      ],
      buttonLabel: 'Get Started',
      badge: 'Up to 20 users',
    },
    {
      title: 'All-In',
      description: 'Description of your Premium plan',
      price: 'Contact us',
      features: [
        'Advanced Reporting',
        'Unlimited users',
        '50GB for each user',
        'Account Manager',
      ],
      buttonLabel: 'Contact us',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between space-x-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handlePlanClick(index)}
              className={`w-full max-w-[320px] p-4 bg-white rounded-lg shadow-md cursor-pointer border ${
                selectedPlan === index ? 'border-blue-500' : 'border-gray-200'
              } transition-all transform hover:scale-105`}
            >
              {plan.badge && (
                <div className="flex justify-between items-center mb-4">
                  <span className={`bg-blue-500 text-white rounded-full px-2 py-1 text-sm ${selectedPlan === index ? 'text-white' : ''}`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <h2 className="text-xl font-bold mb-2 text-center">{plan.title}</h2>
              <p className="text-gray-500 mb-4 text-center">{plan.description}</p>
              <p className="text-3xl font-bold mb-6 text-center">
                {plan.price} <span className="text-base font-medium">{plan.price !== 'Contact us' && '/Monthly'}</span>
              </p>
              <ul className="text-gray-500 space-y-2 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-2 ${selectedPlan === index ? 'text-blue-500' : 'text-gray-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  className={`w-full py-2 rounded-lg transition-colors ${
                    selectedPlan === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
                  }`}
                >
                  {plan.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-gray-500">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
