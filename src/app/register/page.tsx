'use client';

import { useForm } from "react-hook-form";

type Inputs = {
  userName: string;
  lastName: string;
  email: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Register = () => {
  
  const {
    register,
    handleSubmit,
    formState : { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await sleep(100);
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <h1>Async Submit Validation</h1>

      <label>User Name</label>
      <input {...register("userName", {required: true}) } placeholder="Bil" className="border p-1"/>
      {errors.userName && <span className="text-red-500">This field is required.</span>}
      <label>Last Name</label>
      <input {...register("lastName")} placeholder="Luo" className="border p-1"/>

      <label>Email</label>
      <input {...register("email", {required: true})} placeholder="example@gmail.com" className="border p-1"/>
      {errors.email && <span className="text-red-500">This field is required.</span>}

      <input type="submit"/>

    </form>
  )
}

export default Register;
