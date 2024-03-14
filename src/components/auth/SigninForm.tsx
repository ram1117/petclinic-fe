"use client";

import FormInput from "../../atoms/FormInput";
import { SigninFormStateType } from "../../actions/types";
import { useFormState } from "react-dom";
import SigninAction from "../../actions/SigninAction";

const SigninForm = () => {
  const initialState: SigninFormStateType = { errors: { _form: [""] } };
  const [formState, formAction] = useFormState(SigninAction, initialState);

  return (
    <form
      className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]"
      action={formAction}
    >
      <FormInput
        id="username"
        type="text"
        name="username"
        label="Username"
        error={formState.errors["username"]?.join(" , ")}
      />
      <FormInput
        id="password"
        type="password"
        name="password"
        label="Password"
        error={formState.errors["password"]?.join(" , ")}
      />
      {formState.errors["_form"] && (
        <p className="text-sm text-red-500 my-2">
          {formState.errors["_form"].join(" , ")}
        </p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-8 py-2 bg-link text-secondary-text my-4"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
