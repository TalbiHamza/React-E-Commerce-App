import React, { useState } from "react";
import user from "../../assets/user.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../../services/userServices";

const schema = z
  .object({
    name: z.string().min(3, { message: "enter" }),
    email: z.string().email(),
    password: z.string().min(8),
    confirm_password: z.string(),
    delivery_address: z.string().min(15),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

const SignUp = () => {
  const [profileImage, setprofileImage] = useState(null);
  const [formErrors, setformErrors] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      await signup(formData, profileImage);
      window.location = "/";
    } catch (err) {
      if (err.response && err.response.status === 400)
        setformErrors(err.response.data.message);
    }
  };

  return (
    <section className=" bg-white w-[40%] mx-auto my-10  pt-6 pb-10">
      <form
        action=""
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold  mb-4">SignUp Form</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src={profileImage ? URL.createObjectURL(profileImage) : user}
            alt=""
            className="w-24 h-24 rounded-full mb-3"
          />
          <label
            htmlFor="user_image"
            className="bg-indigo-600 text-white rounded py-1 px-2 cursor-pointer"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="user_image"
            {...register("user_image")}
            hidden
            onChange={(e) => setprofileImage(e.target.files[0])}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 w-[80%] ">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="border-0 outline-none bg-black/5 rounded py-1 px-2 font-[500] shadow-md ring-1 ring-black/10 ring-inset focus:ring-2 focus:ring-black/15"
              placeholder="Enter Your Name"
              {...register("name")}
            />
            {errors.name?.message && (
              <em className="text-red-600"> {errors.name.message} </em>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-0 outline-none bg-black/5 rounded py-1 px-2 font-[500] shadow-md ring-1 ring-black/10 ring-inset focus:ring-2 focus:ring-black/15"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            {errors.email?.message && (
              <em className="text-red-600"> {errors.email.message} </em>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-0 outline-none bg-black/5 rounded  py-1 px-2 font-[500] shadow-md ring-1 ring-black/10 ring-inset focus:ring-2 focus:ring-black/15"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            {errors.password?.message && (
              <em className="text-red-600"> {errors.password.message} </em>
            )}
          </div>{" "}
          <div className="flex flex-col">
            <label htmlFor="confirm_password" className="font-semibold">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="border-0 outline-none bg-black/5 rounded  py-1 px-2 font-[500] shadow-md ring-1 ring-black/10 ring-inset focus:ring-2 focus:ring-black/15"
              placeholder="Confirm Your Password"
              {...register("confirm_password")}
            />
            {errors.confirm_password?.message && (
              <em className="text-red-600">
                {errors.confirm_password.message}
              </em>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-8  w-[80%]">
          <label htmlFor="delivery_address" className="font-semibold">
            Delivery Address
          </label>
          <textarea
            placeholder="Enter delivery address"
            id="delivery_address"
            className="border-0 outline-none bg-black/5 rounded  py-1 px-2 font-[500] shadow-md ring-1 ring-black/10 ring-inset focus:ring-2 focus:ring-black/15 h-28"
            {...register("delivery_address")}
          ></textarea>
          {errors.delivery_address?.message && (
            <em className="text-red-600">{errors.delivery_address.message}</em>
          )}
        </div>
        {formErrors && <em className="mt-2 text-red-500">{formErrors}</em>}
        <button className="mt-8 bg-indigo-600 text-white rounded py-1 text-[18px] font-[500] w-[80%]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignUp;
