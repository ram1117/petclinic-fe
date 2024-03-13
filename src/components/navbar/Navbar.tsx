import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => (
  <nav className="flex justify-between p-4 lg:p-8 border-2 fixed inset-x-0 items-center">
    <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold font-montserrat">
      PetClinic
    </h2>
    <div className="lg:block hidden">
      <NavMenu className="flex gap-8" />
    </div>
    <MobileMenu />
  </nav>
);

export default Navbar;
