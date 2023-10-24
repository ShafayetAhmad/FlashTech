import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductCards from "./ProductCards/ProductCards";
import API_ROOT from "../../../config";

const BrandPage = () => {
  let Brand = useParams().brand;
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_ROOT}/getProductByBrand?brand=${Brand}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrandData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [Brand]);

  if (brandData.length === 0)
    return loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-center font-bold mb-6">
          Oops, you are a bit late!
        </h1>
        <p className="text-gray-600 text-3xl text-center mb-8">
          It seems like all the cutting-edge tech from{" "}
          <span className="text-green-600 font-bold"> {Brand} </span>has found
          new homes. Do not worry; the future of tech waits for no one!
        </p>

        <p className="text-gray-600 text-lg mb-8">
          Come back later for the next wave of innovation. Meanwhile, explore
          more tech wonders on our{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            home page
          </Link>
          .
        </p>
        <p className="text-gray-700 text-lg">
          In the world of tech, timing is everything. Do not worry; you are just
          digitally fashionably late!
        </p>
      </div>
    );

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ProductSlider Brand={Brand} brandData={brandData}></ProductSlider>
      )}
      <ProductCards brandData={brandData} loading={loading}></ProductCards>
    </div>
  );
};

export default BrandPage;
