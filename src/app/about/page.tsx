import ImageWrapper from "../../atoms/ImageWrapper";
import AboutPageImage from "@public/about-page.jpg";
import HeaderWrapper from "../../atoms/HeaderWrapper";

const AboutPage = () => {
  return (
    <>
      <HeaderWrapper title="About Us" className="text-center" />
      <section className="min-h-[50vh] flex flex-col gap-12 lg:gap-4 lg:flex-row items-center p-8">
        <div className="w-full lg:w-1/3">
          <ImageWrapper
            src={AboutPageImage}
            alt="dog and cat image"
            containerSize="h-56 w-56 lg:h-64 lg:w-64 mx-auto"
            sizes="40vw"
            className="rounded-[999px]"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="lg:text-lg my-4">
            Welcome to Pet Clinic, where compassionate care meets expertise. At
            our clinic, we understand that your furry companions are cherished
            members of your family, which is why we strive to provide the
            highest quality medical services with a personal touch.
          </h2>
          <h2 className="lg:text-lg my-4">
            Our modern facility is equipped with state-of-the-art technology to
            ensure accurate diagnosis and effective treatment. Beyond medical
            care, we also provide nutritional counseling, behavioral support,
            and grooming services to help your pet thrive. With a focus on
            education and communication, we empower pet owners to make informed
            decisions about their pet&apos;s healthcare. When you choose Pet
            Clinic, you&apos;re choosing a partner in your pet&apos;s lifelong
            wellness journey.
          </h2>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
