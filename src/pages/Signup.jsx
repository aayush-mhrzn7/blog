import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth from "../../appwrite/auth";
import { login } from "../../tools/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    const user = await auth.signup(data);
    if (user) {
      await auth.verification();
      dispatch(login);
      /*  if (verificaiton) {
        const userData = await auth.getUser();
        if (userData) {
        
        }
        navigate("/");
      } */
    }
  };
  const google = async () => {
    await auth.OauthGoogle();
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3">
        <h1 className="text-3xl text-center mb-4 font-semibold ">Join us!!</h1>
        <form onSubmit={handleSubmit(signup)}>
          <Input
            type="text"
            placeholder="what is your name"
            className=" w-full border-2 my-2 "
            label="Name"
            labelStyle="mt-3 font-medium"
            {...register("name", { required: true })}
          />
          <Input
            type="email"
            placeholder="what is your email"
            className=" w-full border-2 my-2 "
            label="Email"
            labelStyle="mt-3 font-medium"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            type="password"
            placeholder="what is your password"
            className=" w-full border-2 my-2 "
            label="Password"
            labelStyle="mt-3 font-medium"
            {...register("password", { required: true })}
          />
          <Button
            classname="w-full text-lg mt-3 font-semibold  bg-black text-white"
            type="submit"
          >
            Signup
          </Button>
        </form>
        <span className=" text-right block font-medium my-2 cursor-pointer">
          already have a account?
        </span>
        <p className=" font-medium my-2 text-xl  ">
          Sign up via another method?
        </p>
        <Button
          onClick={() => google()}
          classname=" text-lg flex items-center justify-center w-full mt-3 text-black bg-white border-2 font-semibold border-slate-300"
        >
          <FcGoogle className="mr-4" />
          Google
        </Button>
      </div>
    </div>
  );
}

export default Signup;
