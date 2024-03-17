import { useEffect, useState } from "react";
import apiPaths from "../../apiPaths";
import FormInput from "../../atoms/FormInput";
import AddPetAction from "../../actions/AddPetAction";
import { useFormState } from "react-dom";
import { useCallback } from "react";

interface AddPetFormProps {
  setOpenForm: Function;
}

const AddPetForm = ({ setOpenForm }: AddPetFormProps) => {
  const callback = useCallback(setOpenForm, [setOpenForm]);

  const [types, setTypes] = useState([]);
  const [formState, formAction] = useFormState(AddPetAction, {
    success: false,
    errors: {},
  });

  useEffect(() => {
    fetch(apiPaths.getPetTypes())
      .then((response) => response.json())
      .then((data) => setTypes(data));
  }, []);

  useEffect(() => {
    if (formState.success) {
      callback();
    }
  }, [formState.success, callback]);

  return (
    <form action={formAction}>
      <FormInput label="Pet Name" id="name" name="name" type="text" required />
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="peType" className="w-full lg:w-1/3">
          Pet Type
        </label>

        <select
          id="petType"
          name="petTypeId"
          className="bg-white border-2 p-2 rounded-md w-full lg:w-2/3"
        >
          {types &&
            types.map((item: { id: string; type: string }) => (
              <option key={item.id} value={item.id}>
                {item.type}
              </option>
            ))}
        </select>
      </div>
      <div className="my-4 flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-6 py-1 lg:py-2 bg-link text-sm lg:text-base text-secondary-text"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPetForm;
