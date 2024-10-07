"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaHome } from "react-icons/fa";
import FormComponent from "@/components/dashboard/ShippingAddressForm/ShippingAddressForm";

const ShippingAddress = () => {
  // Initial form data for each tab
  const home1Data = {
    city: "Dhaka",
    area: "Bashundhara r/a",
    houseNumber: "D-263",
    roadNumber: "8",
    flatNumber: "D-263",
    post: "Dhaka",
  };

  const home2Data = {
    city: "Chittagong",
    area: "Pahartali",
    houseNumber: "C-123",
    roadNumber: "12",
    flatNumber: "C-123",
    post: "Chittagong",
  };

  const home3Data = {
    city: "Sylhet",
    area: "Zindabazar",
    houseNumber: "S-789",
    roadNumber: "5",
    flatNumber: "S-789",
    post: "Sylhet",
  };

  // Function to handle form submission for Home 1, 2, and 3
  const handleSubmit = (formData, home) => {
    console.log(`Form submitted for ${home}:`, formData);
  };

  return (
    <div>
      <Tabs defaultValue="home1" className="w-full">
        <TabsList className="space-x-2">
          <TabsTrigger
            value="home1"
            className="py-6 px-10 rounded-sm flex items-center gap-3 border border-gray-400"
          >
            <FaHome className="text-3xl text-gray-400 " />
            <h1>Home 1</h1>
          </TabsTrigger>
          <TabsTrigger
            value="home2"
            className="py-6 px-10 rounded-sm flex items-center gap-3 border border-gray-400"
          >
            <FaHome className="text-3xl text-gray-400 " />
            <h1>Home 2</h1>
          </TabsTrigger>
          <TabsTrigger
            value="home3"
            className="py-6 px-10 rounded-sm flex items-center gap-3 border border-gray-400"
          >
            <FaHome className="text-3xl text-gray-400 " />
            <h1>Home 3</h1>
          </TabsTrigger>
        </TabsList>

        {/* Tabs content */}
        <div className="mt-20 ">
          <TabsContent value="home1">
            <FormComponent
              initialData={home1Data}
              onSubmit={(formData) => handleSubmit(formData, "Home 1")}
            />
          </TabsContent>
          <TabsContent value="home2">
            <FormComponent
              initialData={home2Data}
              onSubmit={(formData) => handleSubmit(formData, "Home 2")}
            />
          </TabsContent>
          <TabsContent value="home3">
            <FormComponent
              initialData={home3Data}
              onSubmit={(formData) => handleSubmit(formData, "Home 3")}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ShippingAddress;
