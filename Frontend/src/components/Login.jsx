import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Login successfully!');
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          // Delay the reload to allow toast notification to show
          setTimeout(() => {
            window.location.reload();
          }, 1500); // 1.5 seconds delay
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error :" + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </a>

              <h3 className="font-bold text-xl">Login</h3>
              <div>
                <label className="input input-bordered flex items-center gap-2 my-5">
                  <input
                    type="email"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span class="text-sm text-red-500">required *</span>
                  )}
                </label>
                <label className="input input-bordered flex items-center gap-2 my-5">
                  <input
                    type="password"
                    className="grow"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span class="text-sm text-red-500 "> required *</span>
                  )}
                </label>
              </div>
              <div class="flex pl-1">
                <button
                  className="btn btn-secondary hover:bg-pink-600 px-4 py-0"
                  type="submit"
                >
                  Login
                </button>
                <p class="pl-2 mt-5">
                  Not registered!{" "}
                  <a href="/signup" class="text-blue-500 underline">
                    SignUp
                  </a>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
