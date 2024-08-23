"use client"; // This marks the component as a client component

import React, { useState } from 'react';
import CreateListModal from './createList.jsx';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="header bg-gray-100 p-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="header-title text-xl font-bold">Lists</div>
      <div className="search-and-create flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={openModal}
        >
          Create List
        </button>
      </div>
      <CreateListModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Header;