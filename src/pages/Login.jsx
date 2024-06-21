import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import auth from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../tools/authSlice";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const Login = async (data) => {
    const user = await auth.login(data);
    if (user) {
      const userData = await auth.getUser();
      if (userData) dispatch(login());
      navigate("/home");
    }
  };
  const google = async () => {
    await auth.OauthGoogle();
    dispatch(login);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3">
        <h1 className="text-3xl text-center mb-4 font-semibold ">
          Welcome Back!!
        </h1>
        <form onSubmit={handleSubmit(Login)}>
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
            type="submit"
            classname="w-full text-lg mt-3 font-semibold  bg-black text-white"
          >
            Login
          </Button>
        </form>
        <span
          onClick={() => {
            navigate("/forgot-password");
          }}
          className=" text-right block font-medium my-2 cursor-pointer"
        >
          forgot your password?
        </span>
        <p className=" font-medium my-2 text-xl  ">Login via another method?</p>
        <Button
          onClick={() => {
            google();
          }}
          classname=" text-lg flex items-center justify-center w-full mt-3 text-black bg-white border-2 font-semibold border-slate-300"
        >
          <FcGoogle className="mr-4" />
          Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
