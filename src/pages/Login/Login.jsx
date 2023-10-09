import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Registration successful!"); // Show a success toast message

        const redirectTo = location.state ? location.state.from : "/";
        setTimeout(() => {
          window.location.href = redirectTo; // Redirect after a delay
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast("Registration successful!"); // Show a success toast message

      const redirectTo = navigate(location?.state ? location.state : "/");
      setTimeout(() => {
        window.location.href = redirectTo;
      }, 2000);
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <ToastContainer />
        <div className="hero-content flex-col">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold">Login Your Account</h1>
          </div>
          <div className="card  w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
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
                <button className="btn bg-black hover:bg-black text-white">
                  Login
                </button>
                <div className="mt-5">
                  <p className="flex justify-center items-center">
                    Login with:
                    <FaGoogle
                      onClick={handleGoogle}
                      className="text-3xl inline ml-2"
                    ></FaGoogle>
                  </p>
                </div>
                <p className="mt-4 block text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Don&#39;t have an account? Please{" "}
                  <Link
                    className="font-medium text-black transition-colors hover:text-pink-500"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
