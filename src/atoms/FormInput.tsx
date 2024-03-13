interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type: "password" | "email" | "text";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const FormInput = ({
  label,
  id,
  name,
  type,
  onChange = undefined,
  error = "",
}: FormInputProps) => (
  <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
    <label htmlFor={id} className="w-full lg:w-1/3">
      {label}
    </label>
    <div className="flex flex-col w-full lg:w-2/3">
      <input
        type={type}
        id={id}
        name={name}
        className="border-2 p-2 rounded-md "
        onChange={onChange}
      />
      {error && <p className="text-sm text-red-500 my-1">{error}</p>}
    </div>
  </div>
);

export default FormInput;
