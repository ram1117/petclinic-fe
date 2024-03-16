import getCookie from "../../utils/getCookie";
import apiPaths from "../../apiPaths";
import PersonalInfo from "../../components/account/PersonalInfo";
import PetsSection from "../../components/account/PetsSection";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
        <PetsSection pets={response.pets} />
      </div>
    </section>
  );
};

export default AccountPage;
