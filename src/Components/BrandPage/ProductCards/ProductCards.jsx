/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const ProductCards = ({ brandData, loading }) => {
  console.log(brandData);
  const navigate = useNavigate();
  const handleUpdateProduct = () => {
    navigate("/");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        brandData.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 transition-transform transform hover:scale-105 gap-4 bg-gray-400"
          >
            <Link to={`${product._id}`}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={product.ProductImage}
                  alt={product.ProductName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xl font-bold">Product:</span>
                    <span className="ml-2 text-xl">{product.ProductName}</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl font-bold">Brand:</span>
                    <span className="ml-2 text-xl">{product.BrandName}</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl font-bold">Type:</span>
                    <span className="ml-2 text-xl">{product.ProductType}</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl font-bold">Price:</span>
                    <span className="ml-2 text-xl">{product.ProductPrice}</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl font-bold">Description:</span>
                    <span className="ml-2 text-xl">
                      {product.ProductDescription}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xl font-bold">Rating:</span>
                    <span className="ml-2 text-xl">{`${product.ProductRating}⭐`}</span>
                  </div>
                </div>
                <div className="flex justify-between px-4 pb-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Details
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                    onClick={handleUpdateProduct}
                  >
                    Update
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCards;
