'use client';

import { useForm } from "react-hook-form";

type Inputs = {
  userName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  age: number;
};

enum GenderEnum {
  femail = "femail",
  mail = "mail",
  other = "other",
}

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

      <label>Gender</label>
      <select {...register("gender")} className="border p-1">
        <option value={GenderEnum.femail}>Femail</option>
        <option value={GenderEnum.mail}>Mail</option>
        <option value={GenderEnum.other}>Other</option>
      </select>

      <label>Age</label>
      <input {...register("age", {min:0, max:99})} type="number" className="border p-1"/>
      {errors.age && <span className="text-red-500">Invalid age</span>}

      <input type="submit"/>

    </form>
  )
}

export default Register;
