import Product from "./Product";

const Products = () => {
  return (
    <div className="bg-[#f3f5f7]">
      <div className="container mx-auto mb-20 mt-10 py-10 ">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0  justify-between items-center">
          <h1 className="lg:text-3xl text-lg font-medium uppercase  text-[#474747]">
            Feature Products
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h2 className="lg:text-lg text-sm text-[#5c5c5c] uppercase font-medium cursor-pointer">
              Go to Shop
            </h2>
            <div className="w-28 mt-1 h-[2px] bg-gray-300"></div>
          </div>
        </div>
        {/* show all products */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 20 }).map((_, index) => {
            return <Product key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
