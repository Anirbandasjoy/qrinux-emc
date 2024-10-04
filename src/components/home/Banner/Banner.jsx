/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import bannerImage from "@/static/images/banner1.png"; // Make sure the path is correct

const Banner = () => {
  return (
    <div className="bg-black py-16 px-8 pt-28">
      <div className="container mx-auto flex justify-center flex-col-reverse lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="text-white lg:w-1/2">
          <h1 className="text-2xl lg:text-[72px] lg:leading-[80px]  font-bold  mb-4 lg:mb-6">
            More than <br /> just a product <br /> Its a lifestyle.
          </h1>
          <p className="lg:text-lg text-sm mb-8">
            Whether you are just starting out, have played <br /> your whole
            life or you are a Tour pro, your <br /> swing is like a fingerprint
          </p>
          <button className="bg-white text-black py-4 px-10 rounded-md shadow-lg transition-transform transform text-lg font-medium hover:scale-105">
            Shopping Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={bannerImage}
            alt="Laptop"
            className="max-w-full h-auto"
            width={850}
            height={650}
            priority // Ensures the image is loaded quickly (useful for above-the-fold content)
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
