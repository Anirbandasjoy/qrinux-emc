import React from "react";
import { FaTruck, FaRegMoneyBillAlt, FaLock, FaPhoneAlt } from "react-icons/fa";

const Fecility = () => {
  return (
    <div className=" py-12 px-4 sm:px-0  container  mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-between ">
        {/* Free Shipping */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-sm shadow-md transition-transform transform hover:scale-105 cursor-pointer  h-64 w-full">
          <div>
            <FaTruck className="text-5xl mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-[16px] text-gray-600">Order above $200</p>
          </div>
        </div>

        {/* Money-back */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-sm shadow-md transition-transform transform hover:scale-105  cursor-pointer h-64 w-full">
          <div>
            <FaRegMoneyBillAlt className="text-5xl mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Money-back</h3>
            <p className="text-[16px] text-gray-600">30 days guarantee</p>
          </div>
        </div>

        {/* Secure Payments */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-sm shadow-md transition-transform transform hover:scale-105  cursor-pointer h-64 w-full">
          <div>
            <FaLock className="text-5xl mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-[16px] text-gray-600">Secured by Stripe</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-sm shadow-md transition-transform transform hover:scale-105 cursor-pointer h-64 w-full">
          <div>
            <FaPhoneAlt className="text-5xl mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-[16px] text-gray-600">Phone and Email support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fecility;
