import { VStack } from "@chakra-ui/react";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className="w-10 h-10 "></div>
      <div className=" flex flex-col items-center">
        <VStack>
          <h3 className="text-xl">TAKE 15% OFF</h3>
          <h3 className="text-lg text-center px-5 ">
            Subscribe to take 15% oFF your first purchase and stay in the know
            on exclusive new colors, style and pronouns.
          </h3>
          <h3 className="text-sm text-center px-5">
            By Clicking "sign up", you agree to receive emails from EASURE and
            accept our Terms of use and our Privacy Policy.
          </h3>
        </VStack>
      </div>
      <div className="py-3 w-72 md:w-96 ">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex">
        <div className="flex items-center mr-4 hover:cursor-pointer ">
          <input
            id="Women"
            type="radio"
            value="Women"
            name="inline-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
          />
          <label
            htmlFor="Women"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer"
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
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer"
          >
            Men
          </label>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-3 ">
        <div className="bg-black text-white w-72 md:w-96 text-center py-3 rounded-md hover:bg-gray-900 hover:cursor-pointer ">
          <p className="text-sm">Sign up</p>
        </div>
      </div>
      <div className="w-10 h-10 "></div>
    </div>
  );
};

export default NewsLetter;
