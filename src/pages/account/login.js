import React from "react";
import Text from "../../components/Text";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="container px-6 md:mx-auto flex flex-col items-center justify-center h-screen">
      <div className="mt-6 w-1/3">
        <div className="flex flex-col ">
          <div className="flex flex-col text-center">
            <h2 className="text-3xl my-4">Welcome To EASURE!</h2>
            {/* <h2 className="text-md my-4 ">Welcome to EASURE</h2> */}
          </div>
          <div>
            <div class="my-3 text-center">
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="Email"
                required
              />
              <p className="text-red-600 text-sm my-3">
                Please enter a valid email
              </p>
            </div>
            <div class="mb-3 text-center ">
              <input
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="Password"
                required
              />
              <p className="text-red-600 text-sm my-3">
                Please enter a password
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Text text={"Forget your password?"} />
              <Text text={"Show Password"} />
            </div>
            <div className="bg-gray-900 hover:bg-gray-800 hover:cursor-pointer w-full p-4 rounded-md mt-6 ">
              <h3 className="text-white text-center font-bold">LOG IN</h3>
            </div>
            <div className="my-10">
              <hr />
            </div>
            <div>
              <h3 className="text-xl font-bold text-center">New to EASURE?</h3>
              <Link to={"/account/register"}>
                <h3 className="text-md text-center my-4 hover:cursor-pointer">
                  Create an account
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
