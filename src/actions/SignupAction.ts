"use server";

import z from "zod";
import { SignupFormStateType } from "./types";

const validationSchema = z
  .object({
    fullname: z
      .string()
      .min(6, { message: "should be at least 6 characters long" }),
    username: z
      .string()
      .min(6, { message: "should be at least 6 characters long" }),
    email: z.string().email({ message: "Not a valid email" }),
    password: z
      .string()
      .min(8, { message: "should be at least 8 characters long" })
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
  return {
    errors: {
      _form: [""],
    },
  };
};

export default SignupAction;
