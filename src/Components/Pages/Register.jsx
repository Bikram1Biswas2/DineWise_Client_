import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterJson from "../../assets/Lottie/Register.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {setUser,createUser} = useContext(AuthContext)

  const from = location?.state?.from?.pathname || '/'

  const handleRegister = e =>{
    e.preventDefault()
    const form =e.target
    const name = form.name.value 
    const email = form.email.value 
    const photo = form.photo.value 
    const password = form.password.value 

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if(!passwordRegex.test(password)){
        Swal.fire({
            title: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
            icon: "error",
            confirmButtonText: "Okay",
        });
        return;
    }


    const newUser = {name,email,photo,password}
    console.log(newUser);

    createUser(email, password)
    .then((result) => {
      // Update user profile
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          setUser({
            ...result.user,
            displayName: name,
            photoURL: photo,
          });
          navigate(from)
          toast.success("Register Successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Error updating profile:", error.message);
          toast.error("Failed to update profile.");
        });
    })
    .catch((error) => {
      console.error("Error creating user:", error.message);
      toast.error("Failed to register.");
    });
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
