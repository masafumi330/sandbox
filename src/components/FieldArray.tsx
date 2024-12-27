import { Inputs } from "@/app/register/page";
import { useFieldArray, useFormContext } from "react-hook-form";

const FieldArray: React.FC = ({}) => {
  const { control, register } = useFormContext<Inputs>();
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
        onClick={() => append({ name: "" })}
      >
        append
      </button>
    </>
  );
};

export default FieldArray;
