import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";
import FormInput from "../../../atoms/FormInput";

const SigninPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign In" />
    <form className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]">
      <FormInput id="username" type="text" name="username" label="Username" />
      <FormInput
        id="password"
        type="password"
        name="password"
        label="Password"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-8 py-2 bg-link text-secondary-text my-4"
        >
          Sign In
        </button>
      </div>
    </form>
    <p className="text-center">
      Don&apos;t have an account?{" "}
      <Link
        className="text-xl font-semibold font-kanit text-link"
        href="/auth/signup"
      >
        Create an account
      </Link>
    </p>
  </div>
);

export default SigninPage;
