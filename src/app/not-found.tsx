import ImageWrapper from "../atoms/ImageWrapper";
import PageImage from "@public/cartoon.svg";

const NotFound = () => (
  <section className="min-h-[75vh] flex flex-col gap-8 items-center justify-center p-4">
    <ImageWrapper
      src={PageImage}
      alt="dog and cat cartoon"
      containerSize="h-32 w-32 md:h-40 md:w-40"
      sizes="50vw"
    />
    <>
      <h1 className="text-2xl lg:text-5xl font-semibold font-montserrat">
        404
      </h1>
      <h2 className="text-lg lg:text-2xl">
        Oops. We have trouble finding this page for you
      </h2>
    </>
  </section>
);
export default NotFound;
