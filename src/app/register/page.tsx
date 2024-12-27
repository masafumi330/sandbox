"use client";

import FieldArray from "@/components/FieldArray";
import { Control, FormProvider, useForm, useWatch } from "react-hook-form";

export type Inputs = {
  firstName: string;
  lastName: string;
  interests: Array<Interest>;
};

export type Interest = {
  name: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const FullNameWatched = ({ control }: { control: Control<Inputs> }) => {
  const firstName = useWatch({
    control,
    name: "firstName",
  });
  const lastName = useWatch({
    control,
    name: "lastName",
  });

  return (
    <p className="font-serif text-lg font-bold px-4">
      Full Name is{" "}
      <span className="bg-gray-200 p-2 text-black">
        {firstName} {lastName}
      </span>
      .
    </p>
  );
};

const Register = () => {
  const methods = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      firstName: "Bill",
      lastName: "Luo",
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: Inputs) => {
    await sleep(100);
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <h1>Async Submit Validation</h1>

        <label>First Name</label>
        <input
          {...register("firstName", { required: "required" })}
          placeholder="Bill"
          className="border p-1"
          defaultValue={""}
        />
        {errors.firstName && (
          <span className="text-red-500">{errors.firstName.message}</span>
        )}
        <label>Last Name</label>
        <input
          {...register("lastName", { required: "required" })}
          placeholder="Luo"
          className="border p-1"
        />

        <FullNameWatched control={control} />

        <FieldArray />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default Register;
