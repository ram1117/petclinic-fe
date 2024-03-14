import Link from "next/link";
import HeaderWrapper from "../../../atoms/HeaderWrapper";
import SigninForm from "../../../components/auth/SigninForm";

const SigninPage = () => (
  <div>
    <HeaderWrapper className="text-center" title="Sign In" />
    <SigninForm />
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
