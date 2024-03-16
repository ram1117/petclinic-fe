"use server";
import { z } from "zod";
import { BookingStateType } from "./types";
import apiPaths from "../apiPaths";
import getCookie from "../utils/getCookie";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const validationSchema = z.object({
  petId: z
    .string()
    .regex(/^(?!.*default).*$/, { message: "Please select a value" }),
  treatmentId: z
    .string()
    .regex(/^(?!.*default).*$/, { message: "Please select a value" }),
  doctorId: z
    .string()
    .regex(/^(?!.*default).*$/, { message: "Please select a value" }),
  slotId: z
    .string()
    .regex(/^(?!.*default).*$/, { message: "Please select a value" }),
});

const CreateBookingAction = async (
  formState: any,
  formData: FormData,
): Promise<BookingStateType> => {
  const validation = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch(apiPaths.createAppointment(), {
      method: "POST",
      headers: {
        Cookie: getCookie(),
        "Content-type": "application/json",
      },
      body: JSON.stringify(validation.data),
    });

    if (response.status !== 201) {
      const error = await response.json();
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
  } catch (error) {
    return { errors: { _form: ["Something went wrong"] } };
  }

  revalidatePath("/appointments");
  redirect("/appointments");
};

export default CreateBookingAction;
