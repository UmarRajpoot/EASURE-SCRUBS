import React from "react";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="container md:mx-auto flex flex-col items-center justify-center ">
      <div className="mt-6 w-1/3">
        <div className="px-10 flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <h2 className="text-4xl">Create your EASURE account</h2>
            <h2 className="text-md my-4 ">
              C'mon, everybody's doing it. Create an account to apply discount
              codes at checkout and get access to exclusive offers and
              promotions.
            </h2>
          </div>
          <div>
            <div class="my-3 text-center">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="First Name"
                required
              />
            </div>
            <div class="my-3 text-center">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="my-3 text-center">
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="Email"
                required
              />
              {/* <p className="text-red-600 text-sm my-3">
                Please enter a valid email
              </p> */}
            </div>
            <div class="mb-3 text-center ">
              <input
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-gray-900 focus:border-gray-900 block w-full p-4"
                placeholder="Password"
                required
              />
              {/* <p className="text-red-600 text-sm my-3">
                Please enter a password
              </p> */}
            </div>
            {/* <div className="flex items-center justify-between">
              <Text text={"Forget your password?"} />
              <Text text={"Show Password"} />
            </div> */}
            <div class="flex items-start my-6">
              {/* <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-md pl-2 text-gray-900 dark:text-gray-300"
              >
                Yes, I would like to receive emails from FIGS about products,
                updates, and exclusive offers and promotions. You can
                unsubscribe at any time. See our Privacy Policy.
              </label> */}
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 hover:cursor-pointer w-full p-4 rounded-md mt-6 ">
              <h3 className="text-white text-center font-bold">CREATE</h3>
            </div>
            <div className="my-6">
              <h3 className="text-md text-center">
                By clicking the button above, you agree to our Terms of Use and
                Privacy Policy.
              </h3>
            </div>
            <div className="my-10">
              <hr />
            </div>
            <div>
              <h3 className="text-xl font-bold text-center">
                Have an account?
              </h3>
              <Link to={"/account/login"}>
                <h3 className="text-lg text-center my-4 hover:cursor-pointer underline">
                  Log In Here
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
