import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";



const MyFood = () => {

    const {user} = useContext(AuthContext)
    const [myFood, setMyFood] = useState([])
    const [loading,setLoading] = useState(true)

   useEffect(()=>{
    if(user && user.email){
        const myFood = async()=>{
            try{
 setLoading(true)
 const response = await axios.get(`${import.meta.env.VITE_base_URL}/myPurchaseFood/${user.email}`)
 setMyFood(response.data)
            }catch(error){
                  console.log(error);
            }finally{
                setLoading(false)
            }
        }
        myFood()
    }

   },[user])

   if(loading){
    return <span className="loading loading-bars loading-lg"></span>
   }

    return (
        <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center mt-8 text-[#55AD9B]">My Added Foods</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
            
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myFood.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No foods added yet.
                  </td>
                </tr>
              ) : (
                myFood.map((food,index) => (
                  <tr key={food._id} index={index}>
                    <td>{index+1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={food.foodImage}
                              alt={food.name}
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>{food.foodName}</td>
                    <td>{food.foodCategory}</td>
                    <td>${food.price}</td>
                    <th>
                      <Link to={`/updateFood/${food._id}`} className="text-fuchsia-600 btn-md h-6"><GrDocumentUpdate /></Link>
                    </th>
                  </tr>
                ))
              )}
            </tbody> 
          </table>
        </div>
      </div>
    );
};

export default MyFood;