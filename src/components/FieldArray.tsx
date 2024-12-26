import { Inputs } from "@/app/register/page";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";

type Props = {
  control: Control<Inputs>;
  register: UseFormRegister<Inputs>;
};

const FieldArray: React.FC<Props> = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "interests",
  });
  return (
    <>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id} className="p-2">
            <input type="text" {...register(`interests.${index}.name`)} />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="p-2"
        type="button"
        onClick={() => append({ name: "default" })}
      >
        append
      </button>
    </>
  );
};

export default FieldArray;
