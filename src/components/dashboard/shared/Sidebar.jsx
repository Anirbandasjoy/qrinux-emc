"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { label: "Wish-list (4)", route: "/dashboard/wishlist" },
    { label: "Pending Orders (2)", route: "/dashboard/pendingOrders" },
    { label: "Received Orders (3)", route: "/dashboard/received-orders" },
    { label: "Canceled Orders (0)", route: "/dashboard/canceled-orders" },
    { label: "My Reviews (2)", route: "/dashboard/my-reviews" },
    { label: "Pending Reviews (2)", route: "/pending-reviews" },
    { label: "Shipping Address", route: "/dashboard/shipping-address" },
    { label: "Log Out", route: "/logout" },
  ];

  return (
    <div>
      <div>
        <ul className="space-y-4">
          <Link href="/dashboard">
            <li className={`text-[25px] font-bold cursor-pointer `}>
              My Account
            </li>
          </Link>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.route)}
              className={`text-[23px] cursor-pointer text-[#3A3A3A] ${
                pathname === item.route
                  ? "border-l-4 pl-2 border-black font-semibold text-black"
                  : "border-l-4 border-transparent"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
