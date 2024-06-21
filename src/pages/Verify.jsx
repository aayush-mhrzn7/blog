import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../appwrite/auth";
function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const secretd = urlParams.get("secret");
  const userID = urlParams.get("userId");
  const verification = async () => {
    try {
      await auth.updateVerification(userID, secretd);
      navigate("/home");
    } catch (error) {
      console.log("error");
    }
  };
  verification();
  return <div></div>;
}

export default Verify;
