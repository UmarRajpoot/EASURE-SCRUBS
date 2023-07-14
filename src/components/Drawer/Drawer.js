import React from "react";
import { BsBagDash } from "react-icons/bs";

const Drawer = ({ openDrawer, setOpenDrawer }) => {
  return (
    <div className="relative">
      {openDrawer && (
        <div
          className="absolute z-10 w-full h-screen opacity-25"
          onClick={() => setOpenDrawer(false)}
        ></div>
      )}
      <div
        id="drawer-form"
        class={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          openDrawer ? "-translate-x-0" : "translate-x-full"
        } bg-white w-1/3 dark:bg-gray-800`}
        tabindex="-1"
        aria-labelledby="drawer-form-label"
      >
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <BsBagDash className="p-2" size={40} />
          MY BAG
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-form"
          aria-controls="drawer-form"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setOpenDrawer(false)}
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div className="bg-gray-300 p-3">
          <h4 className="text-base text-center">
            Your cart is currently empty.
          </h4>
        </div>
        <div className="flex items-center justify-between p-3">
          <h4 className="text-xl ">Total:</h4>
          <h4 className="text-xl ">$0.00</h4>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
