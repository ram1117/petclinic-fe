import ImageWrapper from "./ImageWrapper";
import ShowPassIcon from "@public/icons/icon-show-pass.svg";
import HidePassIcon from "@public/icons/icon-hide-pass.svg";
import { useEffect, useState } from "react";

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormPassword = ({
  label,
  id,
  name,
  onChange = undefined,
}: FormInputProps) => {
  const [showPass, setShowPass] = useState(false);
  useEffect(() => {
    console.log(showPass);
  }, [showPass]);

  const ShowPassImage = (
    <ImageWrapper
      src={ShowPassIcon}
      alt="show password"
      containerSize="h-4 w-4"
    />
  );

  const HidePassImage = (
    <ImageWrapper
      src={HidePassIcon}
      alt="hide password"
      containerSize="h-4 w-4"
    />
  );

  const handleClick = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
      <label htmlFor={id} className="w-full lg:w-1/3">
        {label}
      </label>
      <div className="border-2 rounded-md  w-full lg:w-2/3 relative">
        <input
          type={showPass ? "text" : "password"}
          id={id}
          name={name}
          className="p-2 w-full"
          onChange={onChange}
        />
        <button
          onClick={handleClick}
          className="absolute right-[4px] top-[30%]"
        >
          {showPass ? HidePassImage : ShowPassImage}
        </button>
      </div>
    </div>
  );
};

export default FormPassword;
