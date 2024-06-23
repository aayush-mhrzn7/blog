import React from "react";
import { useDispatch } from "react-redux";
import auth from "../../appwrite/auth";
import { logout } from "../../tools/authSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Logout({ ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = async () => {
    toast.success("logged out");
    auth.logout();

    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <Toaster position="top-right" />
      <button
        onClick={() => Logout()}
        {...props}
        /*  className=" text-white bg-black p-3 w-96" */
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
