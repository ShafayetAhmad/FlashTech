import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let paramData = useParams();
  console.log(paramData);
  useEffect(() => {
    fetch(`http://localhost:5000/getProductDetails?id=${paramData._id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [paramData._id]);
  console.log(product);

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          {/* Image */}
          <img
            className="w-full h-48 object-cover object-center"
            src={product.ProductImage}
            alt={product.ProductName}
          />

          {/* Product Details */}
          <div className="p-6">
            {/* Name */}
            <h2 className="text-xl font-semibold mb-2">
              {product.ProductName}
            </h2>

            {/* Brand Name */}
            <p className="text-gray-600 mb-4">{`Brand: ${product.BrandName}`}</p>

            {/* Type */}
            <p className="text-gray-600 mb-4">{`Type: ${product.ProductType}`}</p>

            {/* Price */}
            <p className="text-gray-800 font-bold text-xl mb-4">{`Price: ${product.ProductPrice}`}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Rating:</p>
              <div className="ml-2 text-yellow-500">
                {" "}
                {product.ProductRating}⭐
              </div>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 mb-4">{product.ProductDescription}</p>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Details
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;