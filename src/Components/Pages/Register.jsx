import { Link } from "react-router-dom";
import RegisterJson from "../../assets/Lottie/Register.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {user,createUser} = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault()
    const form =e.target
    const name = form.name.value 
    const email = form.email.value 
    const photo = form.photo.value 
    const password = form.password.value 


    const newUser = {name,email,photo,password}
    console.log(newUser);

    createUser(email,password)
    .then((result)=>{
      console.log(result.user);
      toast.success('Register Successfully')
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">

      <div className="w-full md:w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF6F61] text-center md:text-left mb-8">
          Register now!
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn bg-[#FF6F61] hover:bg-[#C5433A] text-white text-lg font-bold w-full">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center py-4">
          Already Registered? Please{" "}
          <Link to="/login" className="text-green-400 font-bold">
            Login
          </Link>{" "}
          Now
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="max-w-sm w-full">
          <Lottie animationData={RegisterJson} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
