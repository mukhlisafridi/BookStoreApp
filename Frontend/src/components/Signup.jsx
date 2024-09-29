import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const navigate = useNavigate(); // useNavigate hook for navigation

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Signup successfully!');
          // window.location.reload()
          // navigate("/")
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          // Redirect to login page after successful signup
          setTimeout(() => {
            navigate('/login'); // Redirect to login page
          }, 1500); // Optional delay to allow toast to show
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box border-[2px] shadow-md p-10 rounded-lg w-[500px] h-[250 px]">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
          <h3 className="font-bold text-2xl">Signup</h3>
          <div>
            <label className="input input-bordered flex items-center gap-2 my-5">
              <input type="text" className="grow text-xl" placeholder="Username" {...register("name", { required: true })} />
              {errors.name && <span className="text-sm text-red-500">required *</span>}
            </label>

            <label className="input input-bordered flex items-center gap-2 my-5">
              <input type="email" className="grow text-xl" placeholder="Email" {...register("email", { required: true })} />
              {errors.email && <span className="text-sm text-red-500">required *</span>}
            </label>

            <label className="input input-bordered flex items-center gap-2 my-5">
              <input type="password" className="grow text-xl" {...register("password", { required: true })} />
              {errors.password && <span className="text-sm text-red-500">required *</span>}
            </label>
          </div>

          <div className="flex pl-1">
            <button className="btn btn-secondary hover:bg-pink-600 px-4 py-0">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};
