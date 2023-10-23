import { useContext, useEffect, useState } from "react";
import API_ROOT from "../../../../../config";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    console.log(user.email)
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

  return (
    <div>
      <h1>{cartData.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          cartData.map((product) => (
            <div
              key={product._id} // Assuming _id is the correct identifier for each product
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
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyCart;
