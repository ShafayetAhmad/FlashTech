import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_ROOT from "../../../config";
import { AuthContext } from "../Provider/AuthProvider";

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [userCart, setUserCart] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user);

  let paramData = useParams();
  console.log(paramData);
  useEffect(() => {
    fetch(`${API_ROOT}/getProductDetails?id=${paramData._id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [paramData._id]);

  useEffect(() => {
    console.log(user.email);
    fetch(`${API_ROOT}/getCartData?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCart(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user.email]);

  const handleAddToCart = () => {
    fetch(`${API_ROOT}/updateUserCart`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        currentProduct,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(userCart);
      })
      .catch((error) => {
        console.log("error in adding to cart: ", error);
      });
  };

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          {/* Image */}
          <img
            className="w-full h-48 object-cover object-center"
            src={currentProduct.ProductImage}
            alt={currentProduct.ProductName}
          />

          {/* Product Details */}
          <div className="p-6">
            {/* Name */}
            <h2 className="text-xl font-semibold mb-2">
              {currentProduct.ProductName}
            </h2>

            {/* Brand Name */}
            <p className="text-gray-600 mb-4">{`Brand: ${currentProduct.BrandName}`}</p>

            {/* Type */}
            <p className="text-gray-600 mb-4">{`Type: ${currentProduct.ProductType}`}</p>

            {/* Price */}
            <p className="text-gray-800 font-bold text-xl mb-4">{`Price: ${currentProduct.ProductPrice}`}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <p className="text-gray-600">Rating:</p>
              <div className="ml-2 text-yellow-500">
                {" "}
                {currentProduct.ProductRating}⭐
              </div>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 mb-4">
              {currentProduct.ProductDescription}
            </p>

            {/* Buttons */}
            <div className="flex ">
              <button
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
