import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Lead Reach</h1>

      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
        
        {/* Google Sign-Up Button */}
        <button className="flex items-center bg-white border border-gray-300 text-gray-600 py-2 px-4 rounded-lg w-full mb-4">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          <span className="flex-1 text-center">Sign up with Google</span>
        </button>
        
        <div className="text-center text-gray-500 mb-4">or continue with email</div>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="border border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Ensure it's at least 6 characters"
              className="border border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Repeat password</label>
            <input
              type="password"
              placeholder="Type your password again"
              className="border border-gray-300 p-2 rounded-lg w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg w-full font-bold"
          >
            Get started
          </button>
        </form>
        
        <div className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/signin" className="text-blue-600">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
