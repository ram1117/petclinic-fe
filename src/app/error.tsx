"use client";

import { useEffect } from "react";
import ImageWrapper from "../atoms/ImageWrapper";
import PageImage from "@public/cartoon.svg";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[75vh] flex flex-col gap-8 items-center justify-center p-4">
      <ImageWrapper
        src={PageImage}
        alt="dog and cat cartoon"
        containerSize="h-32 w-32 md:h-40 md:w-40"
        sizes="50vw"
      />
      <>
        <h1 className="text-2xl lg:text-5xl font-semibold font-montserrat">
          Something is wrong...
        </h1>
        <h2 className="text-lg lg:text-2xl">{error.message}</h2>
        <button
          className="rounded-md w-max px-8 py-2 lg:py-4 bg-link text-secondary-text"
          onClick={() => reset()}
        >
          Retry
        </button>
      </>
    </section>
  );
};

export default Error;
