import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home"); // Represents the currently active navigation element. It is initialized to "Home".
  const [toggle, setToggle] = useState(false); // Represents the status of the menu opening on mobile. It is set to false.

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1"> //"sm:flex hidden". This means that this list is displayed in flex mode on screens above "small" (sm) and hidden on smaller screens.
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={
              `font-poppins font-normal cursor-pointer text-[16px] 
              ${active === nav.title ? "text-white" : "text-dimWhite"}
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
                /* navLinks.length - 1, that is, if the current element is the last element of the navLinks array. 
                Thus, for each navigation element except the last, a right margin of 10 units is applied.
                */
              }`
            }
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center"> // Is hidden on the screens above "small". So it's for responsive
        <img
          src={toggle ? close : menu} /* close icon if true and menu icon if false  */
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          /* If toggle is true, it will be updated with false, and vice versa */
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
        }
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={
                  `font-poppins font-medium cursor-pointer text-[16px] 
                  ${active === nav.title ? "text-white" : "text-dimWhite"} 
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`
                }
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;