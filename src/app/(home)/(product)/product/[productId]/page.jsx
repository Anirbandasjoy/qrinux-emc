/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reviews from "@/components/reviews/Reviews";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://i.ibb.co.com/q0rmVWP/productD.jpg"
  );

  const images = [
    { src: "https://i.ibb.co.com/q0rmVWP/productD.jpg", id: 1 },
    { src: "https://i.ibb.co.com/jrkVqVc/download.jpg", id: 2 },
    {
      src: "https://i.ibb.co.com/zb22vyS/Screenshot-2024-08-26-000616.png",
      id: 3,
    },
  ];

  return (
    <div className="bg-[#f3f5f7] pb-20">
      <div className="container mx-auto pt-28 px-4 lg:px-0">
        <div className="flex gap-1 ml-4 sm:ml-0 mb-2 sm:mb-7 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center">
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/"
          >
            Home
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/shop"
          >
            Shop
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/product/2"
          >
            Product
          </Link>
        </div>
        <div className="p-4 sm:p-0">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section - Image Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[18rem] md:h-[24rem] lg:h-[28rem]">
                <img
                  src={selectedImage}
                  className="w-full h-full object-cover rounded-sm"
                  alt="image"
                />
              </div>
              {/* images list */}
              <div className="flex mt-5 gap-2 md:gap-4 lg:gap-5 w-full">
                {images?.map((image) => (
                  <div
                    className="h-[6rem] md:h-[8rem] lg:h-[12rem] w-1/3"
                    key={image.id}
                  >
                    <img
                      src={image.src}
                      className="w-full h-full object-cover cursor-pointer"
                      alt="image"
                      onClick={() => setSelectedImage(image.src)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Product Info */}
            <div className="w-full lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-7 bg-white px-6 py-5 md:px-8 md:py-7 lg:px-10 lg:py-9">
              <h1 className="text-2xl md:text-3xl">DELL LAPTOP</h1>
              <p className="">★ 5.0</p>
              <p className="text-2xl md:text-3xl font-medium text-gray-800">
                $100.00
              </p>
              <div className="space-y-2">
                <p className="text-black">COLOR</p>
                <div className="flex gap-4">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full cursor-pointer"></span>
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full cursor-pointer"></span>
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full cursor-pointer"></span>
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full cursor-pointer"></span>
                </div>
              </div>
              <p className="text-gray-600">2 in stock</p>
              {/* Quantity Selector */}
              <div className="flex items-center space-x-1">
                <button className="py-1 p-2 md:py-2 px-4   border-2">-</button>
                <span className="border-2 py-1 md:py-2 px-7 ">1</span>
                <button className="py-1 p-2 md:py-2 px-4   border-2">+</button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-gray-300 font-semibold">
                  ADD TO CART
                </button>
                <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-300 font-semibold">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* review and description section */}
        <div className="mt-10 bg-white p-[24px] rounded-sm">
          <div className="text-4xl text-center">
            <div className="flex justify-center">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="space-x-2 mb-8">
                  <TabsTrigger
                    value="description"
                    className=" text-[20px] font-normal"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className=" text-[20px] font-normal"
                  >
                    Reviews (4)
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className=" text-left">
                  <h2 className="text-[16px] text-[#3A3A3A]">
                    Product Description
                  </h2>
                  <div className="mt-7">
                    <p className="text-[16px] leading-6 text-justify text-[#3A3A3A]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt autem sequi quidem odit! Pariatur illo neque ab
                      distinctio in dolore vero amet quos impedit nisi rerum
                      cumque similique, perferendis voluptate, earum laborum.
                      Tenetur beatae, commodi deleniti, explicabo reprehenderit
                      itaque deserunt molestiae totam illum asperiores placeat
                      rem, optio distinctio? Accusamus, assumenda officia!
                      Fugiat quae perferendis laborum impedit voluptas ad
                      accusantium excepturi assumenda ea! Est, itaque magni esse
                      libero animi ad iste! Tempore quos cupiditate velit itaque
                      suscipit delectus eos obcaecati assumenda quod nam
                      doloribus quo at nesciunt cumque consectetur similique
                      repellat est provident, aperiam praesentium minima. Natus,
                      pariatur incidunt. Ratione, cupiditate?
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reviews">
                  <Reviews />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
