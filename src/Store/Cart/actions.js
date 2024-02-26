// ADD_CART_ITEMS
export const ADD_CART_ITEMS = "ADD_CART_ITEMS";

export const getDrawerState_Payload = (cItem) => ({
  type: ADD_CART_ITEMS,
  payload: cItem,
});

export function AddCartItem(cItem) {
  return (dispatch) => {
    dispatch(getDrawerState_Payload(cItem));
  };
}

// Increment into product count
export const INC_PRODUCT_COUNT = "INC_PRODUCT_COUNT";

export const getINC_COUNT_Payload = (productID) => ({
  type: INC_PRODUCT_COUNT,
  payload: { productID },
});

export function CartItemInc(productID) {
  return (dispatch) => {
    dispatch(getINC_COUNT_Payload(productID));
  };
}
// Decrement into product count
export const DECR_PRODUCT_COUNT = "DECR_PRODUCT_COUNT";

export const getDECR_COUNT_Payload = (productID) => ({
  type: DECR_PRODUCT_COUNT,
  payload: { productID },
});

export function CartItemDec(productID) {
  return (dispatch) => {
    dispatch(getDECR_COUNT_Payload(productID));
  };
}

// Remove Product
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const getREM_PRODUCT_Payload = (productID) => ({
  type: REMOVE_PRODUCT,
  payload: { productID },
});

export function CartRemoveItem(productID) {
  return (dispatch) => {
    dispatch(getREM_PRODUCT_Payload(productID));
  };
}

// Calculate all Product Price
export const ALL_PRODUCT_PRICE = "ALL_PRODUCT_PRICE";

export const getPRODUCT_PRICE_Payload = () => ({
  type: ALL_PRODUCT_PRICE,
});

export function AllProductPrice() {
  return (dispatch) => {
    dispatch(getPRODUCT_PRICE_Payload());
  };
}
// Reset Cart
export const RESET_CART = "RESET_CART";

export const reset_cart_Payload = () => ({
  type: RESET_CART,
});

export function ResetCart() {
  return (dispatch) => {
    dispatch(reset_cart_Payload());
  };
}

// Calculate all Product Price with shipping
export const ALL_PRODUCT_PRICE_Shipping = "ALL_PRODUCT_PRICE_Shipping";

export const getPRODUCT_PRICE_ship_Payload = (shippingCharges) => ({
  type: ALL_PRODUCT_PRICE_Shipping,
  payload: shippingCharges,
});

export function AllProductPriceShip(shippingCharges) {
  return (dispatch) => {
    dispatch(getPRODUCT_PRICE_ship_Payload(shippingCharges));
  };
}

// Sync with server
export const SYNC_CART = "SYNC_CART";

export const syncCart = (isUpdated) => ({
  type: SYNC_CART,
  payload: isUpdated,
});

export function synced_Cart(isUpdated) {
  return (dispatch) => {
    dispatch(syncCart(isUpdated));
  };
}
// Delete Cart
export const DELETE_CART = "DELETE_CART";

export const delCart = (isDeleted) => ({
  type: DELETE_CART,
  payload: isDeleted,
});

export function delete_Cart(isDeleted) {
  return (dispatch) => {
    dispatch(delCart(isDeleted));
  };
}
