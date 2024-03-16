"use client";

import { useState } from "react";
import HeaderWrapper from "../../atoms/HeaderWrapper";
import AddPetForm from "./AddPetForm";

interface PetsSectionProps {
  pets: {
    id: string;
    name: string;
    petType: {
      id: string;
      type: string;
    };
  }[];
}

const PetsSection = ({ pets }: PetsSectionProps) => {
  const [openForm, setOpenForm] = useState(false);

  const hasPets = pets.length !== 0;

  return (
    <div className="bg-white shadow-lg shadow-slate-300 rounded-md p-4 relative">
      <div className="my-4 flex justify-between items-center border-b py-2">
        <HeaderWrapper title="Pets" className="!font-semibold !text-lg" />
        <button
          onClick={() => {
            setOpenForm((prev) => !prev);
          }}
          className="rounded-md w-max px-6 py-1 lg:py-2 bg-link text-sm lg:text-base text-secondary-text"
        >
          Add Pet
        </button>
      </div>
      {openForm && (
        <div className="w-full">
          <AddPetForm setOpenForm={() => setOpenForm(false)} />
        </div>
      )}

      {!hasPets && (
        <p className="my-4 text-center">You have not added any pet</p>
      )}

      <ul className="p-2 lg:p-4">
        {hasPets &&
          pets.map((item) => (
            <li className="flex justify-between my-2" key={item.id}>
              <h2 className="font-medium">{item.name}</h2>
              <h2 className="text-sm italic">{item.petType.type}</h2>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PetsSection;
