"use server";
import z from "zod";
import { SigninFormStateType } from "./types";
import { redirect } from "next/navigation";

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
    const response = await fetch("http://localhost:3001/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(validation.data),
    });

    if (response.status !== 201) {
      const { message } = await response.json();
      return { errors: { _form: [message] } };
    }
  } catch (error) {
    return {
      errors: {
        _form: ["Something went wrong."],
      },
    };
  }
  redirect("/");
};

export default SigninAction;
