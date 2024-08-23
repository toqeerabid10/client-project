import React from 'react';

const Navbar = () => (
  <nav className="navbar bg-white w-full flex items-center p-6 shadow-md fixed top-0 ml-64">
    <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
      <div className="flex items-center">
        <span className="ml-4 text-lg font-semibold"></span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-500"></a>
        <a href="#" className="text-gray-600 hover:text-blue-500"></a>
        <a href="#" className="text-gray-600 hover:text-blue-500"></a>
        <a href="#" className="text-gray-600 hover:text-blue-500"></a>
      </div>
    </div>
  </nav>
);

export default Navbar;
