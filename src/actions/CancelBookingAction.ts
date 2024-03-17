"use server";

import { revalidatePath } from "next/cache";
import apiPaths from "../apiPaths";
import getCookie from "../utils/getCookie";
import { redirect } from "next/navigation";

const CancelBookingAction = async (id: string): Promise<{ errors: string }> => {
  try {
    const response = await fetch(apiPaths.cancelAppointemnt(id), {
      method: "DELETE",
      headers: {
        Cookie: getCookie(),
      },
    });

    if (response.status != 200) {
      const data = await response.json();
      return { errors: data.message };
    }
  } catch (error) {
    if (error instanceof Error) return { errors: error.message };
    return { errors: "Something went wrong" };
  }
  revalidatePath("/appointments");
  redirect("/appointments");
};

export default CancelBookingAction;
