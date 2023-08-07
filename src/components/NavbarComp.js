import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiBasket } from "react-icons/bi";
import { Link } from "react-router-dom";
import DropDownComp from "./DropDowns/DropDown";
import Drawer from "./Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../Store/Drawer/actions";

const NavbarComp = () => {
  const [DropDown, setDropDown] = useState(false);

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between p-4">
          {/*max-w-screen-xl */}
          <Link to={"/"} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EASURESCRUBS
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="flex flex-row items-center">
              {/* <div className="group ml-3 relative">
                <Link to={`/account/login`}>
                  <div className="group-hover:cursor-pointer p-2">
                    <BsPerson size={25} />
                  </div>
                </Link>
                <span className="w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200"></span>
              </div> */}
              <div className="group mr-2 relative">
                <div className="group-hover:cursor-pointer p-2">
                  <BiBasket
                    size={25}
                    onClick={() => {
                      dispatch(DrawerState(!IsDrawerOpen));
                    }}
                  />
                </div>
                <span className="w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200"></span>
              </div>
            </div>
            {/* <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            {/* <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div> */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className="relative"
                onMouseEnter={() => {
                  setDropDown(true);
                }}
              >
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 mx-4 rounded md:bg-transparent  md:p-0 text-black"
                  aria-current="page"
                >
                  Women
                </a>
                {DropDown && (
                  <div className="absolute -bottom-full bg-black w-full h-1"></div>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  TEAM Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Students
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Inovation Lab
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer openDrawer={IsDrawerOpen} />

      {DropDown && (
        <div className="relative">
          <div
            className=" absolute w-full h-96 z-40 opacity-30 "
            onMouseEnter={() => setDropDown(false)}
          ></div>
          <div className="absolute top-0 w-full z-50">
            <DropDownComp />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComp;

{
  /* <Navbar fluid rounded style={{ padding: "20px" }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <span classNameName="self-center whitespace-nowrap text-xl  dark:text-white">
          Ease Use
        </span>
      </Navbar.Brand>
      <div classNameName="flex md:order-2">
        {/* <Button>Get started</Button> 
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" classNameName="text-xl">
          Women
        </Navbar.Link>
        <Navbar.Link href="#" classNameName="text-xl">
          Men
        </Navbar.Link>
        <Navbar.Link href="#" classNameName="text-xl">
          TEAMSOrders
        </Navbar.Link>
        <Navbar.Link href="#" classNameName="text-xl">
          Student
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar> */
}
