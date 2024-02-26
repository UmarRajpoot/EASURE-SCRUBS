import { Box, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from "../Config/URL";
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem, synced_Cart } from "../Store/Cart/actions";
import { DrawerState } from "../Store/Drawer/actions";
import { Link } from "react-router-dom";

const Suggestion = ({ productSuggestions }) => {
  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);

  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  const [allColors, setAllColors] = useState([]);
  const [selectLength, setSelectLength] = useState(null);

  const [sizeError, setSizeError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  const [chooseSize, setchooseSize] = useState(null);
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
              className="flex w-full flex-col md:flex-row py-10 px-3 hover:scale-100 transition-all ease-in-out duration-200"
            >
              {/* <div
                className="h-96 w-64  bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${suggest.response.productimage[0]})`,
                }}
              ></div> */}
              <Link to={`/products/${suggest.response.id}`}>
                <Image
                  w={"64"}
                  h={"80"}
                  src={suggest.response.productimage[0]}
                  alt="suggestion_image"
                />
              </Link>
              <div className="flex-1 p-3">
                {/* <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                    BEST SELLER
                  </h2> */}
                <Link to={`/products/${suggest.response.id}`}>
                  <h2 className="text-lg text-gray-900 font-bold mb-3 hover:underline hover:cursor-pointer">
                    {suggest.response.varientname &&
                      suggest.response?.varientname?.toLowerCase()}
                    -
                    {suggest.response.typename &&
                      suggest.response?.typename?.toLowerCase()}
                    -
                    {suggest.response.typestylename &&
                      suggest.response?.typestylename[0]}
                    {suggest.response.typestylename &&
                      suggest.response?.typestylename?.slice(1).toLowerCase()}
                  </h2>
                </Link>
                <h2 className="text-xl text-gray-900 font-medium ">
                  ${suggest.response.price}.00
                </h2>
              </div>
              <div className="p-3 flex-1">
                <Text fontSize={"md"} fontWeight={"bold"}>
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
                <Box display={"flex"} alignItems={"center"}>
                  <Text fontSize={"md"} fontWeight={"bold"}>
                    Sizes
                  </Text>
                  {sizeError && (
                    <Text
                      fontSize={"sm"}
                      ml={"2"}
                      fontWeight={"semibold"}
                      color={"red"}
                    >
                      *Size is required
                    </Text>
                  )}
                </Box>
                {Sizes.map((size, index) => {
                  return (
                    <button
                      key={index}
                      className={`text-sm p-1.5 px-3 m-1 my-3 ${
                        chooseSize === Sizes[index]
                          ? "bg-black text-white"
                          : "bg-transparent text-gray-500"
                      } hover:bg-black hover:text-white hover:cursor-pointer  rounded-md font-medium  border border-spacing-2 border-gray-300 `}
                      onClick={() => {
                        setchooseSize(size);
                        setSizeError(false);
                      }}
                    >
                      {size}
                    </button>
                  );
                })}

                {suggest.response.typestylename === "PANTS" && (
                  <Box>
                    <Box display={"flex"} alignItems={"center"} my={"2"}>
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        Length
                      </Text>
                      {lengthError && (
                        <Text ml={"2"} color={"red"} fontWeight={"semibold"}>
                          *Length is required
                        </Text>
                      )}
                    </Box>
                    <Stack direction={"row"}>
                      <Box
                        cursor={"pointer"}
                        _hover={{
                          bgColor: "black",
                          color: "white",
                        }}
                        p={"2"}
                        rounded={"md"}
                        bgColor={
                          selectLength === "Regular" ? "black" : "gray.300"
                        }
                        color={selectLength === "Regular" ? "white" : "black"}
                        onClick={() => {
                          setSelectLength("Regular");
                          setLengthError(false);
                        }}
                      >
                        <Text>Regular</Text>
                      </Box>
                      <Box
                        cursor={"pointer"}
                        _hover={{
                          bgColor: "black",
                          color: "white",
                        }}
                        p={"2"}
                        rounded={"md"}
                        bgColor={
                          selectLength === "Petite" ? "black" : "gray.300"
                        }
                        color={selectLength === "Petite" ? "white" : "black"}
                        onClick={() => {
                          setSelectLength("Petite");
                          setLengthError(false);
                        }}
                      >
                        <Text>Petite</Text>
                      </Box>
                    </Stack>
                  </Box>
                )}
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
                    cursor: "pointer",
                  }}
                  userSelect={"none"}
                  onClick={() => {
                    if (chooseSize != null) {
                      const item = {
                        productID: suggest.response.id,
                        productimage: suggest.response.productimage[0],
                        productname: `${suggest.response.varientname}-${suggest.response.typename}-${suggest.response.typestylename}`,
                        productsize: chooseSize,
                        productLength: selectLength,
                        productcolor:
                          chooseColor || suggest.response.colors.name,
                        productPrice: suggest.response.price,
                        originalPrice: suggest.response.price,
                        count: 1,
                      };
                      // console.log(item);
                      const checkCart = CartItems.filter(
                        (cartItem) => cartItem.productID === item.productID
                      );
                      if (checkCart.length === 0) {
                        dispatch(AddCartItem([...CartItems, item]));
                        dispatch(synced_Cart(true));
                        dispatch(DrawerState(!IsDrawerOpen));
                      } else {
                        const remainingItems = CartItems.filter((cartItem) => {
                          if (cartItem.productID === item.productID) {
                            cartItem.productsize = chooseSize;
                            cartItem.productcolor =
                              chooseColor || suggest.response.colors.name;
                            cartItem.productLength = selectLength;
                          }
                          return cartItem;
                        });
                        dispatch(synced_Cart(true));
                        dispatch(DrawerState(!IsDrawerOpen));
                      }
                    } else {
                      setSizeError(true);
                      if (!selectLength) {
                        setLengthError(true);
                      }
                    }
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
