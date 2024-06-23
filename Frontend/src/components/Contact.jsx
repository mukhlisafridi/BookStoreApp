import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"

  

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    
    <div class=" flex h-screen items-center justify-center">
   
  <div className="modal-box border-[2px] shadow-md p-10 rounded-lg w-[500px] h-[250 px] ">
    <form method="dialog " onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >✕</a>
   
    <h3 className="font-bold text-3xl text-center">Contact</h3>
    <div>
      {/* name */}
      <label className="input input-bordered flex items-center gap-2 my-5 mt-7 ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow text-xl" placeholder="Username"  {...register("name", { required: true })}  />
  {errors.name && <span class="text-sm text-red-500">required *</span>}
</label>
  {/* email */}
    <label className="input input-bordered flex items-center gap-2 my-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="email" className="grow text-xl" placeholder="Email"  {...register("email", { required: true })} />
  {errors.email && <span class="text-sm text-red-500">required *</span>}
</label>

{/* password */}
<label className="input input-bordered flex items-center gap-2 my-5">
  <input type="text" placeholder="Type here" className="grow text-xl"  {...register("message", { required: true })}  />
  {errors.message && <span class="text-sm text-red-500">required *</span>}
</label>
        </div>
      <div class="flex pl-1">
      <button className="btn btn-secondary hover:bg-pink-600 px-4 py-0">Submit</button>
     </div>
      </form>
  </div>
    </div>
    
    </>
  )
}
