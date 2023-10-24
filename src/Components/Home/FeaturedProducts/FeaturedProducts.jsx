import { useEffect, useState } from "react";
import API_ROOT from "../../../../config";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_ROOT}/getFeaturedProducts`)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured products", error);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {featuredProducts.map((product) => (
              <Link
                to={`brand-Product/${product.BrandName}/${product._id}`}
                key={product.id}
                className="hover:bg-green-100 bg-gray-100 rounded-lg p-6 shadow-md border-2"
              >
                <div className="mb-4 border-4 border-gray-500">
                  <img
                    src={product.ProductImage}
                    alt={product.ProductName}
                    className="mx-auto h-40 w-40 object-cover "
                  />
                </div>
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {product.ProductName}
                  </h2>
                  <p className="text-sm text-gray-600">{product.BrandName}</p>
                  <p className="text-xs text-gray-500">{product.ProductType}</p>
                </div>
                {/* Additional product details */}
                <p className="text-lg text-red-500 font-semibold">
                  Price: {product.ProductPrice}
                </p>
                <p className="text-md text-gray-700">
                  Rating: {product.ProductRating}
                </p>
                <p className="text-sm text-gray-600">
                  {product.ProductDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
