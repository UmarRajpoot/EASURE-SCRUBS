import { ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import React from "react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const DrawerBodyItems = ({
  productName,
  productsize,
  productLength,
  productcolor,
  productimage,
  productPrice,
  count,
  Incrementbtn,
  decrementbtn,
  deletebtn,
}) => {
  return (
    <>
      <div className="flex">
        <div className="w-20">
          <img src={productimage} alt="product_img" />
        </div>

        <div className="flex justify-between flex-1">
          <div className="ml-2 flex flex-col justify-between">
            <div>
              {/* <Link to={`/products/${productID}`}> */}
              <h1 className="text-xs font-bold">{productName}</h1>
              {/* </Link> */}
              <h1 className="text-xs font-bold text-gray-500 ">
                {productsize} • {productcolor}
              </h1>
              {productLength !== "" && (
                <h1 className="text-xs font-bold text-gray-500 ">
                  Length: {productLength}
                </h1>
              )}
            </div>
            <div className="flex items-center">
              <Text fontSize={"sm"} pr={"2"}>
                Qty
              </Text>
              <div className="flex items-center justify-between w-fit border border-gray-300 rounded-md px-1 py-0.5 ">
                <ButtonGroup size="sm" isAttached variant="outline">
                  <IconButton
                    variant={"ghost"}
                    aria-label="decrement"
                    size={"xs"}
                    icon={<MinusIcon />}
                    onClick={decrementbtn}
                  />
                  <h1 className="text-md font-semibold px-3">
                    {parseInt(count)}
                  </h1>
                  <IconButton
                    variant={"ghost"}
                    aria-label="increment"
                    size={"xs"}
                    icon={<AddIcon />}
                    onClick={Incrementbtn}
                  />
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="cursor-pointer" onClick={deletebtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-md font-semibold">${productPrice}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default DrawerBodyItems;
