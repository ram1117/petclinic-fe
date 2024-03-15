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
    <div className="border-2 w-full lg:w-2/3">
      <HeaderWrapper title="Profile" className="text-center my-6" />
      <ul>
        <li className="grid grid-cols-2 gap-4">
          <p>Full Name</p>
          <p>{userInfo.fullname}</p>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <p>Email</p>
          <p>{userInfo.email}</p>
        </li>
        <li className="grid grid-cols-2 gap-4">
          <p>User Name</p>
          <p>{userInfo.username}</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInfo;
