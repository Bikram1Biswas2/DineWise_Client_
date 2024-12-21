import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
              <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl pl-6 mt-8">
          <h1 className="text-5xl font-bold p-8 text-[#55AD9B]">Login now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#55AD9B] text-xl font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#55AD9B] text-xl font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF6F61] hover:bg-[#c5433a] text-white text-xl font-bold">Sign In</button>
            </div>
          </form>
           <p className="text-center py-3">New to this Website?Please <Link to='/register' className="text-red-700">Register</Link> First</p>
        </div>
        </div>
    );
};

export default Login;