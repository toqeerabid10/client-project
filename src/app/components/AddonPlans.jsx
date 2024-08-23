'use client';
// components/AddonPlans.jsx

import { useState } from 'react';
import { EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function AddonPlans() {
  const [activePlan, setActivePlan] = useState('emailSearch');

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="space-x-8 flex">
        
        {/* Email Search Card */}
        <div className={`bg-white p-8 rounded-lg shadow-md w-[450px] ${activePlan === 'emailSearch' ? 'border border-blue-500' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <EnvelopeIcon className="h-6 w-6 text-gray-500" />
            <div className={`w-24 text-center flex items-center justify-center`}>
              <span className={`font-semibold px-2 py-1 rounded-sm border ${activePlan === 'emailSearch' ? 'border-green-500 text-green-500' : 'border-gray-500 text-gray-500'}`}>
                {activePlan === 'emailSearch' ? 'Active' : 'INACTIVE'}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email Search</h2>
            <p className="text-gray-500">$49 <span className="text-sm">/month</span></p>
          </div>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ For 100 credits</li>
            <li>✔ Research officiants</li>
          </ul>
          <button 
            className={`w-full mt-8 py-3 px-5 rounded-lg ${activePlan === 'emailSearch' ? 'bg-blue-500 text-white' : 'bg-white border border-blue-500 text-blue-500'}`}
            onClick={() => handlePlanClick('emailSearch')}
          >
            Current Plan
          </button>
          <p className="text-center text-black mt-3">Buy Additional Credits</p>
        </div>
        
        {/* Niche Search Card */}
        <div className={`bg-white p-8 rounded-lg shadow-md w-[450px] ${activePlan === 'nicheSearch' ? 'border border-blue-500' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <div className={`w-24 text-center flex items-center justify-center`}>
              <span className={`font-semibold px-2 py-1 rounded-sm border ${activePlan === 'nicheSearch' ? 'border-green-500 text-green-500' : 'border-gray-500 text-gray-500'}`}>
                {activePlan === 'nicheSearch' ? 'Active' : 'INACTIVE'}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Niche Search</h2>
            <p className="text-gray-500">$49 <span className="text-sm">/month</span></p>
          </div>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ For 10 search credits</li>
            <li>✔ Research officiants</li>
          </ul>
          <button 
            className={`w-full mt-8 py-3 px-5 rounded-lg ${activePlan === 'nicheSearch' ? 'bg-blue-500 text-white' : 'bg-white border border-blue-500 text-blue-500'}`}
            onClick={() => handlePlanClick('nicheSearch')}
          >
            Current Plan
          </button>
          <p className="text-center text-black mt-3">Buy Additional Credits</p>
        </div>

      </div>
    </div>
  );
}
