import { Link, useLoaderData } from "react-router-dom";

const SingleFoodPage = () => {
  const food = useLoaderData(); 

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-food-page bg-[#BDE8CA] p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
      {/* Food Name and Category */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-[#0D7C66]">{food.foodName}</h2>
        <p className="text-[#41B3A2] text-lg">{food.foodCategory}</p>
      </div>

      {/* Food Image */}
      <div className="flex justify-center mb-6">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-64 h-64 object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Food Description */}
      <div className="text-[#0D7C66] mb-6">
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p>{food.description}</p>
      </div>

      {/* Food Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col bg-[#D7C3F1] p-4 rounded-lg shadow-lg">
          <span className="font-semibold text-[#0D7C66]">Quantity:</span>
          <p>{food.quantity}</p>
        </div>
        <div className="flex flex-col bg-[#D7C3F1] p-4 rounded-lg shadow-lg">
          <span className="font-semibold text-[#0D7C66]">Price:</span>
          <p>${food.price}</p>
        </div>
      </div>

      {/* Purchase Count */}
      <div className="bg-[#D7C3F1] p-4 rounded-lg shadow-lg mb-6">
        <h3 className="font-semibold text-[#0D7C66]">Purchase Count:</h3>
        <p>{food.purchaseCount || 0}</p>
      </div>


      <div className="flex justify-center">
        <Link to={`/foodPurchase/${food._id}`}
          className="bg-[#41B3A2] text-white btn py-3 px-8 rounded-md font-semibold hover:bg-[#0D7C66] transition-all"
        >
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default SingleFoodPage;
