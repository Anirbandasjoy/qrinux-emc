import Sidebar from "@/components/dashboard/shared/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-[#f3f5f7] h-screen">
      <div className="flex pt-28 container mx-auto ">
        <div className="w-4/12">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
