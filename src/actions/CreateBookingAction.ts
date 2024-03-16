"use server";

const CreateBookingAction = async (formData: FormData) => {
  console.log(Object.fromEntries(formData.entries()));
};

export default CreateBookingAction;
