import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../products.json";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter products based on search title and category
  const filteredProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  // Sort products based on price
  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  // categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search products..."
            className="p-3 border border-gray-400 w-full"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            className="p-3 border border-gray-400 mb-4 md:mb-0 md:mr-2 w-full"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="p-3 border border-gray-400 w-full"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="asc">Price Lower</option>
            <option value="desc">Price Higher</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {sortedProducts.map((item, index) => (
          <div
            key={index}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/products/${item.id}`}>
              <img
                className="rounded-t-lg h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full"
                src={item.image}
                alt=""
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-lg tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 text-2xl text-white">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
