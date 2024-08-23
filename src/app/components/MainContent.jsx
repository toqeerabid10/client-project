import React from 'react';
import { FaUser, FaListAlt } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go'; 

const MainContent = () => (
  <div className="main-content flex-1 p-8 bg-gray-100 flex flex-col ml-64">
    <div className="welcome-section mb-6 mt-4 flex flex-col items-start max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-0">Welcome to Lead Reach 👋</h1>
      <p className="text-gray-600 mb-3 text-base">Let's show you around</p>
      <div className="feature-card bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg flex flex-col md:flex-row items-center shadow-lg">
        <div className="text-content flex-1 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Optimize with Lead Search</h2> {/* Font size increased */}
          <p className="mb-4 text-lg">
            Streamline lead generation through advanced search techniques to maximize efficiency and results.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-base font-semibold">
            Book your onboarding call →
          </button>
        </div>
        <img src="/path/to/image.png" alt="Feature Image" className="mt-4 md:mt-0 md:w-1/2 rounded-lg" />
      </div>
    </div>
    
    <div className="tools-section bg-gray-50 p-8 mb-8 max-w-5xl mx-auto rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Unlock your content’s full potential
      </h2>
      <p className="text-gray-500 mb-6 text-lg">
        Dive into our tools and explore the features
      </p>
      <div className="flex space-x-8">
        <div className="flex-1 bg-white p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaUser className="text-purple-600 text-xl" />
              <h3 className="text-lg font-medium text-purple-600">
                Search an email
              </h3>
            </div>
            <GoArrowUpRight className="text-gray-400 text-lg" />
          </div>
          <p className="text-gray-500 mt-4 text-md">
            Quickly find individuals with our 'Search a person' feature for accurate contact details and professional insights.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaListAlt className="text-green-600 text-xl" />
              <h3 className="text-lg font-medium text-green-600">
                Start an outreach list
              </h3>
            </div>
            <GoArrowUpRight className="text-gray-400 text-lg" />
          </div>
          <p className="text-gray-500 mt-4 text-md">
            Initiate your outreach efforts by creating a targeted list for effective communication and engagement.
          </p>
        </div>
      </div>
    </div>
    
    <footer className="footer bg-white w-full flex justify-center items-center p-4 shadow-md">
      <p className="text-gray-600 text-sm">
        © 2024 Lead Reach. All rights reserved.
      </p>
    </footer>
  </div>
);

export default MainContent;
