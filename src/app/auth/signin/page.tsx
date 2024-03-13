import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";

const SigninPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign In" />
    <form className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]">
      <div className="mmy-4 flex gap-4 lg:flex-row flex-col gap-4">
        <label htmlFor="username" className="w-full lg:w-1/3">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="border-2 p-2 rounded-md  w-full lg:w-2/3"
        />
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4">
        <label htmlFor="password" className="w-full lg:w-1/3">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-2 p-2 rounded-md w-full lg:w-2/3"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-8 py-2 bg-link text-secondary-text my-4"
        >
          Log In
        </button>
      </div>
    </form>
    <p className="text-center">
      Don&apos;t have an account?{" "}
      <Link
        className="text-xl font-semibold font-kanit text-link"
        href="/auth/signup"
      >
        Sign up
      </Link>
    </p>
  </div>
);

export default SigninPage;
