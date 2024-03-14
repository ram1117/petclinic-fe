"use server";
import z from "zod";
import { SigninFormStateType } from "./types";

const validationSchema = z.object({
  username: z
    .string()
    .min(8, { message: "username should be at least 8 characters" }),
  password: z
    .string()
    .min(8, { message: "password should be at least 8 characters " }),
});

const SigninAction = async (
  SigninFormStateType: any,
  formData: FormData,
): Promise<SigninFormStateType> => {
  const validation = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }
  return { errors: { _form: [""] } };
};

export default SigninAction;
