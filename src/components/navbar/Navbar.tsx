import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between p-4 lg:p-8 items-center">
    <Link href="/">
      <h2 className="text-xl lg:text-2xl font-bold font-montserrat">
        PetClinic
      </h2>
    </Link>

    <div className="lg:block hidden">
      <NavMenu className="flex gap-8" />
    </div>
    <MobileMenu />
  </nav>
);

export default Navbar;
