import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandSlider from "./BrandSlider/BrandSlider";

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
        <div>
          <h1>{Brand}</h1>
                      <div>{brandData.length}</div>
                      <BrandSlider></BrandSlider>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
