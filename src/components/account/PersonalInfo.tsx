import SignoutAction from "../../actions/SignoutAction";
import HeaderWrapper from "../../atoms/HeaderWrapper";

interface PersonalInfoProps {
  userInfo: {
    fullname: string;
    email: string;
    username: string;
  };
}

const PersonalInfo = ({ userInfo }: PersonalInfoProps) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row items-center justify-between p-4 lg:p-8 w-full shadow-md shadow-slate-200 bg-white rounded-md">
      <p className="capitalize text-base">{userInfo.fullname}</p>
      <form action={SignoutAction}>
        <button
          type="submit"
          className="rounded-md w-max px-6 py-1 lg:py-2 bg-link text-sm lg:text-base text-secondary-text"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
