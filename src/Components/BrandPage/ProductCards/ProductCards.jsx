/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCards = ({ brandData, loading }) => {
  console.log(brandData);
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
            <Link to={`brand-Product/${product.ProductName}`}>
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
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCards;
