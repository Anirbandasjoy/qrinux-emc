/* eslint-disable @next/next/no-img-element */
import React from "react";

const Dashboard = () => {
  return (
    <div className=" bg-white shadow-sm rounded-sm p-6 mt-6">
      {/* Profile Picture Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://i.ibb.co.com/SJXxLxx/104755593.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <button className="text-blue-600 underline font-semibold text-sm">
          Change Profile Picture
        </button>
      </div>

      {/* Form Section */}
      <form className="mt-6 space-y-4">
        {/* User Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-[16px] font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your username"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-4 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-[16px] font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-4 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[16px] font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-4 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-9 py-4 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
