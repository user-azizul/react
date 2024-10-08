import React, { useEffect, useState } from "react";
import { useShop } from "../context/GlobalContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useShop();
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");
  const [sortedProducts, setSortedProducts] = useState([]);

  // Handle category changes
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  // Handle subcategory changes
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  // Handle sort changes
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter products based on category, subcategory, and search
  useEffect(() => {
    const filterProducts = () => {
      let tempProducts = products;

      // Filter by category
      if (category.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          category.includes(product.category)
        );
      }

      // Filter by subcategory
      if (subcategory.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          subcategory.includes(product.subCategory)
        );
      }

      // Filter by search
      if (showSearch && search) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFilteredProducts(tempProducts);
    };

    filterProducts();
  }, [category, subcategory, products, search, showSearch]);

  // Sort filtered products based on sortOption
  useEffect(() => {
    const sortProducts = () => {
      let tempProducts = [...filteredProducts]; // Create a copy for sorting

      // Sort products
      if (sortOption === "low-high") {
        tempProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "high-low") {
        tempProducts.sort((a, b) => b.price - a.price);
      }

      setSortedProducts(tempProducts);
    };

    sortProducts();
  }, [filteredProducts, sortOption]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 font-light">
            {["Men", "Women", "Kids"].map((categoryName) => (
              <p key={categoryName} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={categoryName}
                  onChange={toggleCategory}
                />{" "}
                {categoryName}
              </p>
            ))}
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUB CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 font-light">
            {["Topwear", "Bottomwear", "Winterwear"].map((subCategoryName) => (
              <p key={subCategoryName} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={subCategoryName}
                  onChange={toggleSubCategory}
                />{" "}
                {subCategoryName}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {sortedProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
