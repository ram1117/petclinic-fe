import Link from "next/link";

interface NavMenuProps {
  className?: string;
}

const NavMenu = ({ className = "" }: NavMenuProps) => {
  return (
    <ul className={`lg:text-lg font-medium ${className}`}>
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
