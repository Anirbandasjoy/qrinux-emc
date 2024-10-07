/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "IPHONE 13",
      price: 1500,
      quantity: 1,
      imageUrl:
        "https://i.ibb.co.com/m0GNjYC/8da3b6673a7c2f56fbc78f3de8601b5c.jpg", // Use your own image link
    },
    {
      id: 2,
      name: "IPHONE 13",
      price: 1500,
      quantity: 1,
      imageUrl:
        "https://i.ibb.co.com/m0GNjYC/8da3b6673a7c2f56fbc78f3de8601b5c.jpg", // Use your own image link
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-[#f3f5f7] h-screen pt-28">
      <div className="container mx-auto">
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
        </div>
        <div className="w-full p-10 bg-white">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">PRODUCT</th>
                  <th className="text-center py-3 px-4">QUANTITY</th>
                  <th className="text-right py-3 px-4">SUBTOTAL</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    {/* Product Info */}
                    <td className="py-4 px-4 flex items-center gap-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <p className="text-gray-800">{item.name}</p>
                    </td>

                    {/* Quantity Controls */}
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "decrement")
                          }
                          className="px-2 py-1 border border-gray-300"
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "increment")
                          }
                          className="px-2 py-1 border border-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* Subtotal */}
                    <td className="py-4 px-4 text-right">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </td>

                    {/* Remove Item */}
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-10">
            <div className="text-left w-full sm:w-1/2">
              <h2 className="text-lg font-medium">CART TOTALS</h2>
              <p className="mt-4 text-gray-800">Products: {cartItems.length}</p>
              <p className="mt-2 text-gray-800">
                Subtotal: ${calculateSubtotal().toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6 sm:mt-0">
              <button className="px-6 py-2 bg-black text-white font-semibold">
                CONTINUE SHOPPING
              </button>
              <Link href="/payment">
                <button className="px-6 py-2 bg-black text-white font-semibold">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
