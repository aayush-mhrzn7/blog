import React from "react";
import { useDispatch } from "react-redux";
import auth from "../../appwrite/auth";
import { logout } from "../../tools/authSlice";
import { useNavigate } from "react-router-dom";

function Logout({ ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = async () => {
    auth.logout();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
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
