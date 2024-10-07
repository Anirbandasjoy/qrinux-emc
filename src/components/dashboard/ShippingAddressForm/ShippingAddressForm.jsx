"use client";
import React, { useState } from "react";

const FormComponent = ({ initialData, onSubmit }) => {
  // Initialize state with initialData
  const [formData, setFormData] = useState(initialData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call onSubmit function with form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Area, Village</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>House Number</label>
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Road Number</label>
          <input
            type="text"
            name="roadNumber"
            value={formData.roadNumber}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Flat Number</label>
          <input
            type="text"
            name="flatNumber"
            value={formData.flatNumber}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Post</label>
          <input
            type="text"
            name="post"
            value={formData.post}
            onChange={handleChange}
            className="block w-full px-4 py-4 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-6 px-10 py-4 bg-black text-white ml-auto rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
