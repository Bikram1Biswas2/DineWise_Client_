import { useLoaderData } from "react-router-dom";

const AllFood = () => {
    const foods = useLoaderData();
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
            style={{ backgroundColor: '#BDE8CA' }} 
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
              <h3 className="text-xl font-semibold text-[#0D7C66] mb-2">
                {food.foodName}
              </h3>
              <p className="text-[#41B3A2] text-sm mb-2">Category: {food.foodCategory}</p>
  
              {/* Quantity */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0D7C66]">Quantity: {food.quantity}</span>
                <span className="text-lg font-semibold text-[#0D7C66]">Price: ${food.price}</span>
              </div>
            </div>
  
            {/* Details Button */}
            <div className="mt-4">
              <button
                className="w-full bg-[#41B3A2] text-white py-2 rounded-md font-semibold hover:bg-[#0D7C66] transition-all"
                onClick={() => navigate(`/food/${food._id}`)} // navigate to the food details page
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default AllFood;
  