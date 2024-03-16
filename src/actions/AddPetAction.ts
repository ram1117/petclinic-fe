"use server";

import getCookie from "../utils/getCookie";
import apiPaths from "../apiPaths";
import { revalidatePath } from "next/cache";
import { AddPetFormStateType } from "./types";

const AddPetAction = async (
  formState: any,
  formData: FormData,
): Promise<AddPetFormStateType> => {
  const data = {
    name: formData.get("name"),
    petTypeId: formData.get("petTypeId"),
  };
  const response = await fetch(apiPaths.createPet(), {
    method: "POST",
    headers: {
      Cookie: getCookie(),
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    const data = await response.json();
    return {
      success: false,
      errors: {
        _form: [data.error],
      },
    };
  }
  revalidatePath("/account");
  return { success: true, errors: {} };
};

export default AddPetAction;
