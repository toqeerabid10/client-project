// src/app/components/Pricing.jsx
import React from 'react';

const Pricing = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">Free Trial</h2>
                    <p className="text-gray-600">$0 / Monthly</p>
                    <p className="mt-2">Description of your Basic plan</p>
                    <ul className="my-4 text-left">
                        <li>Basic Reporting</li>
                        <li>Up to 20 users</li>
                        <li>1GB for each user</li>
                        <li>Chat Support</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">Email Reach</h2>
                    <p className="text-gray-600">$49 / Monthly</p>
                    <p className="mt-2">Description of your Pro plan</p>
                    <ul className="my-4 text-left">
                        <li>Advanced Reporting</li>
                        <li>Up to 50 users</li>
                        <li>5GB for each user</li>
                        <li>Chat and Phone Support</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold">All-In</h2>
                    <p className="text-gray-600">Contact us</p>
                    <p className="mt-2">Description of your Premium plan</p>
                    <ul className="my-4 text-left">
                        <li>Advanced Reporting</li>
                        <li>Unlimited users</li>
                        <li>50GB for each user</li>
                        <li>Account Manager</li>
                    </ul>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
