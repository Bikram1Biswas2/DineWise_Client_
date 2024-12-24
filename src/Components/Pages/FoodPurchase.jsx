import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const FoodPurchase = () => {
  const food = useLoaderData(); 
  const [quantity, setQuantity] = useState(1);
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handlePurchase = async (e) => {
    e.preventDefault();

    const purchaseDetails = {
      foodId: food._id,
      foodName: food.foodName,
      price: food.price,
      quantity,
      buyerName: user ? user.displayName : "",
      buyerEmail: user ? user.email : "",
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_base_URL}/purchase`,
        purchaseDetails
      );

      if (response.data.success) {
        toast.success("Purchase successful!");
        navigate(`/singleFoodPage/${food._id}`);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error: Unable to complete purchase.");
      }
    }
  };

  const isOwner = user?.email === food.userEmail; // Check if user is the food owner
  const isOutOfStock = food.quantity === 0; // Check if the food is out of stock

  return (
    <div className="purchase-page bg-[#EFEFEF] p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#0D7C66] mb-4">
        Purchase {food.foodName}
      </h2>
      {isOutOfStock && (
        <p className="text-red-500 font-bold mb-4">
          This food item is out of stock and cannot be purchased.
        </p>
      )}
      {isOwner && (
        <p className="text-red-500 font-bold mb-4">
          You cannot purchase your own added food item.
        </p>
      )}
      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600">Food Name</label>
          <input
            type="text"
            value={food.foodName}
            readOnly
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Price</label>
          <input
            type="text"
            value={`$${food.price}`}
            readOnly
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Quantity</label>
          <input
            type="number"
            min="1"
            max={food.quantity} // Prevent users from entering more than available quantity
            value={quantity}
            onChange={(e) => setQuantity(Math.min(Number(e.target.value), food.quantity))}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Buyer Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Buyer Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isOwner || isOutOfStock} // Disable if out of stock or user is the owner
          className={`w-full text-white py-3 px-8 rounded-md font-semibold transition-all ${
            isOwner || isOutOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#41B3A2] hover:bg-[#0D7C66]"
          }`}
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchase;
