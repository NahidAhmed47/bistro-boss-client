import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialSignIn from "../../components/SocialSignIn";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [captchaStatus, setCaptchaStatus] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)==true) {
        setCaptchaStatus(true)
    }

    else {
        setCaptchaStatus(false)
    }
  }
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(!captchaStatus){
        Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Please provide valid captcha!",
                  showConfirmButton: false,
                  timer: 1500,
                });
            return;
    }
    logIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign in Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, {replace:true});
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
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
          <div>
          <div className="text-sm font-bold text-gray-700 tracking-wide mt-3">
                <LoadCanvasTemplate />
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              type="text"
              name="captcha"
              placeholder="Type text above"
              onBlur={handleCaptcha}
              required
            />
          </div>
          <div className="mt-10">
            <button className="px-4 py-2 text-lg bg-primary hover:bg-secondary rounded-full duration-300 text-white font-medium w-full">
              Log In
            </button>
          </div>
        </form>
        <SocialSignIn></SocialSignIn>
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