'use client';

import React from 'react';

const CompleteStep = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xl">
       
        <div className="bg-white shadow-md rounded-lg p-10">
          <div className="flex justify-between mb-8">
            <span className="text-gray-500">1. Team</span>
            <span className="text-gray-500">2. Invites</span>
            <span className="text-gray-500">3. Plans</span>
            <span className="text-blue-600 border-b-2 border-blue-600">4. Complete</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-center mb-8">
              You're all set! You can now start using the app. 🎉
            </p>
            <button
              className="bg-white text-blue-600 border border-blue-600 py-2 px-6 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={() => alert('Continue to your Dashboard')}
            >
              Continue to your Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteStep;
