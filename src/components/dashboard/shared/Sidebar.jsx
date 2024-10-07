"use client";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { label: "Wish-list (4)", route: "/wishlist" },
    { label: "Pending Orders (2)", route: "/pending-orders" },
    { label: "Received Orders (3)", route: "/received-orders" },
    { label: "Canceled Orders (0)", route: "/canceled-orders" },
    { label: "My Reviews (2)", route: "/my-reviews" },
    { label: "Pending Reviews (2)", route: "/pending-reviews" },
    { label: "Shipping Address", route: "/shipping-address" },
    { label: "Log Out", route: "/logout" },
  ];

  return (
    <div>
      <div>
        <ul className="space-y-4">
          <li className="text-[25px] font-bold cursor-pointer">My Account</li>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.route)}
              className={`text-[23px] cursor-pointer text-[#3A3A3A]  ${
                router.pathname === item.route
                  ? "border-l-4 border-black font-semibold text-black"
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
