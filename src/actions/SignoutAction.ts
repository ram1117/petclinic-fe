"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignoutAction = async () => {
  cookies().delete("access_token");
  redirect("/");
};

export default SignoutAction;
