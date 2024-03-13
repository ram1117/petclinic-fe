import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center p-8 lg:p-16">
      <div className="w-full lg:w-2/3 mb-12">
        <h1 className="text-2xl lg:text-5xl font-poppins font-medium mb-12">
          Compassionate care, healthy pets, trusted veterinary expertise.
        </h1>
        <h2 className="lg:text-lg">
          Welcome to PetClinic, where your pet&apos;s well-being comes first.
          Our dedicated team combines expertise with compassion to provide
          personalized care for your furry family members. Trust us to keep your
          pets healthy, happy, and thriving.
        </h2>
      </div>
      <Link
        href="/about"
        className="rounded-md w-max px-8 py-2 lg:py-4 bg-link text-secondary-text"
      >
        READ MORE
      </Link>
    </section>
  );
}
