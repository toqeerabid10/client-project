import React from 'react';

const EmailVerificationForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Lead Reach</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold text-center mb-4">Create an account</h2>

        {/* Google Sign-In Button */}
        <button className="flex items-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full text-center font-medium mb-4">
          <img src="/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
          <span className="flex-1 text-center">Sign in with Google</span>
        </button>

        <div className="text-center text-gray-500 mb-2">or continue with email</div>

        {/* Email Verification Message */}
        <div className="bg-green-100 text-green-600 py-2 px-4 rounded-lg mb-4 text-center border border-green-600">
          <div className="flex items-center justify-center">
            <img src="/tick-icon.png" alt="Tick Icon" className="w-4 h-4 mr-2" />
            <p className="font-bold">We sent you a confirmation email.</p>
          </div>
          <p className="text-sm mt-1">Please check your email and click the link to verify your account.</p>
        </div>

        <div className="text-center text-gray-600">
          Already have an account? <a href="/signin" className="text-blue-600">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
