import getCookie from "../../utils/getCookie";
import apiPaths from "../../apiPaths";
import PersonalInfo from "../../components/account/PersonalInfo";

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
    <section className="min-h-[50vh] flex flex-col gap-12 lg:gap-4 lg:flex-row justify-center p-8 border-2">
      <PersonalInfo userInfo={response} />
    </section>
  );
};

export default AccountPage;
