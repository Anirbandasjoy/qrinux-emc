import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Product from "@/components/home/Products/Product";
const Shop = () => {
  return (
    <div className="bg-[#f3f5f7]">
      <div className="pt-28  container mx-auto ">
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
            href="/shop"
          >
            Shop
          </Link>
        </div>

        <div className="flex gap-6 mt-6">
          <div className=" w-4/12 ">
            {/* search icon */}
            <div className="relative h-11">
              <Input className="bg-white h-full" placeholder="Search" />
              <div className="bg-black p-4 absolute right-0 top-0 h-full w-11">
                <FaSearch className="text-sm text-white" />
              </div>
            </div>
            {/* filter section */}
            <div className="mt-6 space-y-9">
              {/* category filter */}
              <div>
                <h1 className="uppercase text-xl underline font-medium">
                  categories
                </h1>
                <div className="mt-5">
                  <RadioGroup defaultValue="comfortable" className="">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="font-medium text-lg">
                        All
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="leptop" id="r2" />
                      <Label htmlFor="r2" className="font-medium text-[18px]">
                        Laptop
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tab" id="r3" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        Tab
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="r4" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="headphone" id="r5" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        Headphone
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* brand filter */}
              <div>
                <h1 className="uppercase text-xl underline font-medium">
                  Brands
                </h1>
                <div className="mt-5">
                  <RadioGroup defaultValue="comfortable" className="">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="apple" id="r1" />
                      <Label htmlFor="r1" className="font-medium text-lg">
                        Apple
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="samsung" id="r2" />
                      <Label htmlFor="r2" className="font-medium text-[18px]">
                        Samsung
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tab" id="r3" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        Nokia
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="r4" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        Symphony
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* filter by price */}
              <div>
                <h1 className="uppercase text-xl underline font-medium">
                  Filter by price
                </h1>
                <div className="mt-5">
                  <RadioGroup defaultValue="comfortable" className="">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="r1" />
                      <Label htmlFor="r1" className="font-medium text-lg">
                        Less then 10$
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="samsung" id="r2" />
                      <Label htmlFor="r2" className="font-medium text-[18px]">
                        10$ - 50$
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tab" id="r3" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        50$ - 100$
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="r4" />
                      <Label htmlFor="r3" className="font-medium text-[18px]">
                        100$ - 200$
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full ">
            <div className=" grid grid-cols-1 gap-5 sm:grid-cols-3">
              {Array.from({ length: 20 }).map((_, index) => {
                return <Product key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
