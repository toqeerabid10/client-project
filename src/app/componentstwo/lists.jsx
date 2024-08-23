"use client";

import React, { useState } from "react";
import { FaEllipsisV, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai"; // Icon for modal

export default function List() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = (event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({ top: rect.bottom + 10, left: rect.left - 60 });
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "Delete") {
      setIsModalOpen(true); // Show modal on delete click
    }
    setIsDropdownOpen(false); // Close dropdown after an option is clicked
  };

  const handleDeleteConfirm = () => {
    console.log("List Deleted");
    setIsModalOpen(false); // Close modal after confirmation
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false); // Close modal without deleting
  };

  return (
    <div className="flex">
      <div className="ml-72 p-6 w-full mt-5">
        <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">No.</th>
                <th className="py-3 px-6 text-left">List Name</th>
                <th className="py-3 px-6 text-center">Size</th>
                <th className="py-3 px-6 text-center">Created on</th>
                <th className="py-3 px-6 text-center">Last Updated</th>
                <th className="py-3 px-6 text-center">Progress</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">1</td>
                <td className="py-3 px-6 text-left text-blue-600">Business Development Manager</td>
                <td className="py-3 px-6 text-center">100,000</td>
                <td className="py-3 px-6 text-center">Jul 17, 2024</td>
                <td className="py-3 px-6 text-center">Jul 18, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-10 h-10 text-yellow-400">
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="none"
                        className="text-gray-300"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeDasharray="70, 100"
                        fill="none"
                        className="text-yellow-500"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-xs text-gray-700 font-semibold">70%</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-center relative">
                  <FaEllipsisV className="text-gray-600 cursor-pointer" onClick={toggleDropdown} />
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

          {isDropdownOpen && (
            <div
              className="fixed inset-0 flex items-center justify-end bg-gray-500 bg-opacity-50 z-50 mr-4"
              onClick={() => setIsDropdownOpen(false)}
            >
              <div
                className="bg-white rounded-lg shadow-lg p-4 w-48"
                style={{ top: dropdownPosition.top, right: "20px" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full"
                  onClick={() => handleOptionClick("Edit")}
                >
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button
                  className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full"
                  onClick={() => handleOptionClick("Add")}
                >
                  <FaPlus className="mr-2" /> Add
                </button>
                <button
                  className="flex items-center justify-start px-4 py-2 text-sm text-red-700 hover:bg-gray-200 w-full"
                  onClick={() => handleOptionClick("Delete")}
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Delete Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <div className="flex items-center justify-center mb-4">
              <AiOutlineDelete className="text-red-500 text-4xl" />
            </div>
            <h2 className="text-lg font-semibold text-center mb-4">Are you sure you want to delete this list?</h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              This action will remove "<strong>Account Executive</strong>" from the list.
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
