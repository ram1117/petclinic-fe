"use client";

import { useState } from "react";
import ConfirmationPopup from "./ConfirmationPoptup";

interface CancelButtonProps {
  appointmentId: string;
}

const CancelButton = ({ appointmentId }: CancelButtonProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <button
        className="rounded-md w-max px-8 py-1 bg-link text-secondary-text"
        onClick={() => setOpenPopup((prev) => !prev)}
      >
        Cancel
      </button>
      {openPopup && (
        <ConfirmationPopup id={appointmentId} closePopup={setOpenPopup} />
      )}
    </div>
  );
};

export default CancelButton;
