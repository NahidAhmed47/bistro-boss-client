import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const SocialSignIn = () => {
    const {logInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.from?.state?.pathname || "/";
  // sign in with google
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        const saveUser = { name: result.user.displayName, email: result.user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account Created Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="border border-primary px-4 py-2 rounded-full flex items-center gap-2 text-primary w-full mt-5 justify-center hover:text-white hover:bg-secondary hover:border-secondary duration-300"
    >
      <FaGoogle className="w-5 h-5 "></FaGoogle> Sign up with Google
    </button>
  );
};

export default SocialSignIn;
