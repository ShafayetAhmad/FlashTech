import { useState } from "react";
import API_ROOT from "../../../config";

const AddProduct = () => {
  const [product, setProduct] = useState({
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
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/addNewProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log("Product added:", product);

    // Reset the form after submission
    setProduct({
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
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Image */}
        <div className="mb-4">
          <label
            htmlFor="ProductImage"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="ProductImage"
            name="ProductImage"
            value={product.ProductImage}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="ProductName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="ProductName"
            name="ProductName"
            value={product.ProductName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label
            htmlFor="BrandName"
            className="block text-sm font-medium text-gray-700"
          >
            Brand
          </label>
          <input
            type="text"
            id="BrandName"
            name="BrandName"
            value={product.BrandName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label
            htmlFor="ProductType"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            id="ProductType"
            name="ProductType"
            value={product.ProductType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Apple">Apple</option>
            <option value="Computer">Computer</option>
            <option value="Headphone">Headphone</option>
            {/* Add more types as needed */}
          </select>
        </div>

        {/* Price */}
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
            value={product.ProductPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Short Description */}
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
            value={product.ProductDescription}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label
            htmlFor="ProductRating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="text"
            id="ProductRating"
            name="ProductRating"
            value={product.ProductRating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
