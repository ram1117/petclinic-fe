"use server";
import z from "zod";
import { SigninFormStateType } from "./types";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import apiPaths from "../apiPaths";

const validationSchema = z.object({
  username: z
    .string()
    .min(8, { message: "username should be at least 8 characters" }),
  password: z
    .string()
    .min(8, { message: "password should be at least 8 characters " }),
});

const SigninAction = async (
  formState: SigninFormStateType,
  formData: FormData,
): Promise<SigninFormStateType> => {
  const validation = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch(apiPaths.signin(), {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(validation.data),
    });

    const message = await response.json();
    if (response.status !== 201) {
      return { errors: { _form: [message] } };
    }

    const setCookieHeader = response.headers.get("Set-Cookie");
    if (setCookieHeader) {
      const jwtToken = setCookieHeader.split(";")[0].split("=")[1];
      cookies().set("access_token", jwtToken, { httpOnly: true });
    }
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    }
    return {
      errors: {
        _form: ["Something went wrong."],
      },
    };
  }
  redirect("/account");
};

export default SigninAction;
