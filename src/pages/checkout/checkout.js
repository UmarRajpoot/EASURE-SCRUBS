import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
// import { Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItems from "../../components/Checkout/CheckoutItems";
import {
  AddCartItem,
  AllProductPrice,
  ResetCart,
} from "../../Store/Cart/actions";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import Breadcrumbcomp from "../../components/Breadcrumbcomp";
import ShippingAddress from "../../components/ShippingAddress";
import { DrawerState } from "../../Store/Drawer/actions";
import Payments from "../../components/Stripe/Payments";
import axios from "axios";
import { BASEURL } from "../../Config/URL";

const Checkout = () => {
  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const GrandTotalPrice = useSelector((state) => state.CartOptions.GrandTotal);
  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);

  const dispatch = useDispatch();

  const getItemsFromStorage = () => {
    dispatch(DrawerState(!IsDrawerOpen));
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      dispatch(AddCartItem(JSON.parse(localStorage.getItem("cartItems"))));
      dispatch(AllProductPrice());
    }
  };

  useEffect(() => {
    getItemsFromStorage();
  }, []);

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
    "pi_3OgVgLDsONF5GHPk2mLqfgtT_secret_hA30NkfLeyZMSv09qBH1rGqIA"
  );

  const getClientSecret = async () => {
    return await axios
      .post(BASEURL + "/create-payment-intent", {})
      .then((resp) => {
        const { clientSecrets } = resp.data;
        return setClientSecret(clientSecrets);
      })
      .catch((error) => {
        console.log("client error", error);

        console.log(error);
      });
  };

  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(() => {
    if (CartItems?.length === 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }, [CartItems]);

  return (
    <>
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
      <Box minH={"full"}>
        <section>
          <div className="flex-1 flex flex-col md:flex-row md:h-96 lg:h-screen item-center justify-center">
            <div className="w-full flex flex-col items-center mt-10">
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
                        {AuthState.displayName}
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
                  <ShippingAddress />
                )}
                {step?.toLowerCase() === "payment" && (
                  <Payments clientSecret={clientSecret} />
                )}
              </Box>
            </div>
            <div className={`w-full md:w-[70%] pt-3 md:pt-0 bg-gray-100 p-10`}>
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
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text className="text-sm">Subtotal</Text>
                <Text fontWeight={"bold"} className="text-sm">
                  ${GrandTotalPrice}.00
                </Text>
              </Box>
              <hr />
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text className="text-sm">Total</Text>
                <Box display={"flex"} alignItems={"center"}>
                  <Text className="text-sm">USD</Text>
                  <Text className="text-sm" fontWeight={"medium"} pl={"2"}>
                    {GrandTotalPrice}.00
                  </Text>
                </Box>
              </Box>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
};

export default Checkout;
