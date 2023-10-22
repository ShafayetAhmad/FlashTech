import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_ROOT from "../../../../config";

const BrandsGallery = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_ROOT}/getBrandsData` , {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        brands.map((brand) => (
          <div
            key={brand.id}
            className="w-full p-2 transition-transform transform hover:scale-110 hover:bg-gray-400"
          >
            <Link to={`brand-Product/${brand.BrandName}`}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={brand.BrandImage}
                  alt={brand.BrandName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-2xl font-bold mb-2 text-center">
                    {brand.BrandName}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BrandsGallery;
