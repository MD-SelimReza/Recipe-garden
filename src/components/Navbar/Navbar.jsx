import { FaEllipsisV } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <a href="#" className="size-5">
              <FaEllipsisV />
            </a>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
              <a>Recipes</a>
              <a>About</a>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-bold">Tasty Eats</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <label className="rounded-full bg-gray-300 px-3 py-1 flex items-center gap-2">
          <CiSearch />
          <input
            type="text"
            className="grow bg-gray-300 border-none outline-none"
            placeholder="Search"
          />
        </label>
        <a className="text-2xl bg-[#0BE58A] rounded-full p-1">
          <BiUserCircle />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
