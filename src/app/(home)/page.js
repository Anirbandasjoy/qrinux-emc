import Banner from "@/components/home/Banner/Banner";
import Fecility from "@/components/home/Fecility/Fecility";
import PopularCategory from "@/components/home/popularCategory/PopularCategory";
import Products from "@/components/home/Products/Products";
import Promution from "@/components/home/promution/Promution";
const Home = () => {
  return (
    <div>
      <Banner />
      <Fecility />
      <Products />
      <PopularCategory />
      <Promution />
    </div>
  );
};

export default Home;
