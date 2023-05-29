import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialSignIn from "../../components/SocialSignIn";

const Registration = () => {
  const { signUp, updateUser, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.from?.state?.pathname || "/";
  const handleFormData = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    signUp(email, password)
      .then((result) => {
        updateUser(name, photo)
          .then(() => {
            const saveUser = {
              name: result.user.displayName,
              email: result.user.email,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(from, { replace: true });
                  form.reset();
                }
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className="min-h-[70vh] max-w-[500px] mx-auto md:mt-28 my-10  px-8 md:px-0 ">
      <h2
        className="text-center text-4xl text-indigo-900 font-display font-bold lg:text-left     
                    xl:text-bold"
      >
        Sign up
      </h2>
      <div className="mt-12">
        <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        <form onSubmit={handleFormData}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Your Name
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mt-8">
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
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Photo Url
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
              type="text"
              name="photo"
              placeholder="Enter url"
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
              Sign up
            </button>
          </div>
        </form>
        <SocialSignIn></SocialSignIn>
        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
          <h1>
            Already have an account ?{" "}
            <Link
              to="/login"
              className="cursor-pointer text-secondary hover:text-indigo-800"
            >
              Log in
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;
