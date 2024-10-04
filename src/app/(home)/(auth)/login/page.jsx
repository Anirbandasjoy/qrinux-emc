import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import loginImage from "@/static/images/auth.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl">
        {/* Breadcrumbs */}
        <div className="flex gap-1 font-semibold text-[15px] text-gray-700 dark:text-gray-300 items-center my-6">
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/"
          >
            Home
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link
            className="hover:underline text-xs sm:text-lg font-semibold"
            href="/login"
          >
            Login
          </Link>
        </div>

        {/* Main Container */}
        <div className="flex flex-col-reverse md:flex-row w-full shadow-lg bg-white rounded-lg overflow-hidden">
          {/* Left Section with Image */}
          <div className="hidden md:flex md:w-1/2 bg-gray-200">
            <Image
              src={loginImage}
              alt="Login Image"
              className="object-cover w-full h-full"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>

          {/* Right Section - Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-6">Log In</h2>

            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to terms & conditions
                </label>
              </div>

              <button className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Log In
              </button>

              <div className="my-6 flex items-center">
                <span className="flex-grow border-t"></span>
                <span className="mx-4 text-sm text-gray-400">Or</span>
                <span className="flex-grow border-t"></span>
              </div>

              <button className="w-full flex justify-center items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                <FcGoogle className="mr-2" />
                Log in with Google
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-500 flex items-center gap-1">
              <p>Don’t have an account?</p>{" "}
              <Link href="/registation">
                <span className="text-blue-500 hover:underline">
                  Create Account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
