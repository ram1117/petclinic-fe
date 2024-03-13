import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";

const SignupPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign Up" />
    <form className="w-full p-4 lg:w-2/3 mx-auto my-4 max-w-[600px]">
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="fullname" className="w-full lg:w-1/3">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="border-2 p-2 rounded-md  w-full lg:w-2/3"
        />
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="email" className="w-full lg:w-1/3">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 p-2 rounded-md  w-full lg:w-2/3"
        />
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
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
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
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
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="password1" className="w-full lg:w-1/3">
          Confirm Password
        </label>
        <input
          type="password"
          id="password1"
          name="password1"
          className="border-2 p-2 rounded-md w-full lg:w-2/3"
        />
      </div>
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
