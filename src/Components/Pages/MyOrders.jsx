import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa"; 
import { AuthContext } from "../Provider/AuthProvider"; 
import Swal from "sweetalert2";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_base_URL}/myOrders/${user?.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?.email) {
      fetchOrders(); 
    }
  }, [user?.email]);

  const handleDelete = async (orderId) => {
    try {
    
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to Delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      // If the user confirmed the deletion
      if (result.isConfirmed) {
        const response = await axios.delete(
          `${import.meta.env.VITE_base_URL}/purchase/${orderId}`
        );

        if (response.status === 204) {
          setOrders(orders.filter((order) => order._id !== orderId));
          Swal.fire({
            title: "Deleted!",
            text: "Your order has been deleted.",
            icon: "success"
          });
        } else {
          toast.error("Failed to delete the order.");
        }
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete the order.");
    }
  };
  
  

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-[#55AD9B] mb-6 underline">
        My Orders: {orders.length}
      </h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">You have no orders yet.</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg">
          <thead>
            <tr className="bg-[#55AD9B] text-white">
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-4">{order.foodName}</td>
                <td className="p-4">${order.price}</td>
                <td className="p-4">{order.buyerName}</td>
                <td className="p-4">{order.buyingDate}</td>
                <td className="p-4">
                  <button
                    onClick={() =>handleDelete(order._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
