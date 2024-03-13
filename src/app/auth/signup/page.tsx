import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";
import FormInput from "../../../atoms/FormInput";

const SignupPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign Up" />
    <form className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]">
      <FormInput id="fullname" type="text" name="fullname" label="Full Name" />
      <FormInput id="email" type="email" name="email" label="E-Mail" />
      <FormInput id="username" type="text" name="username" label="Username" />
      <FormInput
        id="password"
        type="password"
        name="password"
        label="Password"
      />
      <FormInput
        id="password1"
        type="password"
        name="password1"
        label="Confirm Password"
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
    <p className="text-center">
      Already have an account?{" "}
      <Link
        className="text-xl font-semibold font-kanit text-link"
        href="/auth/signin"
      >
        Sign in
      </Link>
    </p>
  </div>
);

export default SignupPage;
