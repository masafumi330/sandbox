'use client';

import { Control, useForm, useWatch } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  age: number;
  moreDetails: boolean;
  interests: string;
};

enum GenderEnum {
  femail = "femail",
  mail = "mail",
  other = "other",
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const FullNameWatched = ({control}: {control: Control<Inputs>}) => {
  const firstName = useWatch({
    control,
    name: "firstName",
  });
  const lastName = useWatch({
    control,
    name: "lastName",
  });

  return (<p className="font-serif text-lg font-bold px-4">Full Name is <span className="bg-yellow-200 p-2">{firstName} {lastName}</span>.</p>);
}

const Register = () => {
  
  const {
    register,
    handleSubmit,
    formState : { errors },
    watch,
    control,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    await sleep(100);
    alert(JSON.stringify(data));
  }

  const moreDetails = watch("moreDetails");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <h1>Async Submit Validation</h1>

      <label>First Name</label>
      <input {...register("firstName", {required: true}) } placeholder="Bil" className="border p-1"/>
      {errors.firstName && <span className="text-red-500">This field is required.</span>}
      <label>Last Name</label>
      <input {...register("lastName")} placeholder="Luo" className="border p-1"/>

      <FullNameWatched control={control}/>

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

      <label>More Details</label>
      <input type="checkbox" {...register("moreDetails")}/>

      {moreDetails && (
        <>
          <label>Interests</label>
          <input {...register("interests")} className="border p-1"/>
        </>
      )}

      <input type="submit"/>

    </form>
  )
}

export default Register;
