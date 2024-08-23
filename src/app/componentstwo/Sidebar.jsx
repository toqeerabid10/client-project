"use client";

import React from 'react';
import { FaHome, FaListAlt, FaEnvelope, FaSearch, FaBook, FaPhone } from 'react-icons/fa';

const Sidebar = ({ onMenuClick }) => (
  <div className="sidebar w-72 bg-white h-screen p-4 fixed top-0 left-0 overflow-y-auto">
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="logo mb-6">
          <img src="/logo.png" alt="Logo" className="mb-4 w-24 mx-auto" />
          <hr className="border-t-2 border-gray-300 mb-4" />
        </div>

        <div className="menu mb-6">
          <div
            className="menu-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800"
        
          >
            <FaHome className="mr-3" />
            <span>Home</span>
            <button className="ml-auto text-xs text-blue-600 border border-blue-600 rounded px-2 py-1">New</button>
          </div>
          <div
            className="menu-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={() => onMenuClick('list')}
          >
            <FaListAlt className="mr-3" />
            <span>Lists</span>
          </div>
          <hr className="border-t-2 border-gray-300 mb-4" />
        </div>

        <div className="search mb-6">
          <p className="text-gray-500 text-xs mb-4">SEARCH</p>
          <div className="search-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaEnvelope className="mr-3" />
            <span>Email Search</span>
          </div>
          <div className="search-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaSearch className="mr-3" />
            <span>Niche Search</span>
            <button className="ml-auto text-xs text-gray-600 border border-gray-600 rounded px-2 py-1">Upgrade</button>
          </div>
          {/* Additional search items here */}
          <hr className="border-t-2 border-gray-300 mb-4" />
        </div>

        <div className="support mb-6">
          <p className="text-gray-500 text-xs mb-4">SUPPORT</p>
          <div className="support-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaBook className="mr-3" />
            <span>Docs</span>
          </div>
          <div className="support-item flex items-center mb-4 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaPhone className="mr-3" />
            <span>Help</span>
          </div>
          <hr className="border-t-2 border-gray-300 mb-4" />
        </div>
      </div>

      {/* Trial Limits Section */}
      <div className="trial-limits-section p-4 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-500 text-sm">TRIAL LIMITS</h3>
          <a href="#" className="text-xs text-blue-600">Usage</a>
        </div>
        <div className="trial-limit-item flex justify-between text-sm mb-2">
          <span>Email Search Credits (ES)</span>
          <span className="font-bold">2000</span>
        </div>
        <div className="trial-limit-item flex justify-between text-sm mb-2">
          <span>Email Export Credits (EO)</span>
          <span className="font-bold">1000</span>
        </div>
        <div className="trial-limit-item flex justify-between text-sm mb-4">
          <span>Niche Search Credits (NS)</span>
          <span className="font-bold">100</span>
        </div>
        <button className="border border-blue-600 text-blue-600 py-2 rounded-md w-full">
          Buy more credits
        </button>
      </div>

      {/* $49 and You asked, we listened Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg text-center mb-4">
        <p className="text-2xl font-bold mb-2">$49</p>
        <p className="text-lg">You asked, we listened.</p>
      </div>

      {/* Trial End Section */}
      <div className="trial-end-section">
        <p>
          Your trial ends in:
          <span className="trial-end-highlight">7 days</span>
        </p>
        <button>Select a plan</button>
      </div>
    </div>
  </div>
);

export default Sidebar;
