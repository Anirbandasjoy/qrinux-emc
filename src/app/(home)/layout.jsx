import Navbar from "@/components/shared/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
