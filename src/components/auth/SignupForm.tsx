"use client";

import { useFormState } from "react-dom";
import SignupAction from "../../actions/SignupAction";
import FormInput from "../../atoms/FormInput";
import { SignupFormStateType } from "../../actions/types";

const initialState: SignupFormStateType = {
  errors: {
    _form: [""],
  },
};

const SignupForm = () => {
  const [formState, formAction] = useFormState(SignupAction, initialState);

  return (
    <form
      className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]"
      action={formAction}
    >
      <FormInput
        id="fullname"
        type="text"
        name="fullname"
        label="Full Name"
        error={formState.errors["fullname"]?.join(" , ")}
      />
      <FormInput
        id="email"
        type="email"
        name="email"
        label="E-Mail"
        error={formState.errors["email"]?.join(" , ")}
      />
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
      <FormInput
        id="confirmpassword"
        type="password"
        name="confirmpassword"
        label="Confirm Password"
        error={formState.errors["confirmpassword"]?.join(" , ")}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-8 py-2 bg-link text-secondary-text my-4"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
