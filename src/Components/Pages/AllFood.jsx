import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllFood = () => {
  const foods = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [sortOrder, setSortOrder] = useState(""); // For sorting order

  // Handle Search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    // Filter foods based on the search query
    const filtered = foods.filter((food) =>
      food.foodName.toLowerCase().includes(query)
    );
    setFilteredFoods(filtered);
  };

  // Handle Sort
  const handleSort = (order) => {
    setSortOrder(order);

    // Sort foods based on price
    const sortedFoods = [...filteredFoods].sort((a, b) => {
      if (order === "ascending") return a.price - b.price;
      if (order === "descending") return b.price - a.price;
      return 0;
    });

    setFilteredFoods(sortedFoods);
  };

  return (
    <div>
      <Helmet>
        <title>DineWise | AllFood</title>
      </Helmet>
      <div>
        <div
          className="hero min-h-40"
          style={{
            backgroundImage: `url(https://i.ibb.co/GWqrZsX/360-F-292203735-CSsyqy-S6-A4-Z9-Czd4-Msf7q-ZEhoxjpz-Zl1.jpg)`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">All Food</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Search and Sort */}
      <div className="w-6/12 mx-auto mt-5 flex items-center gap-4">
        <label className="input input-bordered flex items-center gap-2 grow">
          <input
            onChange={handleSearch}
            type="text"
            className="grow"
            placeholder="Search Your Food Here"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="select select-bordered bg-[#41B3A2] text-white"
        >
          <option value="">Sort by Price</option>
          <option value="ascending">Price: Low to High</option>
          <option value="descending">Price: High to Low</option>
        </select>
      </div>
      {filteredFoods.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No food items found.</p>
      )}
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredFoods.map((food) => (
          <div
            key={food._id}
            className="rounded-lg shadow-lg p-4 flex flex-col justify-between bg-[#bde8ca6a]"
          >
            {/* Card Image */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Food Info */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-[#0D7C66] mb-2 dark:text-white">
                {food.foodName}
              </h3>
              <p className="text-[#41B3A2] text-sm mb-2 dark:text-white">
                Category: {food.foodCategory}
              </p>

              {/* Quantity */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0D7C66] dark:text-white">
                  Quantity: {food.quantity}
                </span>
                <span className="text-lg font-semibold text-[#0D7C66] dark:text-white">
                  Price: ${food.price}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={`/singleFoodPage/${food._id}`}
                className="w-full btn bg-[#41B3A2] text-white py-2 rounded-md font-semibold hover:bg-[#0D7C66] transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
