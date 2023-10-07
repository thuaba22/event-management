import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-base-100 shadow px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#333333]"
                      : isActive
                      ? "text-[#4682B4] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#333333]"
                      : isActive
                      ? "text-[#4682B4] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-[18px] font-normal text-[#333333]"
                      : isActive
                      ? "text-[#4682B4] text-[18px] font-bold underline"
                      : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#333333]"
                    : isActive
                    ? "text-[#4682B4] text-[18px] font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#333333]"
                    : isActive
                    ? "text-[#4682B4] text-[18px] font-bold underline"
                    : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#333333]"
                    : isActive
                    ? "text-[#4682B4] text-[18px] font-bold underline"
                    : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#333333]"
                    : isActive
                    ? "text-[#4682B4] text-[18px] font-bold underline"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[18px] font-normal text-[#333333]"
                    : isActive
                    ? "text-[#4682B4] text-[18px] font-bold underline"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
