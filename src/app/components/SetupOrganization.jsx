'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SetupOrganization = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [members, setMembers] = useState([{ email: '', role: 'Member' }]); // State to manage members
  const router = useRouter();

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAddMember = () => {
    setMembers([...members, { email: '', role: 'Member' }]); // Add a new member input field
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setMembers(updatedMembers);
  };

  const handleSkipPlans = () => {
    // Skip to the complete step or any other action
    setActiveStep(4);
  };

  const plans = [
    {
      title: 'Free Trial',
      description: 'Description of your Basic plan',
      price: '$0',
      features: [
        'Basic Reporting',
        'Up to 20 users',
        '1GB for each user',
        'Chat Support',
      ],
      buttonLabel: 'Get Started',
      badge: '7 days',
    },
    {
      title: 'Email Reach',
      description: 'Description of your Pro plan',
      price: '$49',
      features: [
        'Advanced Reporting',
        'Up to 50 users',
        '5GB for each user',
        'Chat and Phone Support',
      ],
      buttonLabel: 'Get Started',
      badge: 'Up to 20 users',
    },
    {
      title: 'All-In',
      description: 'Description of your Premium plan',
      price: 'Contact us',
      features: [
        'Advanced Reporting',
        'Unlimited users',
        '50GB for each user',
        'Account Manager',
      ],
      buttonLabel: 'Contact us',
    },
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Setup Team</h2>
            <p className="text-gray-600 mb-6">Welcome! First, let's setup your Team.</p>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Team name</label>
              <input
                type="text"
                placeholder="Ex. Acme Inc."
                className="border border-gray-300 p-2 rounded-lg w-full"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => handleStepClick(2)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Invite Members</h2>
            <p className="text-gray-600 mb-4">Invite your team members to join your organization</p>
            {members.map((member, index) => (
              <div key={index} className="mb-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={member.email}
                  onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full mb-2"
                  required
                />
                <select
                  value={member.role}
                  onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full"
                >
                  <option>Member</option>
                  <option>Admin</option>
                </select>
              </div>
            ))}
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                onClick={handleAddMember}
                className="text-blue-600"
              >
                + Add another one
              </button>
            </div>
            <div className="text-center mb-4">
              <button
                type="button"
                onClick={() => handleStepClick(3)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => handleStepClick(3)}
                className="text-gray-500"
              >
                Skip
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-center w-full py-8">
            <div className="w-full max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => handlePlanClick(index)}
                    className={`p-4 rounded-lg shadow-md cursor-pointer border ${
                      selectedPlan === index ? 'border-blue-500' : 'border-gray-200'
                    } transition-transform transform hover:scale-105 max-w-xs`}
                    style={{ height: 'auto', maxWidth: '400px' }} // Adjust width and height if needed
                  >
                    {plan.badge && (
                      <div className="text-center mb-4">
                        <span className={`bg-blue-500 text-white rounded-full px-4 py-1 text-sm inline-block ${selectedPlan === index ? 'text-white' : ''}`}>
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <h2 className="text-xl font-bold mb-2 text-center">{plan.title}</h2>
                    <p className="text-gray-500 mb-4 text-center">{plan.description}</p>
                    <p className="text-3xl font-bold mb-6 text-center">
                      {plan.price} <span className="text-base font-medium">{plan.price !== 'Contact us' && '/Monthly'}</span>
                    </p>
                    <ul className="text-gray-500 space-y-2 mb-6 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className={`w-5 h-5 mr-2 ${selectedPlan === index ? 'text-blue-500' : 'text-gray-500'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center">
                      <button
                        className={`w-full py-2 rounded-lg transition-colors ${
                          selectedPlan === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
                        }`}
                      >
                        {plan.buttonLabel}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={handleSkipPlans} // Updated to use the handleSkipPlans function
                  className="text-gray-500"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center py-12">
            <div className="flex justify-center items-center mx-auto mb-6 h-20 w-20 rounded-full bg-green-500">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">You're all set!</h2>
            <p className="text-gray-600 mb-6">You can now start using the app. 🎉</p>
            <button
              type="button"
              onClick={() => router.push('/dashboard')} // Redirect to dashboard
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Continue to your Dashboard
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div
            onClick={() => handleStepClick(1)}
            className={`cursor-pointer py-2 text-center flex-1 font-bold ${
              activeStep === 1 ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500'
            }`}
          >
            1. Team
          </div>
          <div
            onClick={() => handleStepClick(2)}
            className={`cursor-pointer py-2 text-center flex-1 font-bold ${
              activeStep === 2 ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500'
            }`}
          >
            2. Invites
          </div>
          <div
            onClick={() => handleStepClick(3)}
            className={`cursor-pointer py-2 text-center flex-1 font-bold ${
              activeStep === 3 ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500'
            }`}
          >
            3. Plans
          </div>
          <div
            onClick={() => handleStepClick(4)}
            className={`cursor-pointer py-2 text-center flex-1 font-bold ${
              activeStep === 4 ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500'
            }`}
          >
            4. Complete
          </div>
        </div>
        {renderStepContent()}
      </div>
    </div>
  );
};

export default SetupOrganization;
