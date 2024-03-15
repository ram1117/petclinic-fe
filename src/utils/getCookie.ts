import { cookies } from "next/headers";

const getCookie = () => {
  const token = cookies().get("access_token");
  return `${token?.name}=${token?.value}`;
};

export default getCookie;
