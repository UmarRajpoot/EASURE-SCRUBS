import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // #282828
    <footer className="bg-[#282828] w-full ">
      <div className="flex flex-col items-center md:items-start py-10 px-5 ">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl text-white font-medium ">
            Comfort Assured with EASURE
          </h1>
          {/* <h1 className="text-4xl text-white font-medium ">HUMANS</h1> */}
          {/* <h1 className="text-xl text-white font-normal ">With EASURE</h1> */}
        </div>
      </div>
      <div className="p-5 w-full ">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 md:grid-cols-4">
          <div>
            {/* <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Company
            </h2> */}
            <ul className="text-white dark:text-gray-400 font-medium block">
              <li className="mb-4">
                <a href="/ContactUs" className=" hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <Link to={"/FAQs"}>
                  <Text className=" hover:underline">Shipping & FAQs</Text>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/returns"}>
                  <Text className=" hover:underline">Return and Exchange</Text>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/OurStory"}>
                  <Text className=" hover:underline">Our Story</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <Link to={"/viewall/scrubs/men"}>
                  <Text className="hover:underline">Shop Men</Text>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/viewall/scrubs/women"}>
                  <Text className="hover:underline">Shop Women</Text>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/fitguide/men"}>
                  <Text className="hover:underline">Fit Guide</Text>
                </Link>
              </li>
              <li className="mb-4">
                <Link to={"/PrivacyPolicy"}>
                  <Text href="#" className="hover:underline">
                    Privacy Policy
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase w-full">
              Stay Connected Keep Up With Us on Social Media
            </h2>
            <div className="flex mt-4 space-x-8  md:mt-0 pt-5">
              <a
                href="#"
                className="text-white hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  fill="currentColor"
                  fillRule="evenodd"
                  className="w-4 h-4"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <Text fontSize={"2xl"} color={"white"}>
              Be in the know
            </Text>
            <Text fontSize={"sm"} color={"white"}>
              Sign up for new arrivals, offers and more!Be in the know
            </Text>
            <div className="flex">
              <div className="flex items-center mr-4 hover:cursor-pointer my-5">
                <input
                  id="Women"
                  type="radio"
                  value="Women"
                  name="inline-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
                />
                <label
                  htmlFor="Women"
                  className="ml-2 text-sm font-medium text-white hover:cursor-pointer"
                >
                  Women
                </label>
              </div>
              <div className="flex items-center mr-4 ">
                <input
                  id="Men"
                  type="radio"
                  value="Men"
                  name="inline-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
                />
                <label
                  htmlFor="Men"
                  className="ml-2 text-sm font-medium text-white hover:cursor-pointer"
                >
                  Men
                </label>
              </div>
            </div>
            <div className="py-3  flex items-center">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <Box
                bgColor={"black"}
                _hover={{ bgColor: "gray.900", cursor: "pointer" }}
              >
                <Text color={"white"} px={"10"} py={"4"} userSelect={"none"}>
                  SignUp
                </Text>
              </Box>
            </div>
          </div>
        </div>
        <div className="px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024 All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
