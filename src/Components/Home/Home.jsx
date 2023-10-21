import Separator from "../Shared/Separator/Separator";
import BrandsGallary from "./BrandsGallary/BrandsGallary";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Separator text={"Buy From Brands"} color={"bg-blue-500"}></Separator>
      <div className="border-b-8 my-8 border-gray-500"></div>

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
