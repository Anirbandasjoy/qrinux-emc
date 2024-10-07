import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#f3f5f7] pt-24">
      <div className="max-w-5xl  mx-auto p-6 space-y-9">
        <div className="flex gap-1 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center">
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/"
          >
            Home
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
        {/* Contact Info Section */}
        <div className="bg-white p-6 rounded-sm">
          <h2 className="text-xl font-semibold mb-4">CONTACT INFO</h2>
          <p className="mb-6">
            Tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Office */}
            <div>
              <h3 className="font-medium">OFFICE</h3>
              <p>730 Glensitone Ave 65802, Springfield, US</p>
              <p>+123 222 333 44</p>
              <p>+123 666 777 88</p>
              <p>minstore@yourinfo.com</p>
            </div>
            {/* Management */}
            <div>
              <h3 className="font-medium">MANAGEMENT</h3>
              <p>730 Glensitone Ave 65802, Springfield, US</p>
              <p>+123 222 333 44</p>
              <p>+123 666 777 88</p>
              <p>minstore@yourinfo.com</p>
            </div>
          </div>
        </div>

        {/* Our Stores Section */}
        <div className="bg-white p-6 rounded-sm">
          <h2 className="text-xl font-semibold mb-4">OUR STORES</h2>
          <p className="mb-6">
            You can also directly buy products from our stores.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* USA Store */}
            <div>
              <h3 className="font-medium">USA</h3>
              <p>730 Glensitone Ave 65802, Springfield, US</p>
              <p>+123 222 333 44</p>
              <p>+123 666 777 88</p>
              <p>minstore@yourinfo.com</p>
            </div>
            {/* France Store */}
            <div>
              <h3 className="font-medium">FRANCE</h3>
              <p>13 Rue Montmartre 75001, Paris, France</p>
              <p>+123 222 333 44</p>
              <p>+123 666 777 88</p>
              <p>minstore@yourinfo.com</p>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="bg-white p-6 rounded-sm">
          <h2 className="text-xl font-semibold mb-4">ANY QUESTIONS?</h2>
          <p className="mb-6">Use the form below to get in touch with us.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fullname */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Your Fullname *
              </label>
              <input
                type="text"
                placeholder="Your fullname"
                className="w-full p-2 border border-gray-300 rounded-sm"
              />
            </div>
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border border-gray-300 rounded-sm"
              />
            </div>
            {/* Phone Number */}
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 border border-gray-300 rounded-sm"
              />
            </div>
            {/* Subject */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Your subject here"
                className="w-full p-2 border border-gray-300 rounded-sm"
              />
            </div>
            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Write your message here"
                className="w-full p-2 border border-gray-300 rounded-sm"
                rows="4"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-sm"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
