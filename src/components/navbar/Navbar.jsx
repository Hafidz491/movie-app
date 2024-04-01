import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import NavUser from "./NavUser";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="bg-transparent  absolute top-0 left-0 w-full flex z-10">
      <div className="container items-center mx-auto lg:px-20 md:px-0">
        <div className="flex justify-between mx-auto items-center relative">
          <div className=" items-center flex">
            <Hamburger />
            <div className="sm:ml-8">
              <Link
                to={"/"}
                className="font-bold text-3xl text-red-500 block py-6"
              >
                MovieApp
              </Link>
            </div>
          </div>
          <Navigation />
          <NavUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
