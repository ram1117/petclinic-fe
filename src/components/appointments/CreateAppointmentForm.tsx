"use client";

import { useEffect, useState } from "react";
import apiPaths from "../../apiPaths";
import CreateBookingAction from "../../actions/CreateBookingAction";

interface CreateAppointmentFormProps {
  pets: { id: string; name: string }[];
}

const CreateAppointmentForm = ({ pets }: CreateAppointmentFormProps) => {
  const [treatmentData, setTreatmentData] = useState([]);
  const [docData, setDocData] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetch(apiPaths.getTreatments())
      .then((response) => response.json())
      .then((data) => setTreatmentData(data));
  }, []);

  const handleTreatmentChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const id = event.target.value;
    if (id !== "default") {
      const doctorList: any = treatmentData.filter(
        (item: any) => item.id === id,
      );
      setDocData(doctorList[0].doctors);
    } else {
      setDocData([]);
    }
  };

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;
    if (id !== "default") {
      const doctorItem: any = docData.filter(
        (item: any) => item.doctorId === id,
      );
      setSlots(doctorItem[0].doctor.slots);
    } else {
      setSlots([]);
    }
  };

  return (
    <form action={CreateBookingAction}>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="pet" className="w-full lg:w-1/3">
          Pet
        </label>
        <select
          id="pet"
          name="petId"
          className="bg-white border-2 p-2 rounded-md w-full lg:w-2/3"
        >
          <option
            value="default"
            className="default-select-option"
            key="default"
          >
            Please Select Pet...
          </option>
          {pets &&
            pets.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="treatment" className="w-full lg:w-1/3">
          Treatment
        </label>
        <select
          id="treatment"
          name="treatmentId"
          className="bg-white border-2 p-2 rounded-md w-full lg:w-2/3"
          onChange={handleTreatmentChange}
        >
          <option
            value="default"
            className="default-select-option"
            key="default"
          >
            Please Select Treatment...
          </option>
          {treatmentData &&
            treatmentData.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
        </select>
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="peType" className="w-full lg:w-1/3">
          Doctor
        </label>
        <select
          id="doctor"
          name="doctorId"
          className="bg-white border-2 p-2 rounded-md w-full lg:w-2/3"
          onChange={handleDoctorChange}
        >
          <option
            value="default"
            className="default-select-option"
            key="default"
          >
            Please Select a Doctor...
          </option>
          {docData.length > 0 &&
            docData.map((item: any) => (
              <option key={item.doctor.id} value={item.doctor.id}>
                {item.doctor.name}
              </option>
            ))}
        </select>
      </div>
      <div className="my-4 flex gap-4 lg:flex-row flex-col gap-4 lg:items-center">
        <label htmlFor="slot" className="w-full lg:w-1/3">
          Date and Time
        </label>
        <select
          id="slot"
          name="slotId"
          className="bg-white border-2 p-2 rounded-md w-full lg:w-2/3"
        >
          <option
            value="default"
            className="default-select-option"
            key="default"
          >
            Please Select Date and Time...
          </option>
          {slots.length > 0 &&
            slots.map((item: any) => {
              const date = new Date(item.slot);

              return (
                <option key={item.id} value={item.id}>
                  {`${date.toDateString()} - ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                </option>
              );
            })}
        </select>
      </div>
      <div className="my-4 flex justify-end">
        <button
          type="submit"
          className="rounded-md w-max px-6 py-1 lg:py-2 bg-link text-sm lg:text-base text-secondary-text"
        >
          Reserve
        </button>
      </div>
    </form>
  );
};

export default CreateAppointmentForm;
