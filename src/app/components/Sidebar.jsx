import React from 'react';
import { FaHome, FaListAlt, FaEnvelope, FaSearch, FaBook, FaPhone } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar w-64 bg-white h-screen p-4 fixed top-0 left-0 overflow-y-auto">
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="logo mb-6">
<<<<<<< HEAD
          <img src="/logo.png" alt="Logo" className="mb-4" />
=======
          <img src="/path/to/logo.png" alt="Logo" className="mb-4" />
>>>>>>> c9c4064a22fa09cd21ac4d22ba16e120a9e5d7e2
          <hr className="border-t-2 border-gray-300 mb-2" />
          
        </div>

        <div className="menu mb-6">
          <div className="menu-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaHome className="mr-3" />
            <span>Home</span>
          </div>
          <div className="menu-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaListAlt className="mr-3" />
            <span>Lists</span>
          </div>
          <hr className="border-t-2 border-gray-300 mb-2" />
          <p className="text-gray-500 text-xs">Search</p> {/* Text below the line */}
        </div>

        <div className="search mb-6">
          <div className="search-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaEnvelope className="mr-3" />
            <span>Email Search</span>
          </div>
          <div className="search-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaSearch className="mr-3" />
            <span>Niche Search</span>
            <button className="ml-auto text-xs text-blue-600 border border-blue-600 rounded px-2 py-1">Upgrade</button> {/* Upgrade Button */}
          </div>
          <hr className="border-t-2 border-gray-300 mb-2" />
          <p className="text-gray-500 text-xs">Support</p> {/* Text below the line */}
        </div>

        <div className="support mb-6">
          <div className="support-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaBook className="mr-3" />
            <span>Docs</span>
          </div>
          <div className="support-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaPhone className="mr-3" />
            <span>Help</span>
          </div>
          <div className="support-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaPhone className="mr-3" />
            <span>Book a Call</span>
          </div>
          <hr className="border-t-2 border-gray-300 mb-2" />
          
        </div>
      </div>

      {/* Trial Limits Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-500 text-sm">TRIAL LIMITS</h3>
          <a href="#" className="text-xs text-blue-600">Usage</a>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Email Credits (ES)</span>
          <span className="font-bold">2000</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span>Niche Search Credits (NS)</span>
          <span className="font-bold">100</span>
        </div>
        <button className="border border-blue-600 text-blue-600 py-2 rounded-md w-full">
          Buy more credits
        </button>
      </div>

      {/* Trial End Section */}
      <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
        <p>Your trial ends in:</p>
        <div className="flex justify-center items-center mb-2">
          <span className="bg-white text-blue-900 text-xs font-semibold py-1 px-2 rounded-full">7 days</span>
        </div>
        <button className="bg-white text-blue-900 py-2 rounded-md w-full">
          Select a plan
        </button>
      </div>
    </div>
  </div>
);

export default Sidebar;

    </div>
  </div>
);

export default Sidebar;
