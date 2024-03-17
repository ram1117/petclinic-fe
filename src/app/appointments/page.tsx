import apiPaths from "../../apiPaths";
import getCookie from "../../utils/getCookie";
import HeaderWrapper from "../../atoms/HeaderWrapper";
import Link from "next/link";
import UpcomingSection from "../../components/appointments/UpcomingSection";
import PastSection from "../../components/appointments/PastSection";

const BookingPage = async () => {
  const appointmentsData = await fetch(apiPaths.getAllAppointment(), {
    headers: {
      Cookie: getCookie(),
    },
  }).then((res) => res.json());

  const date = new Date();
  const upcoming = appointmentsData.filter(
    (item: any) => item.slot.slot >= date.toISOString(),
  );

  const pastBooking = appointmentsData.filter(
    (item: any) => item.slot.slot < date.toISOString(),
  );

  if (appointmentsData.error)
    return <p className="text-xl text-center">{appointmentsData.message}</p>;

  return (
    <section className="min-h-[50vh]  p-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <HeaderWrapper title="Your Appointments" className="" />
        <Link
          href="/appointments/new"
          className="rounded-md w-max px-8 py-2 bg-link text-secondary-text"
        >
          Book a Visit
        </Link>
      </div>
      <UpcomingSection events={upcoming} />
      <PastSection events={pastBooking} />
    </section>
  );
};

export default BookingPage;
