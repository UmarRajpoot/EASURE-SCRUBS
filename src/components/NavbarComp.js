import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiBasket, BiLogOutCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Drawer from "./Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../Store/Drawer/actions";
import { AddUser } from "../Store/Auth/actions";
import WomenDropDownComp from "./DropDowns/WomenDropDown";
import MenDropDownComp from "./DropDowns/MenDropDown";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FirebaseApp } from "./Firebase/Firebase";
import { Box, Image, Text } from "@chakra-ui/react";

const NavbarComp = () => {
  const [WomenDropDown, setWomenDropDown] = useState(false);
  const [MenDropDown, setMenDropDown] = useState(false);

  const [mobileDropDown, setMobileDropDown] = useState(false);

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const AuthState = useSelector((state) => state.Auths.users);
  const Products = useSelector((state) => state.ProductsReducer.Products);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);

  const [productSearch, setProductSearch] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);

  useEffect(() => {
    if (productSearch !== "") {
      let filteredProducts = Products.filter((product) =>
        `${product.typestylename.toLowerCase()} ${product.typename.toLowerCase()} ${product.varientname.toLowerCase()} ${product.parentcategory.toLowerCase()}`.includes(
          productSearch.toLowerCase()
        )
      );
      setSearchedProduct(filteredProducts);
    } else {
      setSearchedProduct([]);
    }
  }, [productSearch]);

  const navigate = useLocation();
  const MoveTo = useNavigate();

  useEffect(() => {
    setMobileDropDown(false);
  }, [navigate.pathname]);

  const dispatch = useDispatch();

  const getUserDetail = async () => {
    const auth = getAuth(FirebaseApp);
    onAuthStateChanged(
      auth,
      (user) => {
        if (user !== null) {
          return dispatch(AddUser(user));
        }
        return null;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    let isApplied = true;
    if (isApplied) {
      getUserDetail();
    }
    return () => {
      isApplied = false;
    };
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between p-4">
          {/*max-w-screen-xl */}
          <Link to={"/"} className="flex items-center">
            <span className="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Image
                src={"/Images/Logo/Assest-2Logo.png"}
                alt="logo"
                w={"10"}
              />{" "}
              EASURE
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="flex flex-row items-center">
              <div className="relative hidden md:block">
                <div>
                  <div className="absolute inset-y-0 left-0 flex pt-3 pl-3 pointer-events-none">
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
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar1"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                  />
                </div>
                <Box
                  w={"64"}
                  bgColor={"gray.100"}
                  className="absolute z-20 mx-auto"
                >
                  {searchedProduct.slice(0, 6)?.map((prod, index) => {
                    return (
                      <Text
                        key={index}
                        px={"2"}
                        py={"1"}
                        fontSize={"sm"}
                        cursor={"pointer"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                        color={"gray.700"}
                        onClick={() => {
                          MoveTo(`/products/${prod.id}`);
                          setSearchedProduct([]);
                          setProductSearch("");
                        }}
                      >
                        {`${prod.parentcategory.toLowerCase()}-${prod.varientname.toLowerCase()}-${prod.typename?.toLowerCase()}-${prod.typestylename?.toLowerCase()}`}
                      </Text>
                    );
                  })}
                  {searchedProduct.slice(6).length !== 0 && (
                    <Text
                      color={"blue"}
                      textDecoration={"underline"}
                      cursor={"pointer"}
                      p={"2"}
                      onClick={() => {
                        MoveTo("/viewall/scrubs/women");
                        setSearchedProduct([]);
                        setProductSearch("");
                      }}
                    >
                      See all {searchedProduct.slice(6).length}
                    </Text>
                  )}
                </Box>
              </div>
              {AuthState.length !== 0 ? (
                <div
                  className="group ml-3 relative"
                  onClick={async () => {
                    const auth = getAuth(FirebaseApp);
                    await signOut(auth)
                      .then(() => {
                        console.log("User logout");
                        dispatch(AddUser([]));
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  <div className="group-hover:cursor-pointer p-2">
                    <BiLogOutCircle size={25} />
                  </div>

                  <span className="w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200"></span>
                </div>
              ) : (
                <div className="group ml-3 relative">
                  <Link to={`/login`}>
                    <div className="group-hover:cursor-pointer p-2">
                      <BsPerson style={{ width: "20px", height: "20px" }} />
                    </div>
                  </Link>
                  <span className="w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200"></span>
                </div>
              )}
              <div className="group mr-2 relative">
                <div className="group-hover:cursor-pointer p-2 relative">
                  <Box
                    onClick={() => {
                      dispatch(DrawerState(!IsDrawerOpen));
                    }}
                  >
                    {CartItems?.length !== 0 && (
                      <div className="w-5 h-5 bg-red-500 flex items-center justify-center rounded-full absolute -top-0 -right-0">
                        <h1 className="text-xs text-white">
                          {CartItems?.length}
                        </h1>
                      </div>
                    )}
                    <svg height="25px" width="25px">
                      <g
                        stroke="currentColor"
                        fill="none"
                        fillRule="evenodd"
                        strokeWidth="1.5"
                        transform="translate(6 6)"
                      >
                        <path d="M3.72 4.83V1.4a.73.73 0 0 1 .71-.75h4a.73.73 0 0 1 .71.75v3.43"></path>
                        <rect
                          width="12.4"
                          height="9.2"
                          x=".13"
                          y="4.52"
                          rx=".46"
                        ></rect>
                      </g>
                    </svg>
                  </Box>
                </div>
                <span className="w-0 group-hover:w-full h-0.5 bg-gray-600 absolute bottom-0 left-0 transition-all ease-in-out duration-200"></span>
              </div>
            </div>
            {mobileDropDown ? (
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
                onClick={() => {
                  setMobileDropDown(false);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
                onClick={() => {
                  setMobileDropDown(true);
                }}
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
              </button>
            )}
          </div>
          <div
            className={`items-center justify-between ${
              mobileDropDown ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
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
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigate.pathname.split("/")[1] === "fitguide" && (
                <>
                  <Link to={"/fitguide/men"}>
                    <li>
                      <Text
                        className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:text-blue-600 ${
                          navigate.pathname.split("/")[2] === "men" &&
                          "text-blue-600"
                        }`}
                      >
                        Men
                      </Text>
                    </li>
                  </Link>
                  <Link to={"/fitguide/women"}>
                    <li>
                      <Text
                        className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 hover:text-blue-600 ${
                          navigate.pathname.split("/")[2] === "women" &&
                          "text-blue-600"
                        }`}
                      >
                        Women
                      </Text>
                    </li>
                  </Link>
                </>
              )}

              {navigate.pathname.split("/")[1] !== "fitguide" && (
                <>
                  {/* <Link
                    to={"/collection/black-scrub-women"}
                    // onClick={() =>
                    //   setMobileDropDown((oldState) => setMobileDropDown(!oldState))
                    // }
                  > */}
                  <li
                    className="relative cursor-pointer"
                    onMouseEnter={() => {
                      if (mobileDropDown === false) setWomenDropDown(true);
                    }}
                    onMouseLeave={() => {
                      if (mobileDropDown === false) setWomenDropDown(false);
                    }}
                  >
                    <Text
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Women
                    </Text>
                    {WomenDropDown && (
                      <>
                        <div className="absolute mt-2 bg-black w-full h-1"></div>
                        {WomenDropDown && (
                          <div className="relative">
                            <div className="block min-w-screen absolute top-0 md:left-0 pt-5 z-50">
                              <WomenDropDownComp />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                  {/* </Link> */}
                  {/* <Link
                    to={"/collection/black-scrub-men"}
                    // onClick={() =>
                    //   setMobileDropDown((oldState) => setMobileDropDown(!oldState))
                    // }
                  > */}
                  <li
                    className="relative cursor-pointer"
                    onMouseEnter={() => {
                      if (mobileDropDown === false) setMenDropDown(true);
                    }}
                    onMouseLeave={() => {
                      if (mobileDropDown === false) setMenDropDown(false);
                    }}
                  >
                    <Text
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Men
                    </Text>
                    {MenDropDown && (
                      <>
                        <div className="absolute mt-2 bg-black w-full h-1"></div>
                        {MenDropDown && (
                          <div className="relative">
                            <div className="block min-w-screen absolute top-0 md:left-0 pt-5 z-50">
                              <MenDropDownComp />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                  {/* </Link> */}
                  <Link to={"/technology"}>
                    <li>
                      <Text
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Technology
                      </Text>
                    </li>
                  </Link>
                  <Link to={"/OurStory"}>
                    <li>
                      <Text
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Our Story
                      </Text>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Drawer openDrawer={IsDrawerOpen} />
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
