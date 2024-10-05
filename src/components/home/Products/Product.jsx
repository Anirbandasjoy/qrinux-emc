/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import StarRatings from "react-star-ratings";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Product = () => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 min-w-xs ">
      {/* Product Image */}
      <Link href="/product/1" className="relative cursor-pointer">
        <img
          src="https://i.ibb.co.com/jrkVqVc/download.jpg"
          alt="Laptop"
          className="w-full h-64 object-cover rounded-md"
        />
        {/* Add to Cart Hover Effect */}
        <div className="absolute inset-0 flex items-end  justify-center bg-black bg-opacity-5 opacity-0 hover:opacity-100 transition-opacity">
          <button className="bg-black text-white py-3 mb-3 px-20 rounded-md">
            Add to cart
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold">
          Sony - WH-CH720N Wireless Noise Canceling
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <StarRatings
            rating={4} // Current rating value
            starRatedColor="red"
            starDimension="20px"
            starSpacing="3px"
            numberOfStars={5}
            name="rating"
          />
          <span className="ml-2 text-sm">4 / 5</span>
        </div>

        {/* reaka */}

        <div className="bg-gray-300 mt-5 w-full h-[1px] mb-3"></div>
        <div className="flex items-center justify-between">
          {/* Price and Discount */}
          <div className="mt-2 flex items-center">
            <span className="text-gray-400 line-through mr-2">$300</span>
            <span className="text-black font-semibold">$500</span>
          </div>

          {/* Favorite Icon */}
          <div className="mt-2 text-right">
            <FaRegHeart className="text-gray-500 text-xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
