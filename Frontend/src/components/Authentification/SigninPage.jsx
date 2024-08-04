import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUser, signin } from "../../services/userServices";
import { Navigate, useLocation } from "react-router-dom";

const schema = z.object({
  email: z.string().email().min(3),
  password: z.string().min(8),
});

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [formErrors, setformErrors] = useState("");

  const location = useLocation();

  const onSubmit = async (formData) => {
    try {
      await signin(formData);

      window.location = location.state ? location.state.from : "/";
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setformErrors(err.response.data.message);
      }
    }
  };

  if (getUser()) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <section className="bg-white w-[30%] mx-auto my-10">
      <form
        action=""
        className="w-[100%] flex flex-col items-center py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-[24px] font-bold mb-4">Login Form</h2>
        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-[18px] font-[600] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="border-0 py-1.5 px-3 rounded-lg bg-[#f6f8fa] font-[500] shadow-sm outline-none ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-black/30"
              {...register("email")}
            />
            {errors.email?.message && (
              <em className="text-red-600">{errors.email?.message}</em>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-[18px] font-[600] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="border-0 py-1.5 px-3 rounded-lg bg-[#f6f8fa] font-[500] shadow-sm outline-none ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-black/30"
              {...register("password")}
            />
            {errors.password?.message && (
              <em className="text-red-600">{errors.password?.message}</em>
            )}
          </div>
          {formErrors && (
            <em className="text-red-500 font-semibold">{formErrors}</em>
          )}
          <button className="mt-4 bg-indigo-600 text-white rounded py-1 text-[18px] font-[500]">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SigninPage;
