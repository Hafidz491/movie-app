import { useState } from "react";
import { HiMenu, HiLockClosed } from "react-icons/hi";
const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="lg:hidden sidebar-toggle sm:ml-4">
        <button
          id="hamburger"
          name="hamburger"
          className="block absolute top-1/4 left-0.5 mb-2"
          type="button"
          onClick={handleClick}
        >
          <span>
            {isNavOpen ? (
              <HiLockClosed size={40} color="white" />
            ) : (
              <HiMenu size={40} color="white" />
            )}
          </span>
        </button>
        <nav
          className={`nav absolute bg-black w-48 text-red-500 top-2/3 mt-2 left-0.5 rounded-xl transition duration-300 ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="nav__list py-2 px-2">
            <li className="nav__item pb-2">
              <a href="#" className="nav__link hover:text-white">
                Home
              </a>
            </li>
            <li className="nav__item pb-2">
              <a href="#" className="nav__link hover:text-white">
                Favorite
              </a>
            </li>
            <li className="nav__item pb-2">
              <a href="#" className="nav__link hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hamburger;
