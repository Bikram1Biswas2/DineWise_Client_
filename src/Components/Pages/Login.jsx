import { Link } from "react-router-dom";
import LoginJson from "../../assets/Lottie/Login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {setUser,signInUser,googleLogin} = useContext(AuthContext)

  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target 
    const email = form.email.value
    const password = form.password.value 

    const login = {email,password}
    console.log(login);

    signInUser(email,password)
    .then((result)=>{
      setUser(result.user);
      toast.success('Login Successfully')
    })
    .catch(error=>{
      console.log(error.message);
      toast.error('Login Failed')
    })
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result=>{
      setUser(result.user)
      toast.success('Google Login Successfully')
    })
    .catch((error)=>{
      console.log(error.message);
      toast.error('Google Login Failed')
    })
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">

      <div className="w-full md:w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#55AD9B] text-center md:text-left mb-8">
          Login now!
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#55AD9B] text-lg font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-[#95D2B3] hover:bg-[#55AB80] text-white text-lg font-bold w-full">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center py-4">
          New to this Website? Please{" "}
          <Link to="/register" className="text-red-700 font-bold">
            Register
          </Link>{" "}
          First
        </p>

        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full text-xl font-bold"><FcGoogle className="w-7 h-7"/>Google Login</button>
      </div>


      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="max-w-sm w-full">
          <Lottie animationData={LoginJson} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
