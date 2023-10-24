import { useContext, useEffect, useState } from "react";
import API_ROOT from "../../../../../config";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    console.log(user.email);
    fetch(`${API_ROOT}/getCartData?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [setCartData, user]);

  const handleRemoveFromCart = (productId) => {
    console.log(productId);
    fetch(`${API_ROOT}/deleteCardData`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        productId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData((prevCartData) =>
          prevCartData.filter((item) => item._id !== productId)
        );
        swal({
          title: "Success",
          text: `Deleted One Item From Your Cart Succesfully`,
          icon: "success",
          button: "Okay",
        });
      })
      .catch((error) => {
        console.log("Error in deleting cart element: ", error);
      });
  };

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : cartData.length === 0 ? (
        <div className="text-center my-48 font-medium text-3xl">
          <h1 className="text-5xl ">Oops,</h1>
          <br></br> Seems like you have not added anything to your cart yet.
          Please add first to see them here.<br></br> Go to{" "}
          <Link className="text-blue-600 underline" to={"/"}>
            Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
          {cartData.map((product) => (
            <div
              key={product._id} // Assuming _id is the correct identifier for each product
              className="w-full p-2 transition-transform transform hover:scale-105 gap-4 bg-gray-400"
            >
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={product.ProductImage}
                    alt={product.ProductName}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xl font-bold">Product:</span>
                      <span className="ml-2 text-xl">
                        {product.ProductName}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-xl font-bold">Brand:</span>
                      <span className="ml-2 text-xl">{product.BrandName}</span>
                    </div>

                    <div className="mb-2">
                      <span className="text-xl font-bold">Type:</span>
                      <span className="ml-2 text-xl">
                        {product.ProductType}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-xl font-bold">Price:</span>
                      <span className="ml-2 text-xl">
                        {product.ProductPrice}
                      </span>
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
                    <div className="flex ">
                      <button
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={() => handleRemoveFromCart(product._id)}
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
