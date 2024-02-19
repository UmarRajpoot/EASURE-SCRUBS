import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem, AllProductPrice } from "../../Store/Cart/actions";

const CheckoutItems = ({
  productId,
  productName,
  productLength,
  productsize,
  productcolor,
  productPrice,
  productimage,
  count,
}) => {
  const CartItems = useSelector((state) => state.CartOptions.CartItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center">
        <div className="w-20 h-20 rounded-xl bg-gray-100 relative">
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
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
        <IconButton
          icon={<DeleteIcon />}
          size={"sm"}
          colorScheme="red"
          m={"2"}
          onClick={() => {
            let remainigItem = CartItems.filter(
              (cartItem) => cartItem.productID !== productId
            );
            dispatch(AddCartItem(remainigItem));
            localStorage.setItem("cartItems", JSON.stringify(remainigItem));
            dispatch(AllProductPrice());
          }}
        />
      </div>
      <hr className="my-3" />
    </>
  );
};

export default CheckoutItems;
