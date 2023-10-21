import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductCards from "./ProductCards/ProductCards";

const BrandPage = () => {
  let Brand = useParams().brand;
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/getProductByBrand?brand=${Brand}`, {
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

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ProductSlider Brand={Brand} brandData={brandData}></ProductSlider>
      )}
      <ProductCards brandData={brandData}></ProductCards>
    </div>
  );
};

export default BrandPage;
