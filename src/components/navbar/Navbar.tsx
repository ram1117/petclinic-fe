import NavMenu from "./NavMenu";

const Navbar = () => (
  <nav className="flex justify-between p-4 lg:p-8 border-2 fixed inset-x-0">
    <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold font-montserrat">
      PetClinic
    </h2>
    <NavMenu />
  </nav>
);

export default Navbar;
