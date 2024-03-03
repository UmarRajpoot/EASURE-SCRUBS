import { Image } from "@chakra-ui/react";
import React from "react";

const CheckoutItems = ({
  productName,
  productLength,
  productsize,
  productcolor,
  productPrice,
  productimage,
  count,
}) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-20 h-20 rounded-xl bg-gray-100 relative">
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
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
              <h1 className="text-xs font-bold">{productName}</h1>
              <h1 className="text-xs font-bold text-gray-500 ">
                {productsize} • {productcolor}
              </h1>
              {productLength !== "" && (
                <h1 className="text-xs font-bold text-gray-500 ">
                  Length: {productLength}
                </h1>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <div>
              <h1 className="text-sm font-semibold">${productPrice}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default CheckoutItems;
