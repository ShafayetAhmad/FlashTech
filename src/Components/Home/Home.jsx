import Separator from "../Shared/Separator/Separator";
import BrandsGallary from "./BrandsGallary/BrandsGallary";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Separator text={"Featured Products"} color={"bg-green-500"}></Separator>
      <FeaturedProducts></FeaturedProducts>
      <div className="border-b-8 my-8 border-gray-500"></div>
      <Separator text={"Buy From Brands"} color={"bg-blue-500"}></Separator>
      <BrandsGallary></BrandsGallary>
      <Separator
        text={"What our clients are saying"}
        color={"bg-gray-500"}
      ></Separator>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
