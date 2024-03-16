import Link from "next/link";
import apiPaths from "../../../apiPaths";
import HeaderWrapper from "../../../atoms/HeaderWrapper";
import CreateAppointmentForm from "../../../components/appointments/CreateAppointmentForm";
import getCookie from "../../../utils/getCookie";

const NewBookingPage = async () => {
  const petsList = await fetch(apiPaths.getPets(), {
    headers: { Cookie: getCookie() },
  }).then((response) => response.json());

  const hasPets = petsList !== 0;
  if (petsList.error)
    return <h2 className="text-lg text-center">{petsList.message}</h2>;

  return (
    <section className="min-h-[50vh] p-8 lg:p-16">
      <HeaderWrapper title="Book Appointment" className="text-center !mb-12" />
      {!hasPets && (
        <div>
          <h2 className="">
            Please add pet details in account page to continue
          </h2>
          <Link href="/account">Account</Link>
        </div>
      )}
      {hasPets && <CreateAppointmentForm pets={petsList} />}
    </section>
  );
};

export default NewBookingPage;
