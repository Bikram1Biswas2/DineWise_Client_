import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa"; // Trash icon
import { AuthContext } from "../Provider/AuthProvider"; // Import Auth Context

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext); // Get the logged-in user's email

  // Fetch orders when the component loads
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_base_URL}/myOrders/${user?.email}`
        );
        setOrders(response.data); // Update state with fetched orders
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?.email) {
      fetchOrders(); // Fetch orders only if user email exists
    }
  }, [user?.email]);

  // Handle delete order (optional)
  const handleDelete = async (orderId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_base_URL}/purchase/${orderId}`
      );
      setOrders(orders.filter((order) => order._id !== orderId)); // Remove the deleted order
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-[#55AD9B] mb-6 underline">
        My Orders
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
                    onClick={() => handleDelete(order._id)}
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
