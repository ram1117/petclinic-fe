"use client";

import { useFormState } from "react-dom";
import CancelBookingAction from "../../actions/CancelBookingAction";

interface ConfirmationPopupProps {
  id: string;
  closePopup: Function;
}

const ConfirmationPopup = ({ id, closePopup }: ConfirmationPopupProps) => {
  const cancelActionWithId = CancelBookingAction.bind(null, id);
  const [formState, formAction] = useFormState(cancelActionWithId, {
    errors: "",
  });

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-md">
      <div className="rounded-md shadow-lg shadow-slate-300 p-2 h-1/5 w-11/12 max-w-[400px] bg-white flex flex-col items-center justify-center">
        <h2 className="text-center my-4">
          Do you want to cancel this appointment?
        </h2>

        {formState.errors && (
          <p className="text-sm text-red-500">{formState.errors}</p>
        )}

        <div className="grid grid-cols-2 w-full p-2 gap-2">
          <button
            className="p-2 rounded-md border"
            onClick={() => closePopup(false)}
          >
            Cancel
          </button>
          <form action={formAction}>
            <button
              type="submit"
              className="p-2 bg-link text-secondary-text rounded-md border w-full"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
