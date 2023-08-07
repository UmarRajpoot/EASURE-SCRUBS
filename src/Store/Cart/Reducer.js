import * as ActionType from "./actions";

const initialState = {
  CartItems: [],
  GrandTotal: 0,
};

const CartItemReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionType.ADD_CART_ITEMS:
      return {
        ...state,
        CartItems: [...state.CartItems, actions.payload],
      };

    case ActionType.INC_PRODUCT_COUNT:
      const { productID } = actions.payload;
      const updatedIncProducts = state.CartItems.map((product) =>
        product.productID === productID
          ? {
              ...product,
              count: product.count + 1,
              productPrice: product.originalPrice * (product.count + 1),
            }
          : product
      );
      return {
        ...state,
        CartItems: updatedIncProducts,
      };
    case ActionType.DECR_PRODUCT_COUNT:
      const decItemID = actions.payload.productID;

      const updatedDecProducts = state.CartItems.map((product) =>
        product.productID === decItemID && product.count != 0
          ? {
              ...product,
              count: product.count - 1,
              productPrice: product.originalPrice * (product.count - 1),
            }
          : product
      );
      return {
        ...state,
        CartItems: updatedDecProducts,
      };
    case ActionType.REMOVE_PRODUCT:
      const removeItemID = actions.payload.productID;
      const updatedRemainProducts = state.CartItems.filter(
        (product) => product.productID !== removeItemID
      );
      return {
        ...state,
        CartItems: updatedRemainProducts,
      };
    case ActionType.ALL_PRODUCT_PRICE:
      let calculatePrice = 0;
      const allProductPriceUpdate = state.CartItems.map((product) => {
        calculatePrice = calculatePrice + parseInt(product.productPrice);
      });
      return {
        ...state,
        GrandTotal: calculatePrice,
      };

    case ActionType.RESET_CART:
      return {
        CartItems: [],
        GrandTotal: 0,
      };
    default:
      return state;
  }
};

export default CartItemReducers;
