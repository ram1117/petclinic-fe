import getCookie from "../../utils/getCookie";
import apiPaths from "../../apiPaths";
import PersonalInfo from "../../components/account/PersonalInfo";
import PetsSection from "../../components/account/PetsSection";
import AppointmentSection from "../../components/account/AppointmentSection";

const AccountPage = async () => {
  const response = await fetch(apiPaths.getUser(), {
    headers: {
      Cookie: getCookie(),
    },
  }).then((response) => response.json());
  if (response.error) {
    return <h2>{response.message}</h2>;
  }

  return (
    <section className="min-h-[50vh]  p-8">
      <PersonalInfo userInfo={response} />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4 lg:gap-6">
        <PetsSection pets={response.pets} />
        <AppointmentSection appointments={response.appoinments} />
      </div>
    </section>
  );
};

export default AccountPage;
