import React, { useEffect, useLayoutEffect } from "react";
import { BsBagDash } from "react-icons/bs";
import DrawerBodyItems from "./DrawerBodyItems";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../../Store/Drawer/actions";
import {
  AddCartItem,
  AllProductPrice,
  CartItemDec,
  CartItemInc,
  CartRemoveItem,
} from "../../Store/Cart/actions";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Drawer = ({ openDrawer }) => {
  useEffect(() => {
    if (openDrawer) {
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [openDrawer]);

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const GrandTotalPrice = useSelector((state) => state.CartOptions.GrandTotal);
  const dispatch = useDispatch();

  const RemoveItemIfZero = () => {
    CartItems.filter((item) => {
      if (item.count === 0) {
        dispatch(CartRemoveItem(item.productID));
      }
    });
  };

  useEffect(() => {
    RemoveItemIfZero();
    dispatch(AllProductPrice());
  }, [CartItems]);

  const Navigate = useNavigate();

  const navigate = useLocation();

  useEffect(() => {
    // setMobileDropDown(false);
    // console.log("Drawer Closed");
    dispatch(DrawerState(false));
  }, [navigate.pathname]);

  useLayoutEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      dispatch(AddCartItem(JSON.parse(localStorage.getItem("cartItems"))));
      dispatch(AllProductPrice());
    }
  }, []);

  return (
    <>
      <div className="relative">
        {openDrawer && (
          <div
            className="absolute z-10 w-full h-screen opacity-25"
            onClick={() => dispatch(DrawerState(!IsDrawerOpen))}
          ></div>
        )}
        <div
          onClick={() => dispatch(DrawerState(!IsDrawerOpen))}
          className={`bg-black fixed top-0 right-0 z-10 w-full overflow-y-auto h-screen p-4 overflow-y-auto opacity-50 ${
            openDrawer ? "block" : "hidden"
          }`}
        ></div>
        <div
          id="drawer-form"
          className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
            openDrawer ? "-translate-x-0" : "translate-x-full"
          } bg-white md:w-1/4 dark:bg-gray-800 min-h-screen pb-5`}
          tabIndex="-1"
          aria-labelledby="drawer-form-label"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            <BsBagDash className="p-2" size={40} />
            MY BAG
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-form"
            aria-controls="drawer-form"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => dispatch(DrawerState(!IsDrawerOpen))}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          {CartItems.length === 0 && (
            <div className="bg-gray-300 p-3">
              <h4 className="text-base text-center">
                Your cart is currently empty.
              </h4>
            </div>
          )}
          <div className="my-2">
            {CartItems &&
              CartItems.map((item, index) => {
                return (
                  <DrawerBodyItems
                    key={index}
                    productID={item.productID}
                    productimage={item.productimage}
                    productName={item.productname}
                    productsize={item.productsize}
                    productcolor={item.productcolor}
                    productPrice={item.productPrice}
                    count={item.count}
                    Incrementbtn={() => {
                      dispatch(CartItemInc(item.productID));
                    }}
                    decrementbtn={() => {
                      dispatch(CartItemDec(item.productID));
                    }}
                    deletebtn={() => {
                      let remainingItems = CartItems.filter(
                        (cartitem) => cartitem.productID !== item.productID
                      );
                      localStorage.setItem(
                        "cartItems",
                        JSON.stringify(remainingItems)
                      );
                      dispatch(CartRemoveItem(item.productID));
                    }}
                  />
                );
              })}
          </div>
          <div className="flex items-center justify-between p-3">
            <h4 className="text-xl ">Total:</h4>
            <h4 className="text-xl ">${GrandTotalPrice}</h4>
          </div>
          <Button
            w={"full"}
            mt={4}
            bgColor={"black"}
            color={"white"}
            rounded={"none"}
            _hover={{
              bgColor: "gray.900",
            }}
            onClick={() => {
              localStorage.setItem("cartItems", JSON.stringify(CartItems));
              dispatch(DrawerState(!IsDrawerOpen));
              setTimeout(() => {
                Navigate("/checkout?step=shipping_address");
              }, 500);
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Drawer;
