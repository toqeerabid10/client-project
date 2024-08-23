import React, { useState } from 'react';

const CreateListModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selected, setSelected] = useState('none');

  const handleButtonClick = (buttonType) => {
    setSelected(buttonType);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Create a new list</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">List Name</label>
            <input
              type="text"
              placeholder="Type the list name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-4 space-x-0.5">
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${selected === 'engaged' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleButtonClick('engaged')}
            >
              Engaged Leads
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${selected === 'campaign' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleButtonClick('campaign')}
            >
              Campaign Goal
            </button>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-sm font-medium text-gray-700">Set an Engaged Leads</label>
              <input
                type="text"
                placeholder="Enter campaign goal"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none"
                style={{ width: 'calc(100% - 2rem)' }}
              />
            </div>
            <div className="w-1/2 pl-2 flex items-center">
              <div className="bg-gray-100 p-4 rounded-md text-center text-xl" style={{ width: 'calc(100% + 2rem)' }}>
                {selected === 'engaged' ? (
                  <>
                    Campaign Goals <br /> <strong>100,000</strong>
                  </>
                ) : (
                  <>
                    Engaged Leads <br /> <strong>500</strong>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Projected Conversion Rate</label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                className="flex-grow"
                style={{ width: 'calc(100% - 2rem)' }}
              />
              <span>12%</span>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-200 text-black py-2 px-4 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateListModal;
