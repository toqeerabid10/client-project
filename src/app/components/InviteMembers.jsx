'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InviteMembers = () => {
  const [emails, setEmails] = useState([{ email: '', role: 'Member' }]);
  const router = useRouter();

  const addEmailField = () => {
    setEmails([...emails, { email: '', role: 'Member' }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...emails];
    if (event.target.name === 'email') {
      values[index].email = event.target.value;
    } else {
      values[index].role = event.target.value;
    }
    setEmails(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log(emails);
  };

  const handleSkip = () => {
    router.push('/some-other-page'); // Use router.push for navigation
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 rounded-lg shadow-md w-1/3 bg-transparent"> {/* Removed bg-white */}
        <h1 className="text-xl font-bold mb-2">Invite Members</h1>
        <p className="text-gray-600 mb-6">Invite your team members to join your organization</p>
        <form onSubmit={handleSubmit}>
          {emails.map((emailField, index) => (
            <div key={index} className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={emailField.email}
                onChange={(event) => handleInputChange(index, event)}
                className="w-full p-3 border border-gray-300 rounded mb-2 bg-transparent"
                required
              />
              <select
                name="role"
                value={emailField.role}
                onChange={(event) => handleInputChange(index, event)}
                className="w-full p-3 border border-gray-300 rounded bg-transparent"
              >
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          ))}
          <button
            type="button"
            onClick={addEmailField}
            className="text-blue-500 text-sm mb-6"
          >
            + Add another one
          </button>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-4 text-lg"
            >
              Continue
            </button>
            <button
              type="button"
              className="text-gray-500 text-sm"
              onClick={handleSkip}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteMembers;
