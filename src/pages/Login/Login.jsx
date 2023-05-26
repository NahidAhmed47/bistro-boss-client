import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
//   const { logIn, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // logIn(email, password)
    //   .then((result) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Sign in Successfully!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     navigate(from, {replace:true});
    //     form.reset();
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  };
  // login with google
  const handleGoogleLogIn = () => {
    // logInWithGoogle()
    //   .then((result) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Sign in Successfully!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     navigate(from, {replace:true});
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  };
  return (
   <div className='max-container flex justify-center items-center h-screen'>
    <div className="w-full md:w-1/3">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-bold lg:text-left     
                    xl:text-bold"
      >
        Log in
      </h2>
      <div className="mt-12">
        <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        <form onSubmit={handleFormData}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <div>
                <a
                  className="text-xs font-display font-semibold text-secondary hover:text-indigo-800
                                        cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-10">
            <button className="px-4 py-2 text-lg bg-primary hover:bg-secondary rounded-full duration-300 text-white font-medium w-full">
              Log In
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleLogIn}
          className="border border-primary px-4 py-2 rounded-full flex items-center gap-2 text-primary w-full mt-5 justify-center hover:text-white hover:bg-secondary hover:border-secondary duration-300"
        >
          <FaGoogle className="w-5 h-5 "></FaGoogle> Sign in with Google
        </button>
        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
          <h1>
            Don&apos;t have an account ?{" "}
            <Link
              to="/registration"
              className="cursor-pointer text-secondary hover:text-indigo-800"
            >
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </div>
   </div> 
  );
};

export default Login;