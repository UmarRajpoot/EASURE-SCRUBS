import { Badge, ButtonGroup, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";

const CheckoutItems = ({
  productName,
  productsize,
  productcolor,
  productPrice,
  productimage,
  count,
}) => {
  return (
    <>
      <div className="flex">
        <div className="w-20 h-20  rounded-xl bg-gray-100 relative">
          <div class="absolute inline-flex items-center justify-center w-6 h-6 p-1 text-xs font-bold text-white bg-gray-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {count}
          </div>
          <Image
            w={"full"}
            h={"full"}
            objectFit={"contain"}
            src={productimage}
          />
        </div>

        <div className="flex justify-between flex-1">
          <div className="ml-2 flex flex-col justify-between">
            <div>
              <h1 className="text-sm font-bold">{productName}</h1>
              <h1 className="text-sm font-bold text-gray-500 ">
                {productsize} • {productcolor}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <div>
              <h1 className="text-md font-semibold">${productPrice}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
    </>
  );
};

export default CheckoutItems;
