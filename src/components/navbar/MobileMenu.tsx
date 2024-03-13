"use client";
import NavMenu from "./NavMenu";
import ImageWrapper from "../../atoms/ImageWrapper";
import MenuIcon from "@public/icons/icon-menu.svg";
import { useState } from "react";

const MobileMenu = () => {
  const [openmenu, setOpenmenu] = useState(false);

  const handleButtonClick = () => {
    setOpenmenu((prev) => !prev);
  };

  return (
    <div className="lg:hidden relative">
      <button className="" onClick={handleButtonClick}>
        <ImageWrapper src={MenuIcon} alt="menu icon" containerSize="h-8 w-8" />
      </button>

      {openmenu && (
        <>
          <div className="absolute top-6 right-2 h-0 w-0 border-x-[12px] border-x-transparent border-b-[16px] border-blue-100" />
          <div className="absolute w-max min-h-max top-10 right-0 bg-blue-100 p-8">
            <NavMenu className="flex flex-col gap-8" />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
