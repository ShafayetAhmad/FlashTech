/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCards = ({ brandData, loading }) => {
    console.log(brandData)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        brandData.map((product) => (
          <div
            key={product.id}
            className="w-full p-2 transition-transform transform hover:scale-105 hover:bg-gray-400"
          >
            <Link to={`brand-Product/${product.ProductName}`}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img
                  src={product.ProductImage}
                  alt={product.ProductName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-2xl font-bold mb-2 text-center">
                    {product.ProductName}
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