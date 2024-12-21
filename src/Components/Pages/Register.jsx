import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
           <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl pl-6 mt-8">
          <h1 className="text-5xl font-bold p-8 text-[#55AD9B]">Register now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#55AD9B] text-xl font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text text-[#55AD9B] text-xl font-semibold">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF6F61] hover:bg-[#c5433a] text-white text-xl font-bold">Sign Up</button>
            </div>
          </form>
           <p className="text-center py-3">Already Registered ?Please <Link to='/login' className="text-green-400">Login</Link> Now</p>
        </div>
        </div>
    );
};

export default Register;