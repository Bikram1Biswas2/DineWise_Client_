import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    const fetchTopFood = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_base_URL}/topFoods`);
        setTopFoods(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopFood();
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-[#55AD9B] mb-6 underline">
        Top Selling Foods
      </h2>
      <p className="text-lg text-[#9694FF] text-center">
        Explore our Top Selling Foods, handpicked based on customer favorites and highest purchase counts, showcasing the best flavors just for you!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {topFoods.map((food) => (
          <div
            key={food._id}
            className=" rounded-lg shadow-lg p-4 flex flex-col justify-between bg-[#c8edd357]"
            //style={{ backgroundColor: '#BDE8CA' }} 
          >

            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-full object-cover"
              />
            </div>

      
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-[#0D7C66] mb-2">
                {food.foodName}
              </h3>
              <p className="text-[#41B3A2] text-sm mb-2">
                Category: {food.foodCategory}
              </p>

      
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0D7C66]">
                  Sold: {food.purchaseCount}
                </span>
                <span className="text-lg font-semibold text-[#0D7C66]">
                  Price: ${food.price}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link to={`/singleFoodPage/${food._id}`}>
                <button className="w-full btn bg-[#41B3A2] text-white py-2 rounded-md font-semibold hover:bg-[#0D7C66] transition-all">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/allFood">
          <button className="btn bg-[#55AD9B] px-6 py-2 font-bold text-white rounded-md">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
