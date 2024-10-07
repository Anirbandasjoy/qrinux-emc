import Sidebar from "@/components/dashboard/shared/Sidebar";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-[#f3f5f7] h-screen pt-28">
      <div className=" container mx-auto ">
        <div className="flex gap-1 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center mb-6">
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/"
          >
            Home
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/dashboard"
          >
            My Profile
          </Link>
        </div>
        <div className="flex ">
          <div className="w-4/12">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
