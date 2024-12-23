import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const FoodPurchase = () => {
  const food = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const {user} = useContext(AuthContext)

  const handlePurchase = async (e) => {
    e.preventDefault();

    const purchaseDetails = {
      foodId: food._id,
      foodName: food.foodName,
      price: food.price,
      quantity,
      buyerName:user?user.displayName: '', 
      buyerEmail: user?user.email: '', 
    };

    
    try {
        const response = await axios.post(
          `${import.meta.env.VITE_base_URL}/purchase`,
          purchaseDetails, 
        );
  
        if (response.data.insertedId) {
          toast.success("Purchase successful!");
         
        }
      } catch (error) {
        toast.error("Error: Unable to complete purchase");
        console.error(error);
      }
  };

  return (
    <div className="purchase-page bg-[#EFEFEF] p-8 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#0D7C66] mb-4">Purchase {food.foodName}</h2>
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
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
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
            value={user?.email || ''} 
            readOnly
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-[#41B3A2] w-full text-white py-3 px-8 rounded-md font-semibold hover:bg-[#0D7C66] transition-all"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchase;
