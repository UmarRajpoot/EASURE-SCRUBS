import React from "react";
import Text from "./Text";

const DropDown = () => {
  return (
    <div className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <div class="grid grid-cols-3 px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6 gap-5 ">
        <ul>
          <li>
            <a href="#" class="flex p-3 rounded-lg ">
              <Text text={"WOMEN'S HOME"} />
            </a>
          </li>
          <li>
            <a href="#" class="flex p-3 rounded-lg ">
              <Text text={"BLUEBERRY PAPAYA"} />
            </a>
          </li>
          <li>
            <a href="#" class="flex p-3 rounded-lg ">
              <Text text={"KITS"} />
            </a>
          </li>
          <li>
            <a href="#" class="flex p-3 rounded-lg ">
              <Text text={"BEST SELLERS"} />
            </a>
          </li>
          <li>
            <a href="#" class="flex p-3 rounded-lg ">
              <Text text={"NEW ARRIVALS"} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <div className="">
              <div class="font-semibold">Scrubs</div>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrubs Tops"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrub Pants"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrub Jumpsuit"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"3XL-6XL"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Maternity"} />
              </a>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="">
              <div class="font-semibold">Scrubs</div>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrubs Tops"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrub Pants"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Scrub Jumpsuit"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"3XL-6XL"} />
              </a>
              <a href="#" class="p-2 flex ">
                <Text text={"Maternity"} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
