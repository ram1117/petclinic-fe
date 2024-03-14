"use server";

import z from "zod";
import { SignupFormStateType } from "./types";
import { redirect } from "next/navigation";

const validationSchema = z
  .object({
    fullname: z.string().min(6, { message: "should be at least 6 characters" }),
    username: z.string().min(8, { message: "should be at least 8 characters" }),
    email: z.string().email({ message: "Not a valid email" }),
    password: z
      .string()
      .min(8, { message: "should be at least 8 characters" })
      .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message:
          "should contain atleast one capital letter, one number and one small letter",
      }),
    confirmpassword: z.string().min(8),
  })
  .refine((schema) => schema.password === schema.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });

const SignupAction = async (
  formState: SignupFormStateType,
  formData: FormData,
): Promise<SignupFormStateType> => {
  const validateFormData = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validateFormData.success) {
    return { errors: validateFormData.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(validateFormData.data),
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
  redirect("/auth/signin");
};

export default SignupAction;
