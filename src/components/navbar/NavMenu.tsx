import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="flex gap-8 lg:text-lg font-medium">
      <li className="">
        <Link href="/treatments">Treatments</Link>
      </li>
      <li className="">
        <Link href="/doctors">Our Doctors</Link>
      </li>
      <li className="">
        <Link href="/treatments">Account</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
