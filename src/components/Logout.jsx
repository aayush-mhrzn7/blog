import React from "react";
import { useDispatch } from "react-redux";
import auth from "../../appwrite/auth";
import { logout } from "../../tools/authSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = async () => {
    auth.logout();
    dispatch(logout);
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={() => Logout()}
        className=" text-white bg-black p-3 w-96"
      >
        logout
      </button>
    </div>
  );
}

export default Logout;