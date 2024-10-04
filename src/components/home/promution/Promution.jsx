"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import promutionImage from "@/static/images/promutionImage.png";
import { useState, useEffect } from "react";

const Promution = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="bg-[#f3f5f7]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center  lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="space-y-3 text-center lg:text-left max-w-lg">
          <p className="text-[#377DFF] font-medium text-lg">PROMOTION</p>
          <h1 className="text-5xl font-medium">Hurry up! 40% OFF</h1>
          <h3 className="text-[20px]">
            Thousands of high tech products are waiting for you
          </h3>
          <div>
            <h2 className="text-sm mb-3">Offer expires in:</h2>
            {/* Countdown Timer */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {Object.keys(timeLeft).map((interval, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-semibold bg-white p-3 rounded-md shadow-md">
                    {timeLeft[interval] || "00"}
                  </div>
                  <p className="text-sm text-gray-600">
                    {interval.charAt(0).toUpperCase() + interval.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Button className="mt-6">Shop now</Button>
        </div>

        {/* Right Section (Image) */}
        <div className="max-w-xl w-full">
          <Image
            src={promutionImage}
            alt="Promotion"
            className="w-full h-auto"
            placeholder="blur"
            width={700}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Promution;
