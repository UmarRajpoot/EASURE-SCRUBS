import { Box, Button, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from "../Config/URL";
import { Link } from "react-router-dom";

const Suggestion = ({ productSuggestions }) => {
  const [productData, setProductData] = useState([]);

  const [allColors, setAllColors] = useState([]);

  const [chooseSize, setchooseSize] = useState("");
  const [chooseColor, setchooseColor] = useState("");
  const Sizes = ["XS", "S", "M", "L", "XL", "2XL"];

  const getProductData = async (productname) => {
    return await axios
      .get(`${BASEURL}/Product/${productname}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const getAllProducts = async () => {
    if (productSuggestions !== undefined && productSuggestions !== null) {
      await axios
        .all(productSuggestions?.map((suggest) => getProductData(suggest)))
        .then((resp) => setProductData(resp))
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const getAllColors = async () => {
    return await axios
      .get(`${BASEURL}/Colors`)
      .then((resp) => {
        // console.log(resp.data.response);
        setAllColors(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (productSuggestions !== undefined && productSuggestions !== null) {
      getAllProducts();
      getAllColors();
    }
  }, [productSuggestions]);

  return (
    <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden no-scrollbar">
      {productData &&
        productData?.map((suggest, index) => {
          return (
            // <Link
            //   replace={true}
            //   to={`/products/${suggest.response.productname.toLowerCase()}/${suggest.response.parentcategory.toLowerCase()}`}
            //   key={index.toString()}
            // >
            <div
              key={index}
              className="flex w-full flex-col md:flex-row py-10 px-3 hover:scale-100 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer"
            >
              <div
                className="h-96 w-64  bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${suggest.response.productimage[0]})`,
                }}
              ></div>
              <div className="flex-1 p-3">
                {/* <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                    BEST SELLER
                  </h2> */}
                <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                  {suggest.response.productname}
                </h2>
                {/* <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                    {suggest.response.colors &&
                      suggest.response.colors[0].colors[0] === "#000000" &&
                      "BLACK"}
                    {suggest.response.colors &&
                      suggest.response.colors[0].colors[0] === "#000080" &&
                      "NAVY BLUE"}
                    {suggest.response.colors &&
                      suggest.response.colors[0].colors[0] === "#92a1cf" &&
                      "NAVY BLUE"}
                  </h2> */}
                <h2 className="text-xl text-gray-900 font-medium cursor-pointer">
                  ${suggest.response.price}.00
                </h2>
              </div>
              <div className="p-3 flex-1">
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Colors
                </Text>
                <Stack direction={"row"} my={"3"}>
                  {allColors.map((color, index) => {
                    return (
                      <Box
                        key={index.toString()}
                        title={color.name}
                        w={"5"}
                        h={"5"}
                        bgColor={`${color.colorcode}`}
                        rounded={"full"}
                        cursor={"pointer"}
                        ring={chooseColor === color.name ? "3" : "0"}
                        _hover={{
                          ring: "3",
                        }}
                        onClick={() => {
                          setchooseColor(color.name);
                        }}
                      ></Box>
                    );
                  })}
                </Stack>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Sizes
                </Text>
                {Sizes.map((size, index) => {
                  return (
                    <button
                      key={index}
                      className={`text-sm p-1.5 px-3 m-1 my-3 ${
                        chooseSize === Sizes[index]
                          ? "bg-black text-white"
                          : "bg-transparent text-gray-500"
                      } hover:bg-black hover:text-white hover:cursor-pointer  rounded-md font-medium  border border-spacing-2 border-gray-300 `}
                      onClick={() => setchooseSize(size)}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
              <div className="flex-1">
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bgColor={"black"}
                  color={"white"}
                  w={"full"}
                  p={"3"}
                  rounded={"sm"}
                  _hover={{
                    bgColor: "blackAlpha.800",
                  }}
                >
                  <Text>ADD TO BAG</Text>
                </Box>
              </div>
            </div>
            // </Link>
          );
        })}
    </div>
  );
};

export default Suggestion;
