import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../appwrite/auth";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
function Reset() {
  const { register, handleSubmit } = useForm();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const secretd = urlParams.get("secret");
  const userID = urlParams.get("userId");
  const reset = async (data) => {
    const reset = await auth.updatePassword(userID, secretd, data);
    if (reset) {
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="mb-7 text-2xl font-semibold font-primary">
        Change your password.
      </h1>
      <form onSubmit={handleSubmit(reset)} className="w-1/3">
        <Input
          type="password"
          className="my-2 w-full border-2 font-primary"
          placeholder="what is your password"
          label="password"
          labelStyle="   block mb-1 font-semibold font-primary  "
          {...register("password", {
            required: true,
          })}
        ></Input>
        <Input
          type="password"
          className="my-2 w-full border-2 font-primary"
          placeholder="what is your password"
          label="re-password"
          labelStyle=" block mb-1 font-semibold font-primary  "
          {...register("repassword", {
            required: true,
          })}
        ></Input>
        <Button
          type="submit"
          className=" bg-black mt-2 w-full rounded-md  font-semibold font-primary text-white p-3 "
          onClick={() => reset()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Reset;
