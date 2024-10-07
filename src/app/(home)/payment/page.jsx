/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("Pay now");

  return (
    <div className="bg-[#f3f5f7] h-screen pt-28">
      <div className="container mx-auto ">
        <div className="flex gap-1 mb-6 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center">
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/"
          >
            Home
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/cart"
          >
            Cart
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/payment"
          >
            Payment
          </Link>
          <MdOutlineKeyboardArrowRight />
        </div>
        <div className=" p-7 rounded-sm bg-white">
          {/* Payment Option */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium mb-4">Payment Method</h2>
            <div className="flex items-center gap-6">
              <label className="flex items-center text-[18px] font-medium">
                <input
                  type="radio"
                  name="payment_option"
                  value="Pay now"
                  checked={selectedMethod === "Pay now"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="mr-2"
                />
                Pay now
              </label>
              <label className="flex items-centerf text-[18px] font-medium">
                <input
                  type="radio"
                  name="payment_option"
                  value="Cash on delivery"
                  checked={selectedMethod === "Cash on delivery"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="mr-2"
                />
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Payment Methods */}
          <div className=" flex justify-between items-center gap-2 mt-12 ">
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input type="radio" name="payment_method" className="mr-2" />
                Bank Transfer
              </label>
              <div className="w-full h-28">
                <img
                  src="https://i.ibb.co.com/t4B2LGb/14d89b96f26a4c7d88eafad5201f500b.png"
                  alt="Bank Transfer"
                  className="ml-2 w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input type="radio" name="payment_method" className="mr-2" />
                Credit Card
              </label>
              <div className="flex gap-4">
                <div className="w-full h-28">
                  <img
                    src="https://i.ibb.co.com/3zpqprQ/26e4398b17d4bffbb55bcc0912a23036.png"
                    alt="Bank Transfer"
                    className="ml-2 w-full h-full"
                  />
                </div>
                <div className="w-full h-28">
                  <img
                    src="https://i.ibb.co.com/KGBYhGT/10197414005523a56d0410a9b3ef3b6d.png"
                    alt="Bank Transfer"
                    className="ml-2 w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input type="radio" name="payment_method" className="mr-2" />
                bKash
              </label>
              <div className="w-full h-28">
                <img
                  src="https://i.ibb.co.com/JBZ5j6Q/9dee3f0346b57b7cac6c2ea81fe6c032.png"
                  alt="Bank Transfer"
                  className="ml-2 w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input type="radio" name="payment_method" className="mr-2" />
                Rocket
              </label>
              <div className="w-full h-28">
                <img
                  src="https://i.ibb.co.com/xmWRrLb/d3a4c1435862baf11dbe9939259c67df.png"
                  alt="Bank Transfer"
                  className="ml-2 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-14">
          <Button className="rounded-sm px-11 py-6">Proceed Payment</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
