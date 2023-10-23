import { useState } from "react";
import API_ROOT from "../../../config";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const productId = useParams().id;
  const [previousProductData, setPreviousProductData] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({
    ProductImage: "",
    ProductName: "",
    BrandName: "",
    ProductType: "",
    ProductPrice: "",
    ProductDescription: "",
    ProductRating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  fetch(`${API_ROOT}/getProductDetails?id=${productId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPreviousProductData(data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/updateProduct`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId, updatedProduct }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log("Product updated:", updatedProduct);

    // Reset the form after submission
    setUpdatedProduct({
      ProductImage: "",
      ProductName: "",
      BrandName: "",
      ProductType: "",
      ProductPrice: "",
      ProductDescription: "",
      ProductRating: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="ProductImage"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            placeholder={previousProductData.ProductImage}
            type="text"
            id="ProductImage"
            name="ProductImage"
            value={updatedProduct.ProductImage}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ProductName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            placeholder={previousProductData.ProductName}
            type="text"
            id="ProductName"
            name="ProductName"
            value={updatedProduct.ProductName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ProductType"
            className="block text-sm font-medium text-gray-700"
          >
            Product Type
          </label>
          <input
            placeholder={previousProductData.ProductType}
            type="text"
            id="ProductType"
            name="ProductType"
            value={updatedProduct.ProductType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="BrandName"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            placeholder={previousProductData.BrandName}
            type="text"
            id="BrandName"
            name="BrandName"
            value={updatedProduct.BrandName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Apple">Apple</option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
            <option value="MI">MI</option>
            <option value="Samsung">Samsung</option>
            <option value="Intel">Intel</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="ProductPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            id="ProductPrice"
            name="ProductPrice"
            value={updatedProduct.ProductPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder={previousProductData.ProductPrice}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ProductDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            id="ProductDescription"
            name="ProductDescription"
            value={updatedProduct.ProductDescription}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder={previousProductData.ProductDescription}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="ProductRating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            id="ProductRating"
            name="ProductRating"
            value={updatedProduct.ProductRating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
