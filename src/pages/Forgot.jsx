import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../appwrite/auth";
import Input from "../components/Input";
import Button from "../components/Button";
Button;
function Forgot() {
  const { register, handleSubmit } = useForm();
  const forgot = async (data) => {
    await auth.forgetPassword(data);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl mb-4 font-semibold font-primary">
        Forgot Password
      </h1>

      <form onSubmit={handleSubmit(forgot)} className="w-1/3">
        <Input
          type="email"
          className=" border-2 my-2 w-full"
          placeholder="write your email"
          label="email"
          labelStyle="block mb-1 font-bold font-primary  "
          {...register("email", {
            required: true,
          })}
        ></Input>
        <Button
          type="submit"
          className=" bg-black mt-2 w-full p-3 text-white font-semibold rounded-md"
        >
          Forget password
        </Button>
      </form>
    </div>
  );
}

export default Forgot;
