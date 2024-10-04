import Image from "next/image";
import image1 from "@/static/images/pCategory1.png";
import image2 from "@/static/images/pCategory2.jpeg";
import image3 from "@/static/images/pCategory3.png";

const PopularCategory = () => {
  return (
    <div className="container mx-auto mb-20 px-2 sm:px-0 ">
      <h1 className="lg:text-3xl text-lg mb-12 font-medium uppercase  text-[#474747]">
        POPULAR CATAGORY
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1  gap-5">
        {/* section */}
        <div className="bg-[#f3f5f7] p-9 flex items-center justify-center ">
          <div className="space-y-12">
            <div className="">
              <Image
                src={image1}
                alt="Laptop"
                className="w-full h-auto max-w-sm"
                placeholder="blur"
                width={400}
                height={300}
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-3xl font-bold mb-4">Earbuds</h2>
              <a
                href="/collections/earbuds"
                className=" font-semibold flex items-center hover:underline"
              >
                Collection <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="space-y-5">
          <div className="bg-[#f3f5f7] p-9 gap-10 flex items-end justify-center">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-4">Earbuds</h2>
              <a
                href="/collections/earbuds"
                className=" font-semibold flex items-center hover:underline"
              >
                Collection <span className="ml-2">→</span>
              </a>
            </div>
            <div className="">
              <Image
                src={image2}
                alt="Laptop"
                className="w-full h-auto max-w-sm"
                placeholder="blur"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="bg-[#f3f5f7] p-9 gap-10 flex items-end justify-center">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-4">Earbuds</h2>
              <a
                href="/collections/earbuds"
                className=" font-semibold flex items-center hover:underline"
              >
                Collection <span className="ml-2">→</span>
              </a>
            </div>
            <div className="">
              <Image
                src={image3}
                alt="Laptop"
                className="w-full h-auto max-w-sm"
                placeholder="blur"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
