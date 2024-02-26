import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
// import { Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItems from "../../components/Checkout/CheckoutItems";
import {
  AddCartItem,
  AllProductPrice,
  AllProductPriceShip,
  ResetCart,
  synced_Cart,
} from "../../Store/Cart/actions";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import Breadcrumbcomp from "../../components/Breadcrumbcomp";
import ShippingAddress from "../../components/ShippingAddress";
import { DrawerState } from "../../Store/Drawer/actions";
import Payments from "../../components/Stripe/Payments";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from "../../components/Firebase/Firebase";
import { AddUser } from "../../Store/Auth/actions";

const Checkout = () => {
  const [isStandardShipping, setisStandardShipping] = useState(true);
  const [shippingCharges, setShippingCharges] = useState(9);

  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const GrandTotalPrice = useSelector((state) => state.CartOptions.GrandTotal);
  const GrandTotalShipPrice = useSelector(
    (state) => state.CartOptions.GrandTotalWithShip
  );
  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);

  const dispatch = useDispatch();

  const getItemsFromStorage = () => {
    console.log("getItemsFromStorage");
    dispatch(AllProductPrice());
    if (GrandTotalPrice > 50) {
      dispatch(AllProductPriceShip(0));
    } else {
      dispatch(AllProductPriceShip(shippingCharges));
    }
  };

  useEffect(() => {
    getItemsFromStorage();
  }, [CartItems]);

  useEffect(() => {
    if (isStandardShipping === true && parseInt(GrandTotalPrice) < 50) {
      // console.log("it runs");
      setShippingCharges(9);
      dispatch(AllProductPriceShip(9));
    } else if (isStandardShipping === false && parseInt(GrandTotalPrice) < 50) {
      // console.log("it runs ss");
      setShippingCharges(19);
      dispatch(AllProductPriceShip(19));
    } else if (GrandTotalPrice > 50) {
      setShippingCharges(0);
      dispatch(AllProductPriceShip(0));
    }
  }, [isStandardShipping, CartItems]);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  useEffect(() => {
    if (step === null) {
      navigate("/checkout?step=shipping_address");
    }
  }, [step]);

  const AuthState = useSelector((state) => state.Auths.users);

  const [clientSecret, setClientSecret] = useState(
    "" //pi_3OmFqIDsONF5GHPk2H29u5ms_secret_4YEd8yyJpxZCHqare8bIdKglO
  );

  useEffect(() => {
    if (clientSecret !== "") {
      navigate("/checkout?step=payment", { replace: true });
    }
  }, [clientSecret]);

  const getCartId = localStorage.getItem("cartId") || null;

  const [emptyCart, setEmptyCart] = useState(false);

  const getCart = async () => {
    return await axios
      .post(`${BASEURL}/allCartItems`, {
        cartId: getCartId,
      })
      .then((resp) => {
        if (resp.data.response !== undefined) {
          // console.log(resp.data);
          if (resp.data?.response?.products) {
            dispatch(AddCartItem(resp.data.response.products));
          }
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    console.log("Work");
    getCart();
  }, []);

  const getUserDetail = async () => {
    const auth = getAuth(FirebaseApp);
    onAuthStateChanged(
      auth,
      (user) => {
        if (user !== null) {
          return dispatch(AddUser(user));
        }
        return null;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    let isApplied = true;
    if (isApplied) {
      getUserDetail();
    }
    return () => {
      isApplied = false;
    };
  }, []);

  return (
    <Box minH={"100%"}>
      {emptyCart && (
        <Box
          w={"full"}
          h={"full"}
          bgColor={"blackAlpha.600"}
          position={"fixed"}
          top={0}
          right={0}
          zIndex={"10"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box bgColor={"white"} p={"8"}>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              spacing={"5"}
            >
              <Text fontSize={"xl"} fontWeight={"medium"}>
                Your Bag is Empty
              </Text>
              <Text fontSize={"md"}>
                It looks like you don’t have any items in your bag.
              </Text>
              <Link to={"/"}>
                <Box
                  bgColor={"black"}
                  color={"white"}
                  px={"5"}
                  py={"3"}
                  cursor={"pointer"}
                >
                  <Text>SHOP NOW</Text>
                </Box>
              </Link>
            </Stack>
          </Box>
        </Box>
      )}
      <Box>
        <section>
          <div className=" flex-1 flex flex-col md:flex-row md:h-96 lg:h-screen item-center justify-center">
            <div className="pb-5 overflow-auto w-full flex flex-col items-center mt-10">
              <Box w={["90%", "70%"]}>
                <Heading>EASURE</Heading>
                <Box my={"3"}>
                  <Breadcrumbcomp />
                </Box>
                <Box></Box>
                <hr />
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text size={"md"} py={"3"} className="text-lg">
                    {step?.toLowerCase() === "shipping_address" &&
                      "Shipping Address"}
                    {step?.toLowerCase() === "payment" && "Payment"}
                  </Text>
                  {AuthState.length !== 0 ? (
                    <Text display={"flex"} flexDirection={["column", "row"]}>
                      <Text mr={"2"}>Login as </Text>
                      <Text
                        color={"teal"}
                        fontSize={"md"}
                        fontWeight={"medium"}
                      >
                        {AuthState?.displayName || "4"}
                      </Text>
                    </Text>
                  ) : (
                    <Text display={"flex"} flexDirection={["column", "row"]}>
                      <Text mr={"2"} className="text-sm">
                        Have an account?
                      </Text>
                      <Text
                        color={"blue"}
                        className="text-sm"
                        fontWeight={"medium"}
                        cursor={"pointer"}
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Text>
                    </Text>
                  )}
                </Box>
                {step?.toLowerCase() === "shipping_address" && (
                  <ShippingAddress
                    setisStandardShipping={setisStandardShipping}
                    setClientSecret={setClientSecret}
                    GrandTotalShipPrice={GrandTotalShipPrice}
                    GrandTotalPrice={GrandTotalPrice}
                  />
                )}
                {step?.toLowerCase() === "payment" && (
                  <Payments clientSecret={clientSecret} />
                )}
              </Box>
            </div>
            <div
              className={` w-full md:w-[70%] pt-3 md:pt-0 bg-gray-100  px-10`}
            >
              <Box className="my-10">
                {CartItems &&
                  CartItems?.map((item, index) => {
                    return (
                      <CheckoutItems
                        key={index}
                        productId={item.productID}
                        productName={item.productname}
                        productLength={item.productLength}
                        productimage={item.productimage}
                        productsize={item.productsize}
                        productcolor={item.productcolor}
                        productPrice={item.productPrice}
                        count={item.count}
                      />
                    );
                  })}
              </Box>
              <Box bgColor={"gray.200"} mb={["5", "0"]}>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  p={"3"}
                >
                  <Text className="text-sm">Subtotal</Text>
                  <Text className="text-sm">${GrandTotalPrice.toFixed(2)}</Text>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  p={"3"}
                >
                  <Text className="text-sm">Shipping Charges</Text>
                  <Text className="text-sm">${shippingCharges.toFixed(2)}</Text>
                </Box>
                {/* {!isStandardShipping && (
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"3"}
                  >
                    <Text className="text-sm">Express Shipping</Text>
                    <Text className="text-sm">
                      ${ExpressShipping.toFixed(2)}
                    </Text>
                  </Box>
                )} */}

                <hr />
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  p={"3"}
                >
                  <Text className="text-sm font-medium">Total</Text>
                  <Box display={"flex"} alignItems={"center"}>
                    {/* <Text className="text-sm">USD</Text> */}
                    <Text className="text-sm font-medium" pl={"2"}>
                      ${Number(GrandTotalShipPrice).toFixed(2)}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </section>
      </Box>
    </Box>
  );
};

export default Checkout;
