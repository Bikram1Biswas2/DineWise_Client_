import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const UpdatePage = () => {
    const {user} = useContext(AuthContext)
    const { id } = useParams(); // Get the food ID from the URL
    const [food, setFood] = useState(null);
  
    useEffect(() => {
      const fetchFood = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_base_URL}/foods/${id}`
          );
          setFood(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchFood();
    }, [id]);

    const handleUpdateFood = async(e) => {
        e.preventDefault();
    
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;
    
        const updatedFood = {
          foodName,
          foodImage,
          foodCategory,
          quantity,
          price,
          foodOrigin,
          description,
          userName: user?.displayName,
          userEmail: user?.email,
        };

        try{
            const response = await axios.put(`${import.meta.env.VITE_base_URL}/foods/${id}`,updatedFood)
            if(response.data.modifiedCount >0){
                toast.success('Food Item Updated Successfully')
            }
        } catch(error){
               console.error(error)
               toast.error("Failed To Update")
        }
    }

    if (!food) {
        return <span className="loading loading-dots loading-lg"></span>;
      }

    return (
        <div className="w-7/12 mx-auto">
        <h2 className="text-3xl font-bold text-center my-7 underline text-[#55AD9B]">
          Update Food
        </h2>
        <form onSubmit={handleUpdateFood} className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="block mb-2 font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              defaultValue={food.foodName}
              placeholder="Enter food name"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          {/* Food Image */}
          <div>
            <label className="block mb-2 font-medium">Food Image URL</label>
            <input
              type="text"
              name="foodImage"
              defaultValue={food.foodImage}
              placeholder="Enter food image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          {/* Food Category */}
          <div>
            <label className="block mb-2 font-medium">Food Category</label>
            <input
              type="text"
              name="foodCategory"
              defaultValue={food.foodCategory}
              placeholder="Enter food category"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          {/* Quantity */}
          <div>
            <label className="block mb-2 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={food.quantity}
              placeholder="Enter quantity"
              className="input input-bordered w-full"
              min="1"
              required
            />
          </div>
  
          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={food.price}
              placeholder="Enter price"
              className="input input-bordered w-full"
              min="0"
              required
            />
          </div>
  
          {/* Food Origin */}
          <div>
            <label className="block mb-2 font-medium">
              Food Origin (Country)
            </label>
            <input
              type="text"
              name="foodOrigin"
              defaultValue={food.foodOrigin}
              placeholder="Enter food origin (country)"
              className="input input-bordered w-full"
              required
            />
          </div>
  
          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={food.description}
              placeholder="Enter a short description of the food item"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
  
          {/* User Email */}
          <div>
            <label className="block mb-2 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>
  
          {/* User Name */}
          <div>
            <label className="block mb-2 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName || ""}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>
  
          {/* Add Item Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-[#95D2B3] w-full text-2xl font-bold"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    );
};

export default UpdatePage;