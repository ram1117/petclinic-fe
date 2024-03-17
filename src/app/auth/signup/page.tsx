import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";
import SignupForm from "../../../components/auth/SignupForm";

const SignupPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign Up" />
    <SignupForm />
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
